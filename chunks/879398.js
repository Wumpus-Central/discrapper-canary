i.d(t, { D: () => bZ });
var n,
    s,
    l,
    r,
    a,
    o = i(419954),
    u = i(358776),
    d = i(780964),
    c = i(682348),
    g = i(885386),
    m = i(375708),
    A = i(395277);
let h = (0, o.zD)(d.X.ACTIVITY_PRIVACY_SETTING, {
        useTitle: () => m.intl.string(A.default.WhdCGP),
        useSubtitle: () => m.intl.string(A.default.UQ9RHJ),
        useValue: g.tz.useSetting,
        setValue: g.tz.updateSetting,
    }),
    E = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_SHARING_CATEGORY, {
        useTitle: () => m.intl.string(m.t["6x5uWQ"]),
        useSearchTerms: () => [m.intl.string(m.t["8ka8li"])],
        buildLayout: () => [h],
    });
var T = i(945810),
    x = i(21973);
let S = (0, T.mj)({
        name: "2026-02-activity-privacy-matching",
        kind: "user",
        defaultConfig: { copyChanges: !1, upsell: !1 },
        variations: {
            0: { copyChanges: !1, upsell: !1 },
            1: { copyChanges: !0, upsell: !1 },
            2: { copyChanges: !0, upsell: !0 },
        },
    }),
    p = (e) => {
        let t = (0, x.lX)(e),
            i = S.useConfig({ location: e });
        return t || i.copyChanges;
    };
var f = i(627968),
    N = i(64700),
    _ = i(873298),
    C = i(192308),
    I = i(365258);
let b = (0, o.Qx)(d.X.ACTIVITY_PRIVACY_PER_GUILD_DEFAULT_SETTING, {
        useTitle: () =>
            p("GuildActivitySharingDefaultSetting") ? m.intl.string(m.t.vpgck1) : m.intl.string(A.default["/LHVbt"]),
        useOptions: function () {
            let e = p("GuildActivitySharingDefaultSetting");
            return N.useMemo(
                () =>
                    e
                        ? [
                              {
                                  value: _.Qd.ACTIVITY_STATUS_OFF,
                                  name: m.intl.string(m.t.FzgQna),
                                  desc: m.intl.string(m.t.SQxoyc),
                              },
                              {
                                  value: _.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: m.intl.string(m.t["1hvuGH"]),
                                  desc: m.intl.string(m.t.odUCPE),
                              },
                              { value: _.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.fQc5la) },
                          ]
                        : [
                              { value: _.Qd.ACTIVITY_STATUS_ON, name: m.intl.string(m.t.UzGMH9) },
                              {
                                  value: _.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                                  name: m.intl.string(A.default["/sAeRY"]),
                              },
                              { value: _.Qd.ACTIVITY_STATUS_OFF, name: m.intl.string(A.default.m3oL7Q) },
                          ],
                [e],
            );
        },
        useValue: g._Z.useSetting,
        setValue: function (e) {
            let t,
                n = g._Z.getSetting();
            if (
                (g._Z.updateSetting(e),
                (t = "GuildActivitySharingDefaultSetting"),
                !(0, x.W1)(t) && !S.getConfig({ location: t }).upsell)
            )
                return;
            let s = (0, I.g8)(n, e);
            if (null == s) return;
            let l = (0, I.Xc)(e);
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("92164"), i.e("5980"), i.e("62041"), i.e("41996")]).then(
                    i.bind(i, 32167),
                );
                return (t) =>
                    (0, f.jsx)(e, {
                        ...t,
                        direction: s.direction,
                        affectedGuildIds: s.affectedGuildIds,
                        settingName: l,
                    });
            });
        },
    }),
    v = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_PER_GUILD_CATEGORY, {
        useTitle: () =>
            p("GuildActivitySharingCategory") ? m.intl.string(m.t.VDcvrR) : m.intl.string(A.default["1PougL"]),
        useSubtitle: () =>
            p("GuildActivitySharingCategory") ? m.intl.string(m.t["/Go08F"]) : m.intl.string(A.default.OO17Lg),
        buildLayout: () => [b],
    }),
    j = (0, o.AK)(d.X.ACTIVITY_PRIVACY_TO_PROFILE_PRIVACY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.J0SFL2),
        destinationKey: d.X.DATA_AND_PRIVACY_PANEL,
    }),
    y = (0, o.gN)(d.X.ACTIVITY_PRIVACY_RELATED_SETTINGS, {
        usePredicate: () => (0, x.lX)("ActivityPrivacyRelatedSettings"),
        buildLayout: () => [j],
    });
var O = i(683071),
    R = i(17928),
    L = i(331322),
    D = i(243721),
    P = i(892547),
    G = i(922016),
    U = i(980707),
    M = i(477782),
    V = i(939249),
    k = i(834730),
    w = i(847374),
    F = i(661531),
    B = i(123292),
    z = i(140735),
    Y = i(498642),
    X = i(174459),
    H = i(743790),
    K = i(71393),
    W = i(711014),
    Z =
        (((n = {}).SERVER_ORDER = "server-order"),
        (n.RECENTLY_JOINED = "recently-joined"),
        (n.ACTIVITY_SHARING_ON = "activity-sharing-on"),
        (n.ACTIVITY_SHARING_OFF = "activity-sharing-off"),
        n);
let q = {
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
var Q = i(652215),
    J = i(842449);
function $(e) {
    let { guild: t, isActivityRestricted: i, onToggleActivityRestrictedGuild: n } = e,
        s = (0, R.bG)([Y.A], () => Y.A.getMemberCount(t.id));
    return (0, f.jsxs)(L.B, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 16,
        children: [
            (0, f.jsx)("div", { className: J.FO, children: (0, f.jsx)(H.K, { guild: t, size: 48 }) }),
            (0, f.jsx)("div", {
                className: J.QH,
                children: (0, f.jsx)(D.d, {
                    label: t.name,
                    description: m.intl.format(m.t.zRl6XR, { count: s ?? 0 }),
                    checked: !i,
                    onChange: (e) => n({ checked: e, guildId: t.id }),
                }),
            }),
        ],
    });
}
let ee = function (e) {
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
            numTotalGuilds: h,
        } = (function () {
            let [e, t] = (0, N.useState)(""),
                [i, n] = (0, N.useState)("server-order"),
                s = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
                l = (0, R.bG)([K.A], () => K.A.getGuilds()),
                r = s.map((e) => l[e]).filter(Boolean),
                a = g.Pw.useSetting(),
                [o, u] = (0, N.useState)(a);
            (0, N.useEffect)(() => {
                u(a);
            }, [a]);
            let d = async (e) => {
                    u(e);
                    try {
                        await g.Pw.updateSetting(e);
                    } catch (e) {
                        u(a);
                    }
                },
                c = 0 !== o.length,
                [m, A] = (0, N.useState)(() => q[i](r, a)),
                h = m.map((e) => l[e.id]).filter(Boolean);
            return {
                guilds: "" === e ? h : h.filter((t) => t.name.toLowerCase().includes(e.toLowerCase())),
                sortOrder: i,
                searchQuery: e,
                setSortOrder: (e) => {
                    A(q[e](r, a)), n(e);
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
        E = (0, N.useId)(),
        T = (0, N.useRef)(null),
        x = (0, N.useMemo)(
            () => [
                { id: Z.SERVER_ORDER, label: m.intl.string(m.t.STMPJ2), value: Z.SERVER_ORDER },
                { id: Z.RECENTLY_JOINED, label: m.intl.string(m.t.CbaapP), value: Z.RECENTLY_JOINED },
                { id: Z.ACTIVITY_SHARING_ON, label: m.intl.string(A.default.ZI51JZ), value: Z.ACTIVITY_SHARING_ON },
                {
                    id: Z.ACTIVITY_SHARING_OFF,
                    label: m.intl.string(A.default["+kxafn"]),
                    value: Z.ACTIVITY_SHARING_OFF,
                },
            ],
            [],
        ),
        S = x.find((e) => e.value === l)?.label ?? "";
    return (0, f.jsxs)("div", {
        className: J.iE,
        children: [
            t,
            (0, f.jsxs)("div", {
                className: J.N1,
                children: [
                    (0, f.jsx)(P.I, {
                        query: n,
                        onChange: s,
                        onClear: () => {
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_cleared",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                                s("");
                        },
                        onFocus: () =>
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                        onBlur: () =>
                            X.default.track(Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: l,
                                activity_restricted_guild_count: c,
                                total_guild_count: h,
                            }),
                        placeholder: m.intl.string(m.t["H+nRYw"]),
                        "aria-label": m.intl.string(m.t["5h0QOP"]),
                        inputProps: { "aria-controls": E, "aria-expanded": !0 },
                    }),
                    i.length > 0 &&
                        (0, f.jsxs)("div", {
                            className: J.gO,
                            children: [
                                (0, f.jsx)(G.Y, {
                                    targetElementRef: T,
                                    position: "bottom",
                                    align: "left",
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, f.jsx)(U.W, {
                                            navId: "guild-sort-order-menu",
                                            onClose: t,
                                            "aria-label": m.intl.string(m.t.LxVjvJ),
                                            onSelect: t,
                                            children: (0, f.jsx)(M.rX, {
                                                children: x.map((e) => {
                                                    let { id: t, label: i, value: n } = e;
                                                    return (0, f.jsx)(
                                                        M.iD,
                                                        {
                                                            id: t,
                                                            group: "sort-order",
                                                            label: i,
                                                            checked: l === n,
                                                            action: () => {
                                                                X.default.track(
                                                                    Q.HAw.ACTIVITY_SHARING_SETTINGS_INTERACTED,
                                                                    {
                                                                        interaction: "sort_order_changed",
                                                                        sort_order: n,
                                                                        activity_restricted_guild_count: c,
                                                                        total_guild_count: h,
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
                                        (0, f.jsxs)(V.D, {
                                            ...e,
                                            innerRef: T,
                                            className: J.Ku,
                                            children: [
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-subtle",
                                                    children: S,
                                                }),
                                                (0, f.jsx)(w.a, { size: "xs", color: F.A.colors.TEXT_SUBTLE }),
                                            ],
                                        }),
                                }),
                                (0, f.jsx)(B.Q, {
                                    variant: "primary",
                                    textVariant: "text-sm/medium",
                                    onClick: o,
                                    text: a ? m.intl.string(m.t["7lxcLO"]) : m.intl.string(m.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, f.jsx)(z.A, {
                "aria-live": "polite",
                role: "region",
                children: m.intl.format(A.default.EvzDff, { count: i.length }),
            }),
            (0, f.jsxs)("ul", {
                className: J.X1,
                id: E,
                "aria-label": m.intl.string(m.t["7hB4kg"]),
                children: [
                    0 === i.length &&
                        (0, f.jsx)("div", {
                            className: J.pb,
                            children: (0, f.jsx)(k.E, {
                                className: J.R$,
                                variant: "text-lg/medium",
                                children: m.intl.string(m.t["Xe+fJM"]),
                            }),
                        }),
                    i.map((e) =>
                        (0, f.jsx)(
                            $,
                            { guild: e, isActivityRestricted: d(e.id), onToggleActivityRestrictedGuild: u },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
var et = i(366189);
let ei = (0, o.E2)(d.X.ACTIVITY_PRIVACY_PER_GUILD_SETTING, {
        useSearchTerms: () => [m.intl.string(A.default["/LHVbt"])],
        Component: function () {
            let e = g.tz.useSetting()
                ? null
                : (0, f.jsx)("div", {
                      className: et.l,
                      children: (0, f.jsx)(O.w, { type: "warning", children: m.intl.string(A.default["xxI0/W"]) }),
                  });
            return (0, f.jsx)(ee, { notice: e });
        },
    }),
    en = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_MY_SERVERS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.TqdOvC),
        useSubtitle: () => (p("MyServersCategory") ? m.intl.string(A.default.OO17Lg) : null),
        buildLayout: () => [ei, y],
    }),
    es = (0, o.zD)(d.X.ACTIVITY_PRIVACY_FRIENDS_JOIN_SETTING, {
        useTitle: () => m.intl.string(A.default.khuuzv),
        useSubtitle: () => m.intl.string(A.default["8EWsJ8"]),
        useValue: () => g.e.useSetting(),
        setValue: (e) => g.e.updateSetting(e),
    }),
    el = (0, o.zD)(d.X.ACTIVITY_PRIVACY_VOICE_JOIN_SETTING, {
        useTitle: () => m.intl.string(A.default.Uz5Ipi),
        useSubtitle: () => m.intl.string(A.default.CZI2Gb),
        useValue: () => g.UM.useSetting(),
        setValue: (e) => g.UM.updateSetting(e),
    }),
    er = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_GAME_JOINING_CATEGORY, {
        useTitle: () => m.intl.string(A.default["89YBr5"]),
        buildLayout: () => [es, el],
        useSearchTerms: () => [m.intl.string(m.t.VOszPA)],
    });
var ea = i(359778),
    eo = i(208963);
let eu = (0, o.E2)(d.X.ACTIVITY_PRIVACY_TERMS, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(ea.Z, {
                type: ea.Z.Types.PRIMARY,
                className: eo.A,
                children: (0, f.jsx)(k.E, {
                    variant: "text-sm/normal",
                    children: m.intl.format(m.t.xvCsx4, { termsLink: Q.X7G.TERMS, privacyLink: Q.X7G.PRIVACY }),
                }),
            });
        },
    }),
    ed = (0, o.zZ)(d.X.ACTIVITY_PRIVACY_TERMS_CATEGORY, { buildLayout: () => [eu] }),
    ec = (0, o.t_)(d.X.ACTIVITY_PRIVACY_PANEL, {
        useTitle: () => m.intl.string(m.t.Cq98yL),
        buildLayout: () => [E, v, en, er, ed],
    }),
    eg = (0, o.i4)(d.X.ACTIVITY_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.Cq98yL),
        icon: c._,
        buildLayout: () => [ec],
    });
var em = i(935399),
    eA = i(625657),
    eh = i(534514),
    eE = i(821609),
    eT = i(404778),
    ex = i(554146),
    eS = i(131607),
    ep = i(843402),
    ef = i(589051),
    eN = i(592598),
    e_ = i(933297),
    eC = i(351906),
    eI = i(532624),
    eb = i(773371),
    ev = i(184809),
    ej = i(723702),
    ey = i(766075),
    eO = i(999834),
    eR = i(735438),
    eL = i.n(eR),
    eD = i(350535),
    eP = i(672396);
let eG = eM(null);
function eU() {
    var e;
    let t = eM(eG);
    (e = eG),
        eL().isEqual(eL().omit(t, "old_enabled"), eL().omit(e, "old_enabled")) ||
            (X.default.track(Q.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (eG = t));
}
function eM(e) {
    let t = ev.default.getNotificationPositionMode(),
        i = t !== Q.G6Q.DISABLED,
        n = eI.Ay.getOverlayKeybind(),
        s = eI.Ay.getOverlayChatKeybind();
    return {
        enabled: eb.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? t : null,
        text_notifications_mode: eN.A.isNotificationDisabled(eP.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != n ? (0, eD.dI)(n.shortcut) : null,
        text_activation_hotkey: null != s ? (0, eD.dI)(s.shortcut) : null,
        text_opacity_slider: ev.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? eb.default.enabled,
    };
}
var eV = i(793574),
    ek = i(237984),
    ew = i(503698),
    eF = i.n(ew),
    eB = i(890856),
    ez = i(389128);
let eY = (e) => {
    e.preventDefault(), e.stopPropagation();
};
function eX(e) {
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
    return (0, f.jsxs)("div", {
        className: eF()(ez.HS, d),
        children: [
            (0, f.jsxs)(eB.s, {
                "aria-label": u,
                onClick: o,
                children: [
                    null != t && (0, f.jsx)("div", { className: ez.x_, children: t }),
                    (0, f.jsxs)("div", {
                        className: ez.rN,
                        children: [
                            null != i && (0, f.jsx)("div", { className: ez.$t, children: i }),
                            (0, f.jsxs)("div", {
                                className: ez.c8,
                                children: [
                                    (0, f.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        className: ez.SZ,
                                        children: n,
                                    }),
                                    null != s &&
                                        (0, f.jsx)(k.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    null != r &&
                                        (0, f.jsx)(k.E, {
                                            variant: "text-xxs/medium",
                                            color: "text-muted",
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, f.jsx)("div", { className: ez.a$, children: l }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: ez.Om, children: a }),
        ],
    });
}
let eH = (0, o.E2)(d.X.OVERLAY_BUG_REPORTER_SETTING, {
    Component: function () {
        return (0, f.jsx)(eX, {
            title: m.intl.string(m.t["z4/l+V"]),
            description: m.intl.string(m.t["3aZq/0"]),
            action: (0, f.jsx)(eE.$, {
                variant: "primary",
                text: m.intl.string(m.t.s2nVhG),
                onClick: () => {
                    (0, ek.b)(eV.A.USER_SETTINGS, Q.BRT.APP);
                },
            }),
            "aria-label": m.intl.string(m.t["z4/l+V"]),
        });
    },
    useSearchTerms: () => [m.intl.string(m.t["z4/l+V"])],
});
var eK = i(812729),
    eW = i.n(eK),
    eZ = i(587895),
    eq = i(429913),
    eQ = i(616356),
    eJ = i(952818);
function e$(e, t) {
    return null != e && null != e.id ? e.id : null != t && null != t.id ? t.id : void 0;
}
function e0() {
    let e = (0, R.bG)([eQ.A], () => eQ.A.getStreamerActiveStreamMetadata()),
        t = (0, R.bG)(
            [eJ.Ay],
            () => {
                let e = eJ.Ay.getVisibleGame();
                return null != e ? eJ.Ay.getGameOrTransformedSubgameForPID(e.pid) : null;
            },
            [],
            eW(),
        ),
        [i] = (0, eq.A)([e$(e, t)]);
    return { runningGame: t ?? void 0, runningGameApplication: i ?? void 0 };
}
var e1 = i(990078),
    e2 = i(478016),
    e3 = i(31300),
    e6 = i(780907),
    e4 = i(684013),
    e5 = i(56562),
    e8 = i(964486),
    e7 = i(137177),
    e9 = i(814925),
    te = i(810412),
    tt = i(41984),
    ti = i(296027),
    tn = i(562519);
let ts = 5 * i(927813).A.Millis.DAY,
    tl = new tn.A("overlay_survey_timestamps");
function tr(e, t) {
    let n, s;
    (n = Date.now()),
        (null != (s = Array.from(tl.values()).reduce((e, t) => Math.max(e, t), 0)) && n - s < ts) ||
            Array.from(tl.values()).filter((e) => {
                let t = new Date(e);
                return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
            }).length >= 3 ||
            (0, C.openModalLazy)(async () => {
                let n,
                    { default: s } = await Promise.all([i.e("76982"), i.e("82318")]).then(i.bind(i, 387101));
                return (n = Date.now()), tl.add(n), (i) => (0, f.jsx)(s, { ...i, clientSettingType: e, gameId: t });
            });
}
var ta = i(512950),
    to = i(975571),
    tu = i(935671);
function td() {
    (0, tu.sL)("overlay-settings");
}
function tc(e) {
    let { className: t, game: i } = e;
    return (0, tu.NP)() && null != i && i.elevated
        ? (0, f.jsx)("div", {
              className: t,
              children: (0, f.jsx)(ta.p, {
                  messageType: ta.Y.WARNING,
                  action: (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["1iI46O"]),
                      onClick: td,
                  }),
                  children: m.intl.format(m.t["LJzl+0"], { helpCenterLink: to.A.getArticleURL(Q.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
var tg = i(760751),
    tm = i(189081),
    tA = i(9302),
    th = i(311678),
    tE = i(320448);
let tT = new Set([
    tt.AR.INITIALIZING,
    tt.AR.WAITING_FOR_SCREEN_TYPE_RESOLUTION,
    tt.AR.WAITING_FOR_MODULE_TRACKING,
    tt.AR.WAITING_FOR_OVERLAY_OPEN,
    tt.AR.WAITING_FOR_POPOUT_OPEN,
    tt.AR.WAITING_FOR_MODULE_POPOUT_CAPTURE,
    tt.AR.WAITING_FOR_REACT_INITIALIZATION,
    tt.AR.WAITING_FOR_PID_FOCUS,
    tt.AR.WAITING_FOR_SUCCESSFUL_SHOW,
]);
function tx(e) {
    let { children: t, className: i, onExpand: n, ...s } = e,
        [l, r] = N.useState(!1);
    return (0, f.jsx)(th.N, {
        className: ez.uR,
        collapsibleContent: (0, f.jsx)("div", { className: ez.oV, children: t }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, f.jsx)(eX, {
                ...s,
                onClick: (e) => {
                    var i;
                    r((i = !l)), n?.(i), t?.(e);
                },
                className: eF()(ez.AC, i),
                action: (0, f.jsxs)("div", {
                    className: ez.rc,
                    children: [
                        s.action,
                        l
                            ? (0, f.jsx)(w.a, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "var(--interactive-text-active)",
                              })
                            : (0, f.jsx)(tE._, {
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
let tS = (0, o.E2)(d.X.OVERLAY_CURRENT_GAME, {
    Component: function () {
        let { runningGame: e, runningGameApplication: t } = e0(),
            i = e?.pid,
            n = (0, R.bG)(
                [ti.default],
                () => (null == e || null == i ? null : ti.default.getTrackedGameByPid(i)),
                [e, i],
                eW(),
            ),
            { enabledLegacy: s, enabledOOP: l } = (0, R.cf)(
                [tg.A, tm.A],
                () =>
                    null == e && null == n
                        ? { enabledLegacy: !1, enabledOOP: !1 }
                        : null == e
                          ? { enabledLegacy: n?.legacyEnabled ?? !1, enabledOOP: n?.oopEnabled ?? !1 }
                          : (0, eJ.hw)(e, !1, [tg.A, tm.A]),
                [e, n],
            ),
            r = (0, R.bG)([eJ.Ay, tg.A, tm.A], () => (null == e ? null : (0, eJ.xU)(e, eJ.Ay, tg.A, tm.A)), [e], eW()),
            [a, o] = N.useState(l),
            [u, d] = N.useState(s),
            [c, g] = N.useState(!1);
        N.useEffect(() => {
            o(l), d(s);
        }, [l, s]);
        let A = !(0, tA.supportsLegacy)(),
            h = !(0, tA.supportsOutOfProcess)(),
            { legacyEnabled: E, oopEnabled: T } = (0, R.cf)([ti.default], () => ti.default.getGlobalEnabledStatus()),
            x = (t, i) => {
                if (null == e) return;
                let n = !1,
                    s = !1;
                switch (i) {
                    case te.OverlayToggledClientSettingType.LEGACY_GAME:
                        d(t), e6.Ay.toggleOverlay(e, t, a), (n = !t && u);
                        break;
                    case te.OverlayToggledClientSettingType.OOP_GAME:
                        o(t), e6.Ay.toggleOverlay(e, u, t), (s = !t && a);
                        break;
                    case te.OverlayToggledClientSettingType.LEGACY:
                        e4.A.setEnabled(t, T), (0, te.Q3)(t, te.OverlayToggledClientSettingType.LEGACY, e.id ?? null);
                        break;
                    case te.OverlayToggledClientSettingType.OOP:
                        e4.A.setEnabled(E, t), (0, te.Q3)(t, te.OverlayToggledClientSettingType.OOP, e.id ?? null);
                }
                (n || s) &&
                    tr(
                        n
                            ? te.OverlayToggledClientSettingType.LEGACY_GAME
                            : te.OverlayToggledClientSettingType.OOP_GAME,
                        e.id ?? null,
                    );
            },
            S = A && h,
            p = !E && !T,
            _ = !a && !E && u && !A,
            C = !u && !T && a && !h,
            I = n?.overlayMethod === tt.Ue.Disabled,
            b = n?.state === tt.AR.OVERLAY_RENDERING && !I,
            v = n?.state != null && tT.has(n.state) && !I,
            j = n?.overlayMethod === tt.Ue.OutOfProcess,
            y = n?.overlayMethod === tt.Ue.OutOfProcessLimitedInteraction,
            O = n?.overlayMethod === tt.Ue.Hook,
            L = n?.state === tt.AR.OVERLAY_CRASHED || n?.state === tt.AR.OVERLAY_CRASHED_DISABLED,
            P = !a && !u,
            [G, U] = (() => {
                switch (!0) {
                    case b && j:
                        return [
                            m.intl.format(m.t.hFVBIg, {
                                overlayMethod: m.intl.string(m.t.a3eXSw),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        k.E,
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
                    case b && y:
                        return [
                            m.intl.format(m.t.hFVBIg, {
                                overlayMethod: m.intl.string(m.t["506Aba"]),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        k.E,
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
                    case b && O:
                        return [
                            m.intl.format(m.t.hFVBIg, {
                                overlayMethod: m.intl.string(m.t.bvlpDR),
                                overlayMethodHook: function (e, t) {
                                    return (0, f.jsx)(
                                        k.E,
                                        { tag: "span", variant: "text-sm/medium", color: "text-strong", children: e },
                                        t,
                                    );
                                },
                            }),
                            (function () {
                                switch (!0) {
                                    case n?.fullscreenType !== e5.aI.BORDERLESS_FULLSCREEN:
                                        return m.intl.string(m.t.mJmbeC);
                                    case h:
                                        return m.intl.string(m.t.C7bLTQ);
                                    case !n?.oopEnabled:
                                        return m.intl.string(m.t.WiY24u);
                                    case !T:
                                        return m.intl.string(m.t.cAFVsL);
                                    case !n?.supportsOutOfProcess:
                                        return m.intl.string(m.t.XcGEcs);
                                    default:
                                        return m.intl.string(m.t.bJXH2v);
                                }
                            })(),
                        ];
                    case L:
                        return [m.intl.string(m.t.OFC2aw), null];
                    case S:
                        return [m.intl.string(m.t.m7X4az), null];
                    case p:
                        return [m.intl.string(m.t["9DUS5l"]), null];
                    case P:
                        return [m.intl.string(m.t.nQ9EdJ), null];
                    case _:
                    case C:
                        return [m.intl.string(m.t.VWUn0a), null];
                    case v:
                        if (j) return [m.intl.string(m.t["s8+CFq"]), null];
                        if (O) return [m.intl.string(m.t.JEEdqt), null];
                        if (y) return [m.intl.string(m.t.pzBMwY), null];
                        return [m.intl.string(m.t["2Xhy9k"]), null];
                    case null == n:
                        return [m.intl.string(m.t.vwHPRi), null];
                    case I: {
                        let e = n?.fullscreenType === e5.aI.FULLSCREEN ? m.intl.string(m.t.mJmbeC) : null;
                        return [m.intl.string(m.t.VPW4XY), e];
                    }
                    default:
                        return [m.intl.string(m.t.ONovP5), null];
                }
            })();
        (0, e8.Ay)(() => {
            e6.Ay.getDetectableGames();
        });
        let [M, w] = N.useMemo(
            () =>
                v
                    ? ["text-muted", F.A.colors.TEXT_MUTED.css]
                    : b && y
                      ? ["text-feedback-warning", F.A.colors.TEXT_FEEDBACK_WARNING.css]
                      : b && j
                        ? ["text-feedback-positive", F.A.colors.TEXT_FEEDBACK_POSITIVE.css]
                        : b && O
                          ? ["text-strong", F.A.colors.TEXT_STRONG.css]
                          : ["interactive-text-default", F.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
            [v, b, y, j, O],
        );
        return null == e
            ? null
            : (0, f.jsxs)(tx, {
                  onExpand: g,
                  className: c ? ez.tx : void 0,
                  title: (0, f.jsxs)(f.Fragment, {
                      children: [
                          t?.name ?? r?.name ?? e?.gameName ?? "",
                          null != r && r.verified
                              ? (0, f.jsx)(e1.m, {
                                    text: m.intl.string(m.t["4PJP5p"]),
                                    children: (0, f.jsx)(e9.A, {
                                        size: 16,
                                        color: F.A.colors.BACKGROUND_BRAND.css,
                                        children: (0, f.jsx)(e2.U, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: F.A.colors.WHITE.css,
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  description: G,
                  hint: null != U ? U : void 0,
                  header: (0, f.jsxs)(f.Fragment, {
                      children: [
                          b || v
                              ? (0, f.jsx)(e3.k, { size: "xxs", color: w })
                              : (0, f.jsx)("div", { className: ez.W4 }),
                          (0, f.jsx)(k.E, {
                              variant: "text-xs/semibold",
                              color: M,
                              children: m.intl.string(m.t.CDOx3w),
                          }),
                      ],
                  }),
                  icon: (0, f.jsx)(e7.A, { game: t, pid: e?.pid, size: e7.M.MEDIUM }),
                  "aria-label": m.intl.string(m.t["87O5GC"]),
                  action: (0, f.jsx)(V.D, {
                      onClick: (e) => eY(e),
                      children: (0, f.jsx)(D.d, {
                          checked: (a && T) || (u && E),
                          disabled: S,
                          onChange: (t) => {
                              ((t, i) => {
                                  if (null == e) return;
                                  let n = !1,
                                      s = !1;
                                  switch (i) {
                                      case "game":
                                          e6.Ay.toggleOverlay(e, t, t), d(t), o(t), (n = !t && u), (s = !t && a);
                                          break;
                                      case "global":
                                          e4.A.setEnabled(t, t), (n = !t && E), (s = !t && T);
                                          break;
                                      case "both":
                                          e4.A.setEnabled(t, t),
                                              e6.Ay.toggleOverlay(e, t, t),
                                              d(t),
                                              o(t),
                                              (n = (!t && E) || (!t && u)),
                                              (s = (!t && T) || (!t && a));
                                  }
                                  let l = null;
                                  n
                                      ? (l =
                                            "game" === i
                                                ? te.OverlayToggledClientSettingType.LEGACY_GAME
                                                : te.OverlayToggledClientSettingType.LEGACY)
                                      : s &&
                                        (l =
                                            "game" === i
                                                ? te.OverlayToggledClientSettingType.OOP_GAME
                                                : te.OverlayToggledClientSettingType.OOP),
                                      null != l && tr(l, e.id ?? null);
                              })(
                                  t,
                                  ((e, t) => {
                                      let i = !t && e,
                                          n = !T && a,
                                          s = !E && u,
                                          l = !a && T,
                                          r = !u && E;
                                      switch (!0) {
                                          case i && (n || s) && (l || r):
                                              return "both";
                                          case i && (n || s):
                                              return "global";
                                          default:
                                              return "game";
                                      }
                                  })(t, (a && T) || (u && E)),
                              );
                          },
                      }),
                  }),
                  warning: (0, f.jsx)(tc, { className: ez.Hh, game: e }),
                  children: [
                      (0, f.jsx)(eX, {
                          title: m.intl.string(m.t["7BlVIs"]),
                          description: m.intl.string(m.t.ndgADE),
                          hint: T ? void 0 : m.intl.string(m.t.cAFVsL),
                          "aria-label": m.intl.string(m.t["7BlVIs"]),
                          action: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(D.d, {
                                      checked: a && T,
                                      disabled: h,
                                      onChange: (e) => {
                                          e && !T
                                              ? x(e, te.OverlayToggledClientSettingType.OOP)
                                              : x(e, te.OverlayToggledClientSettingType.OOP_GAME);
                                      },
                                  }),
                                  (0, f.jsx)("div", { className: ez.Kz }),
                              ],
                          }),
                      }),
                      (0, f.jsx)(eX, {
                          title: m.intl.string(m.t.BfFpW1),
                          description: m.intl.string(m.t.OzInYk),
                          hint: E ? void 0 : m.intl.string(m.t["3sYHXm"]),
                          "aria-label": m.intl.string(m.t.BfFpW1),
                          action: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(D.d, {
                                      checked: u && E,
                                      disabled: A,
                                      onChange: (e) => {
                                          e && !E
                                              ? x(e, te.OverlayToggledClientSettingType.LEGACY)
                                              : x(e, te.OverlayToggledClientSettingType.LEGACY_GAME);
                                      },
                                  }),
                                  (0, f.jsx)("div", { className: ez.Kz }),
                              ],
                          }),
                      }),
                  ],
              });
    },
    usePredicate: () => {
        let { runningGame: e } = e0();
        return null != e;
    },
    useSearchTerms: () => [m.intl.string(m.t["9cb1Uz"])],
});
var tp = i(364522),
    tf = i(206885),
    tN = i(871633);
function t_(e) {
    let { game: t, gameApplication: i } = e,
        n = N.useMemo(() => (null == t ? null : "pid" in t ? t.pid : null), [t]),
        s = (0, R.bG)([eZ.A], () => (null != i ? i : eZ.A.getApplication(t?.id)), [i, t]);
    return (0, f.jsx)(e7.A, { game: s, pid: n, size: e7.M.SMALL });
}
function tC(e) {
    let {
            rawGame: t,
            gameApplication: i,
            supportDisabled: n,
            getEnabledFromStatus: s,
            onChange: l,
            clientSettingType: r,
            ariaLabel: a,
        } = e,
        o = (0, R.cf)([eJ.Ay, tg.A, tm.A], () => (0, eJ.xU)(t, eJ.Ay, tg.A, tm.A)),
        u = (0, R.cf)([tg.A, tm.A], () => (0, eJ.hw)(t, !1, [tg.A, tm.A]), [t]),
        d = s(u),
        [c, g] = N.useState(d);
    return (
        N.useEffect(() => {
            g(d);
        }, [d]),
        (0, f.jsx)(eX, {
            title: t.name,
            icon: (0, f.jsx)(t_, { game: o, gameApplication: i }),
            "aria-label": a,
            action: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(D.d, {
                        checked: c,
                        disabled: n,
                        onChange: (e) => {
                            let i;
                            return (i = !e && c), void (g(e), l(e, o, u), i && tr(r, o.id ?? t?.id ?? null));
                        },
                    }),
                    (0, f.jsx)("div", { className: ez.Kz }),
                ],
            }),
        })
    );
}
let tI = (0, o.E2)(d.X.OVERLAY_LEGACY_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { legacyEnabled: i, oopEnabled: n } = (0, R.cf)([ti.default], () =>
                    ti.default.getGlobalEnabledStatus(),
                ),
                s = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                l = (0, eq.A)(s.map((e) => e.id)),
                r = !(0, tA.supportsLegacy)(),
                a = (e) => {
                    e4.A.setEnabled(e, n);
                    let t = eJ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, te.Q3)(e, te.OverlayToggledClientSettingType.LEGACY, t),
                        !e && i && tr(te.OverlayToggledClientSettingType.LEGACY, t);
                },
                o = (e, t, i) => {
                    let { enabledOOP: n } = i;
                    e6.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        (0, tA.supportsLegacy)()
                            ? r
                                ? m.intl.string(m.t.r9jEVw)
                                : m.intl.string(m.t.OzInYk)
                            : m.intl.string(m.t["8Ox6/E"]),
                    [r],
                );
            return 0 === s.length
                ? (0, f.jsx)(eX, {
                      title: m.intl.string(m.t.BfFpW1),
                      description: u,
                      "aria-label": m.intl.string(m.t.BfFpW1),
                      className: ez.dA,
                      action: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(D.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                              tf.O && (0, f.jsx)("div", { className: ez.Kz }),
                          ],
                      }),
                  })
                : (0, f.jsxs)(tx, {
                      onExpand: t,
                      className: e ? ez.tx : void 0,
                      title: m.intl.string(m.t.BfFpW1),
                      description: u,
                      "aria-label": m.intl.string(m.t.BfFpW1),
                      action: (0, f.jsx)(V.D, {
                          onClick: (e) => eY(e),
                          children: (0, f.jsx)(D.d, { checked: i, disabled: r, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, f.jsx)("div", {
                              className: ez.SC,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: m.intl.string(m.t.FzoWRo),
                              }),
                          }),
                          (0, f.jsx)(tp.Ip, {
                              className: ez.XG,
                              children: s.map((e, t) =>
                                  (0, f.jsx)(
                                      tC,
                                      {
                                          rawGame: e,
                                          clientSettingType: te.OverlayToggledClientSettingType.LEGACY_GAME,
                                          supportDisabled: r,
                                          gameApplication: l[t],
                                          getEnabledFromStatus: (e) => {
                                              let { enabledLegacy: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: m.intl.format(m.t.hvPYsF, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t.BfFpW1)],
    }),
    tb = (0, o.E2)(d.X.OVERLAY_OOP_SETTING, {
        Component: function () {
            let [e, t] = N.useState(!1),
                { oopEnabled: i, legacyEnabled: n } = (0, R.cf)([ti.default], () =>
                    ti.default.getGlobalEnabledStatus(),
                ),
                s = !(0, tA.supportsOutOfProcess)(),
                l = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!0)).filter((e) => !(0, tN.n1)(e)),
                r = (0, eq.A)(l.map((e) => e.id)),
                a = (e) => {
                    let t = !e && i;
                    e4.A.setEnabled(n, e);
                    let s = eJ.Ay.getCurrentGameForAnalytics()?.id ?? null;
                    (0, te.Q3)(e, te.OverlayToggledClientSettingType.OOP, s),
                        t && tr(te.OverlayToggledClientSettingType.OOP, s);
                },
                o = (e, t, i) => {
                    let { enabledLegacy: n } = i;
                    e6.Ay.toggleOverlay(t, e, n);
                },
                u = N.useMemo(
                    () =>
                        tf.O ? (s ? m.intl.string(m.t.C7bLTQ) : m.intl.string(m.t.ndgADE)) : m.intl.string(m.t.m7X4az),
                    [s],
                );
            return 0 === l.length
                ? (0, f.jsx)(eX, {
                      title: m.intl.string(m.t["7BlVIs"]),
                      description: u,
                      "aria-label": m.intl.string(m.t["7BlVIs"]),
                      className: ez.dA,
                      action: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(D.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                              tf.O && (0, f.jsx)("div", { className: ez.Kz }),
                          ],
                      }),
                  })
                : (0, f.jsxs)(tx, {
                      onExpand: t,
                      className: e ? ez.tx : void 0,
                      title: m.intl.string(m.t["7BlVIs"]),
                      description: u,
                      "aria-label": m.intl.string(m.t["7BlVIs"]),
                      action: (0, f.jsx)(V.D, {
                          onClick: (e) => eY(e),
                          children: (0, f.jsx)(D.d, { checked: i, disabled: s, onChange: (e) => a(e) }),
                      }),
                      children: [
                          (0, f.jsx)("div", {
                              className: ez.SC,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  children: m.intl.string(m.t.FzoWRo),
                              }),
                          }),
                          (0, f.jsx)(tp.Ip, {
                              className: ez.XG,
                              children: l.map((e, t) =>
                                  (0, f.jsx)(
                                      tC,
                                      {
                                          rawGame: e,
                                          clientSettingType: te.OverlayToggledClientSettingType.OOP_GAME,
                                          gameApplication: r[t],
                                          supportDisabled: s,
                                          getEnabledFromStatus: (e) => {
                                              let { enabledOOP: t } = e;
                                              return t;
                                          },
                                          onChange: o,
                                          ariaLabel: m.intl.format(m.t.nByTd3, { gameName: e.name }).toString(),
                                      },
                                      e.id,
                                  ),
                              ),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t["7BlVIs"])],
    }),
    tv = (0, o.zZ)(d.X.OVERLAY_ENABLE_CATEGORY, {
        useSubnavLabel: () => m.intl.string(m.t["/dp6yY"]),
        buildLayout: () => [tS, tb, tI, eH],
    }),
    tj = (0, o.zD)(d.X.OVERLAY_CLICKABLE_REGIONS_SETTING, {
        useValue: () => (0, R.bG)([ev.default], () => !ev.default.disableClickableRegions),
        setValue: (e) => {
            e4.A.setDisableClickableRegions(!e);
        },
        useTitle: () => m.intl.string(m.t["+eFXxq"]),
        useSubtitle: () => m.intl.string(m.t.kivMAp),
    });
var ty = i(284009),
    tO = i.n(ty),
    tR = i(97260),
    tL = i(635242);
let tD = (0, o.E2)(d.X.OVERLAY_KEYBIND_SETTING, {
    Component: function () {
        let e = (0, R.bG)([eI.Ay], () => eI.Ay.getOverlayKeybind()),
            t = !(0, tA.supportsLegacy)(),
            i = !(0, tA.supportsOutOfProcess)(),
            [n, s] = (0, R.yK)([eJ.Ay], () => [eJ.Ay.canShowAdminWarning, eJ.Ay.getVisibleGame()], []),
            l = (0, tu.NP)(),
            r = null != s && s.elevated && n && !l,
            a = !(0, eI.DV)(e?.shortcut ?? []);
        return (0, f.jsx)("div", {
            className: ez.hc,
            children: (0, f.jsxs)("div", {
                className: ez.eH,
                children: [
                    (0, f.jsxs)("div", {
                        className: ez.Bu,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: m.intl.string(m.t.VsAZcC),
                            }),
                            r &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ez.y7,
                                    children: m.intl.string(m.t.NsowVa),
                                }),
                            a &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-warning",
                                    className: ez.y7,
                                    children: m.intl.string(m.t["UNoTw/"]),
                                }),
                        ],
                    }),
                    (0, f.jsx)("div", {
                        className: ez.IH,
                        children: (0, f.jsx)(tL.A, {
                            disabled: t && i,
                            defaultValue: null != e ? e.shortcut : [],
                            onChange: function (t) {
                                tO()(null != e, "Keybind should never be undefined"),
                                    tR.A.setKeybind({ ...e, shortcut: t });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    useSearchTerms: () => [m.intl.string(m.t.VsAZcC)],
});
var tP = i(515183),
    tG = i(682763);
let tU = (0, o.zD)(d.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
        usePredicate: () => {
            let { runningGameApplication: e } = e0();
            return e?.id != null;
        },
        useDisabled: () => {
            let { runningGame: e } = e0();
            return null != e && (0, tP.qJ)(e.pid);
        },
        useValue: () => {
            let { runningGame: e, runningGameApplication: t } = e0(),
                i = t?.id,
                n = (0, R.bG)([eN.A], () => eN.A.isLimitedInteractionOverrideEnabled(i)),
                s = null != e && (0, tP.qJ)(e.pid);
            return n || s;
        },
        setValue: (e) => {
            let t,
                i,
                n,
                s,
                { runningGameApplication: l } =
                    ((t = eQ.A.getStreamerActiveStreamMetadata()),
                    (s = e$(
                        t,
                        (n =
                            null != (i = eJ.Ay.getVisibleGame())
                                ? eJ.Ay.getGameOrTransformedSubgameForPID(i.pid)
                                : null),
                    )),
                    { runningGame: n ?? void 0, runningGameApplication: eZ.A.getApplication(s) ?? void 0 });
            null != l && (0, tG.x8)(l.id, e);
        },
        useTitle: () => m.intl.string(m.t.wgVQND),
        useSubtitle: () => m.intl.string(m.t["5SsyF5"]),
    }),
    tM = (0, o.zZ)(d.X.OVERLAY_GENERAL_CATEGORY, { buildLayout: () => [tD, tU, tj] });
var tV = i(93465);
let tk = [
    {
        title: m.t.eVE4LX,
        description: m.t["72WNqk"],
        disabledSetting: tV.M.TEXT_CHAT,
        key: d.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: m.t.oifnSh,
        description: m.t.bgU5r0,
        disabledSetting: tV.M.WELCOME_GENERAL,
        key: d.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: m.t.hqsZJW,
        description: m.t.kHjdqc,
        disabledSetting: tV.M.GO_LIVE_NUDGE,
        key: d.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: m.t.sop3rn,
        description: m.t.pjgffc,
        disabledSetting: tV.M.GAME_ACTIVITY,
        key: d.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: m.t["2QVhbb"],
        description: m.t.wQ4ilB,
        disabledSetting: tV.M.NOW_PLAYING,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: m.t.giM9fA,
        description: m.t.EhAfWj,
        disabledSetting: tV.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, ef.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, R.bG)([eN.A], () => eN.A.isNotificationDisabledBySetting(tV.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function tw(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => m.intl.string(e.title),
        useSubtitle: () => m.intl.string(e.description),
        useValue: () => !(0, R.bG)([eN.A], () => eN.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            e4.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let tF = (0, o.FW)(d.X.OVERLAY_NOTIFICATIONS_LIST, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.gnKWdS),
        isTitleHiddenVisually: !0,
        buildLayout: () => tk.map(tw),
    }),
    tB = (0, o.zZ)(d.X.OVERLAY_NOTIFICATIONS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.xOE5bA),
        buildLayout: () => [tF],
    }),
    tz = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_AVATAR_SIZE, {
        useTitle: () => m.intl.string(m.t.dnvZSg),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getAvatarSizeMode()),
        setValue: (e) => {
            e4.A.setAvatarSizeMode(e);
        },
        useOptions: () => [
            { id: "large", label: m.intl.string(m.t.YcOxtr), value: Q.OSZ.LARGE },
            { id: "small", label: m.intl.string(m.t.BKIKqx), value: Q.OSZ.SMALL },
        ],
    }),
    tY = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
        useTitle: () => m.intl.string(m.t.J0dpcB),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getDisplayNameMode()),
        setValue: (e) => {
            e4.A.setDisplayNameMode(e);
        },
        useOptions: () => [
            { id: "always", label: m.intl.string(m.t.nBmDrT), value: Q.pwA.ALWAYS },
            { id: "speaking", label: m.intl.string(m.t["2OvIZY"]), value: Q.pwA.ONLY_WHILE_SPEAKING },
            { id: "never", label: m.intl.string(m.t.ekjlPL), value: Q.pwA.NEVER },
        ],
    }),
    tX = (0, o.Hn)(d.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
        useTitle: () => m.intl.string(m.t.swsWWC),
        useValue: () => (0, R.bG)([ev.default], () => ev.default.getDisplayUserMode()),
        setValue: (e) => {
            e4.A.setDisplayUserMode(e);
        },
        useOptions: () => [
            { id: "always", label: m.intl.string(m.t.nBmDrT), value: Q.f5z.ALWAYS },
            { id: "speaking", label: m.intl.string(m.t["2OvIZY"]), value: Q.f5z.ONLY_WHILE_SPEAKING },
        ],
    });
var tH = i(391973),
    tK = i(489277),
    tW = i(897720),
    tZ = i(38502);
function tq() {
    let e = tK.A.getWidgetByType(Q.uss.VOICE_V3);
    if (null == e) return null;
    let t = tZ.A.getWidget(e.id);
    return null != t && (0, tW.ZO)(t) ? t : null;
}
i(392164);
let tQ = (0, o.sN)(d.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    useTitle: () => m.intl.string(m.t["X/Uyzc"]),
    minValue: 0,
    maxValue: 25,
    markers: [0, 5, 10, 15, 20, 25],
    onMarkerRender: (e) => (e < 1 ? m.intl.string(m.t.nrUzFL) : e),
    getInitialValue: () => {
        let e = tq();
        return e?.meta.voiceStatesMaxShown ?? 8;
    },
    onValueRender: function (e) {
        return e < 1 ? m.intl.string(m.t.nrUzFL) : `${Math.floor(e)}`;
    },
    setValue: (e) => {
        let t = tq();
        null != t &&
            (e < 1
                ? (0, tH.cC)(t.id, { voiceStatesMaxShown: -1 })
                : (0, tH.cC)(t.id, { voiceStatesMaxShown: Math.floor(e) }));
    },
});
var tJ = i(43990),
    t$ = i(450740),
    t0 = i(968898),
    t1 = i(95701),
    t2 = i(889227),
    t3 = i(288737),
    t6 = i(287809),
    t4 = i(403362);
function t5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new t3.A({
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
        user: new t2.A({ id: s, username: e }),
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
let t8 = (0, o.E2)(d.X.OVERLAY_VOICE_WIDGET_PREVIEW, {
        Component: function () {
            let e,
                t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                {
                    avatarSizeMode: i,
                    displayNameMode: n,
                    displayUserMode: s,
                } = (0, R.cf)([ev.default], () => ({
                    avatarSizeMode: ev.default.getAvatarSizeMode(),
                    displayNameMode: ev.default.getDisplayNameMode(),
                    displayUserMode: ev.default.getDisplayUserMode(),
                })),
                [l] = N.useState(() => [
                    t5(m.intl.string(m.t.C0ZDvo), !0, !1),
                    t5(m.intl.string(m.t.iOtj8E), !1, !1, !0),
                    t5(m.intl.string(m.t["0oqNgL"]), !1, !0),
                ]),
                r = (0, R.bG)([tK.A, tZ.A], () => {
                    let e = tK.A.getWidgetByType(Q.uss.VOICE_V3);
                    if (null == e) return null;
                    let t = tZ.A.getWidget(e.id);
                    return null != t && (0, tW.ZO)(t) ? t : null;
                }),
                a = r?.meta?.voiceStatesMaxShown ?? 8,
                o = [null != t ? (((e = t5(t.username)).user = t), e) : null, ...l].filter(t4.Vq),
                u = [new Map(o.map((e) => [e.user.id, e])), o.map((e) => e.user.id)],
                d = (0, f.jsx)(tJ.N, {
                    theme: Q.NJ8.MIDNIGHT,
                    children: (e) =>
                        (0, f.jsxs)("div", {
                            className: eF()(ez.Y5, e),
                            children: [
                                (0, f.jsx)("div", {
                                    className: ez.kJ,
                                    children: (0, f.jsx)(t$.DH, {
                                        id: "voice-widget",
                                        title: m.intl.string(m.t.KNJ6Vq),
                                        channel: (0, t1.createChannelRecord)({
                                            id: "123",
                                            name: "Test Channel",
                                            type: Q.rbe.GUILD_VOICE,
                                            guild_id: "456",
                                        }),
                                        overlayVoiceStates: u,
                                        displayNameMode: n,
                                        displayUserMode: s,
                                        avatarSizeMode: i,
                                        widget: Q.uss.VOICE,
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
                                (0, f.jsxs)("div", {
                                    className: ez.R$,
                                    children: [
                                        (0, f.jsx)(t0.Pl, { children: m.intl.string(m.t.KNJ6Vq) }),
                                        (0, f.jsx)(t0.CS, {}),
                                        (0, f.jsx)(t0.O0, { id: r?.id ?? "voice-widget", pinned: r?.pinned ?? !1 }),
                                    ],
                                }),
                            ],
                        }),
                });
            return (0, f.jsx)("div", { className: ez.F9, children: d });
        },
        useSearchTerms: () => [],
    }),
    t7 = (0, o.zZ)(d.X.OVERLAY_VOICE_WIDGET_CATEGORY, {
        useTitle: () => m.intl.string(m.t.r1TZfh),
        buildLayout: () => [t8, tz, tY, tX, tQ],
    });
var t9 = i(49999),
    ie = i(9025);
function it() {
    let [e, t] = (0, eS.kn)([ex.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, em.Ay)(() => () => {
        t(t9.i.AUTO_DISMISS);
    }),
    e !== ex.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, f.jsxs)(f.Fragment, {
              children: [
                  (0, f.jsxs)("div", {
                      className: ie.xC,
                      children: [
                          (0, f.jsx)("div", {
                              children: (0, f.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/10b8ab47f3371360233219f4b20fa86155553ddb810ceb8688654738bf7e15d0.png",
                                  alt: m.intl.string(m.t.mdXZh1),
                                  className: ie.tl,
                              }),
                          }),
                          (0, f.jsx)("div", {
                              children: (0, f.jsxs)("div", {
                                  className: ie.vJ,
                                  children: [
                                      (0, f.jsx)(eh.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: m.intl.string(m.t.jzjJQg),
                                      }),
                                      (0, f.jsx)(k.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: m.intl.string(m.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, f.jsx)("div", {
                              children: (0, f.jsx)("img", {
                                  src: "https://cdn.discordapp.com/assets/content/2aa57f16c71171fc8e0edb8cca60735f1192195344d17fa667de6d3ca8163ba0.png",
                                  alt: m.intl.string(m.t.mdXZh1),
                                  className: ie.lh,
                              }),
                          }),
                          (0, f.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ie.VV,
                              children: (0, f.jsx)(eE.$, {
                                  variant: "primary",
                                  text: m.intl.string(m.t.Q26diF),
                                  onClick: () => void t(t9.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(eT.c, { className: ie.yF }),
              ],
          });
}
function ii() {
    let e = (0, R.bG)([eC.A], () => eC.A.enabled),
        t = (0, ef.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, f.jsxs)(f.Fragment, {
              children: [
                  (0, f.jsx)(O.w, {
                      type: "warning",
                      children: m.intl.format(m.t.fuEX5B, {
                          onClick: () => (0, ey.openUserSettings)(d.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, f.jsx)(eT.c, { className: ie.yF }),
              ],
          })
        : null;
}
let is = (0, o.t_)(d.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                eU(),
                eI.Ay.addChangeListener(eU),
                eN.A.addChangeListener(eU),
                ev.default.addChangeListener(eU),
                eb.default.addChangeListener(eU),
                ej.isPlatformEmbedded && (0, ep.a2)(),
                () => {
                    eI.Ay.removeChangeListener(eU),
                        eN.A.removeChangeListener(eU),
                        ev.default.removeChangeListener(eU),
                        eb.default.removeChangeListener(eU),
                        ej.isPlatformEmbedded && (0, ep.e0)();
                }
            );
        },
        useTitle: () => m.intl.string(m.t["9cb1Uz"]),
        decoration: {
            type: e_.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(it, {}), (0, f.jsx)(ii, {})] });
            },
        },
        buildLayout: () => [tv, tM, t7, tB],
    }),
    il = (0, o.i4)(d.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["9cb1Uz"]),
        icon: eA.l,
        usePredicate: eO.b_,
        buildLayout: () => [is],
    });
var ir = i(687966),
    ia = i(396478),
    io = i(270003),
    iu = i(227309),
    id = i(363195),
    ic = i(1215),
    ig = i(39623),
    im = i(952270),
    iA = i(138134),
    ih = i(414079),
    iE = i(29160),
    iT = i(650583),
    ix = i(150717),
    iS = i(653307);
let ip = (0, ej.isWindows)();
function iN(e) {
    let { rawGame: t, nowPlaying: n = !1, isOverride: s, subgames: l, isSubgame: r = !1, parentGame: a } = e,
        o = (0, R.cf)([eJ.Ay, tg.A, tm.A], () => (0, eJ.xU)(t, eJ.Ay, tg.A, tm.A)),
        { canToggleDetection: u, isCurrentGameDetectionEnabled: d } = (0, R.cf)([eJ.Ay], () => ({
            canToggleDetection: null == a || eJ.Ay.isDetectionEnabled(a),
            isCurrentGameDetectionEnabled: eJ.Ay.isDetectionEnabled(o),
        })),
        c = (0, R.bG)([eJ.Ay], () => eJ.Ay.getVisibleGame()),
        [g, A] = N.useState(!1),
        h = N.useMemo(
            () =>
                (0, tN.n1)(o)
                    ? r
                        ? o.gameName
                        : m.intl.formatToPlainString(m.t.G6BGdx, { subgameName: o.gameName })
                    : o.name,
            [o, r],
        ),
        [E, T] = N.useState(h ?? "???"),
        x = eF()(iS.tR, {
            [ix.LO]: !n,
            [ix.Rw]: n,
            [ix.FB]: null != o && n,
            [ix.xL]: r,
            [ix.fG]: null != l && l.length > 0,
        });
    function S() {
        null != l && l.length > 0 && d
            ? (0, C.openModalLazy)(async () => {
                  let { Modal: e } = await i.e("4823").then(i.bind(i, 158954));
                  return (t) =>
                      (0, f.jsx)(e, {
                          ...t,
                          title: m.intl.formatToPlainString(m.t.PZ4fKc, { platform: h }),
                          subtitle: m.intl.formatToPlainString(m.t.ZIQbfb, { platform: h }),
                          actions: [
                              { text: m.intl.string(m.t["ETE/oC"]), onClick: () => t.onClose(), variant: "secondary" },
                              {
                                  text: m.intl.string(m.t.Fmjztz),
                                  onClick: () => {
                                      e6.Ay.toggleDetection(o), t.onClose();
                                  },
                                  variant: "primary",
                              },
                          ],
                      });
              })
            : e6.Ay.toggleDetection(o);
    }
    let p = null != c && (0, eJ.Es)(o) === (0, eJ.Es)(c),
        _ = (null != a && a.id === c?.id) || p || (null != l && l.some((e) => e.id === c?.id));
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)("div", {
                className: x,
                children: [
                    (0, f.jsxs)("div", {
                        className: eF()(ix.$K, iS.Vd),
                        children: [
                            o.verified && !s
                                ? (0, f.jsxs)("div", {
                                      className: ix.HS,
                                      children: [
                                          (0, f.jsx)("div", { className: ix.mO, children: h }),
                                          (0, f.jsx)(e1.m, {
                                              text: m.intl.string(m.t["4PJP5p"]),
                                              children: (0, f.jsx)(e9.A, {
                                                  className: ix.qf,
                                                  size: 18,
                                                  color: F.A.unsafe_rawColors.BRAND_500.css,
                                                  children: (0, f.jsx)(e2.U, {
                                                      size: "custom",
                                                      width: 18,
                                                      height: 18,
                                                      color: F.A.unsafe_rawColors.WHITE.css,
                                                  }),
                                              }),
                                          }),
                                      ],
                                  })
                                : (0, f.jsx)("input", {
                                      className: eF()(ix.mO, ix.sr),
                                      type: "text",
                                      maxLength: 128,
                                      value: E,
                                      onBlur: function () {
                                          o.name !== E && e6.Ay.editName(o, E);
                                      },
                                      onKeyDown: function (e) {
                                          e.key === iT.dh.ENTER && (e.currentTarget.blur(), e.preventDefault());
                                      },
                                      onChange: (e) => T(e.target.value),
                                  }),
                            (function () {
                                let e,
                                    t,
                                    { played: i, exePath: s } = o;
                                return (
                                    n || p
                                        ? (e = m.intl.string(m.t.VbV5dv))
                                        : null != i && "" !== i && (e = m.intl.format(m.t["gGeOE+"], { when: i })),
                                    (0, f.jsx)("div", {
                                        className: ix.GN,
                                        children: (0, f.jsx)(iE.A, {
                                            hoverText:
                                                null != s && "" !== s
                                                    ? ((t = s.replace(/^file:\/\//i, "")),
                                                      (0, ej.isWindows)() && (t = t.toUpperCase()),
                                                      t)
                                                    : "",
                                            children: e,
                                        }),
                                    })
                                );
                            })(),
                        ],
                    }),
                    s || g
                        ? null
                        : (0, f.jsx)("div", {
                              className: eF()(iS.tR, iS.oA, iS.LT, ix.E3),
                              children: (0, f.jsx)(e1.m, {
                                  text: m.intl.string(m.t["y0B+lo"]),
                                  children: (0, f.jsx)(V.D, {
                                      "aria-label": m.intl.string(m.t["y0B+lo"]),
                                      className: ix.ym,
                                      onClick: function () {
                                          if (g) return;
                                          let e = null != o.id ? tg.A.getDetectableGame(o.id) : null;
                                          X.default.track(Q.HAw.USER_SETTINGS_REPORT_INCORRECT_GAME_DETECTION, {
                                              application_id: e?.id,
                                              game_name: (0, tN.n1)(o) ? o.gameName : o.name,
                                          }),
                                              A(!0),
                                              (0, C.openModalLazy)(async () => {
                                                  let { default: t } = await Promise.all([
                                                      i.e("56600"),
                                                      i.e("27495"),
                                                  ]).then(i.bind(i, 651930));
                                                  return (i) =>
                                                      (0, f.jsx)(t, {
                                                          ...i,
                                                          detectedActivity: {
                                                              name: o.name ?? "",
                                                              application_id: e?.id ?? o.id ?? void 0,
                                                              type: Q.$pd.PLAYING,
                                                          },
                                                          onSubmitted: () => {},
                                                      });
                                              });
                                      },
                                      children: (0, f.jsx)(iA.i, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ix.Lj,
                                          colorClass: ix.GS,
                                      }),
                                  }),
                              }),
                          }),
                    (function () {
                        let { detectable: e } = o,
                            t =
                                e && u
                                    ? (0, f.jsx)(ig.b, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ix.Lj,
                                          colorClass: ix.GS,
                                      })
                                    : (0, f.jsx)(im.G, {
                                          size: "md",
                                          color: "currentColor",
                                          className: u ? ix.$V : ix.zN,
                                          colorClass: ix.GS,
                                      });
                        return (0, f.jsx)("div", {
                            className: eF()(iS.tR, iS.oA, iS.LT, ix.E3),
                            children: (0, f.jsx)(e1.m, {
                                text: m.intl.string(m.t.QmitzM),
                                children: u
                                    ? (0, f.jsx)(V.D, {
                                          "aria-label": m.intl.string(m.t.QmitzM),
                                          className: ix.ym,
                                          onClick: S,
                                          children: t,
                                      })
                                    : t,
                            }),
                        });
                    })(),
                    (function () {
                        if (!ip || null != a) return null;
                        let { overlay: e, overlayWarn: t } = o,
                            i = e
                                ? (0, f.jsx)(e3.k, {
                                      size: "md",
                                      color: "currentColor",
                                      className: ix.Lj,
                                      colorClass: ix.GS,
                                  })
                                : (0, f.jsx)(ic.n, {
                                      size: "md",
                                      color: "currentColor",
                                      className: ix.$V,
                                      colorClass: ix.GS,
                                  }),
                            n = t
                                ? (0, f.jsx)(e1.m, {
                                      text: m.intl.string(m.t.Vfw2L5),
                                      children: (0, f.jsx)("i", { className: ix.kb }),
                                  })
                                : null;
                        return (0, f.jsxs)("div", {
                            className: eF()(iS.tR, iS.oA, iS.LT, ix.E3),
                            children: [
                                n,
                                (0, f.jsx)(e1.m, {
                                    text: m.intl.string(m.t["1+O+Tu"]),
                                    children: (0, f.jsx)(V.D, {
                                        "aria-label": m.intl.string(m.t["1+O+Tu"]),
                                        className: ix.ym,
                                        onClick: () => {
                                            var t;
                                            return (t = !e), void e6.Ay.toggleOverlay(o, t, t);
                                        },
                                        children: i,
                                    }),
                                }),
                            ],
                        });
                    })(),
                    (n && !s) || _
                        ? null
                        : (0, f.jsx)(ih.A, {
                              className: ix.LS,
                              onClick: function () {
                                  e6.Ay.deleteEntry(o),
                                      l?.forEach((e) => {
                                          e6.Ay.deleteEntry(e);
                                      });
                              },
                          }),
                ],
            }),
            null != l &&
                l.length > 0 &&
                !n &&
                (0, f.jsx)("div", {
                    className: ix.AQ,
                    children: l.map((e, t) =>
                        (0, f.jsxs)(
                            N.Fragment,
                            {
                                children: [
                                    (0, f.jsx)(iN, { rawGame: e, isOverride: !1, isSubgame: !0, parentGame: o }),
                                    t !== l.length - 1 && (0, f.jsx)("div", { className: ix.PQ }),
                                ],
                            },
                            (0, eJ.Es)(e),
                        ),
                    ),
                }),
        ],
    });
}
i(321073);
let i_ = (0, i(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return new Set(t.map((e) => e.exePath));
});
function iC() {
    let e = (0, R.yK)([eJ.Ay], () => eJ.Ay.getGamesSeen(!1)),
        t = (0, R.bG)([eJ.Ay], () => i_(...eJ.Ay.getOverrides()));
    N.useEffect(() => ((0, ep.a2)(), ep.e0), []);
    let { gameHistory: i, robloxSubgameHistory: n } = N.useMemo(
        () =>
            e.reduce((e, t) => ((0, tN.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: i, robloxSubgameHistory: n, overrideExePaths: t };
}
var iI = i(818050);
function ib() {
    let e = (0, R.bG)([id.A], () => id.A.theme);
    return (0, f.jsxs)(ia.pp, {
        theme: e,
        className: iI.eT,
        children: [
            (0, f.jsx)(ia.G8, { darkSrc: i(839628), lightSrc: i(446404), width: 430, height: 250 }),
            (0, f.jsx)(ia.SG, { children: m.intl.string(m.t["1yiJwn"]) }),
        ],
    });
}
function iv() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: i } = iC();
    return 0 === e.length
        ? (0, f.jsx)(ib, {})
        : (0, f.jsx)(io.n, {
              children: (0, f.jsx)("div", {
                  children: e.map((e) =>
                      (0, f.jsx)(
                          iN,
                          { rawGame: e, isOverride: i.has(e.exePath), subgames: e.id === iu.a7 ? t : void 0 },
                          (0, eJ.Es)(e),
                      ),
                  ),
              }),
          });
}
let ij = (0, o.E2)(d.X.REGISTERED_GAMES_ADDED_GAMES_SETTING, {
    useSearchTerms: () => [],
    Component: () => (0, f.jsx)(iv, {}),
});
var iy = i(424994);
let iO = (0, o.zZ)(d.X.REGISTERED_GAMES_ADDED_GAMES_CATEGORY, {
    buildLayout: () => [ij],
    useTitle: () => m.intl.string(m.t.jCOdvx),
    useSubtitle: () => m.intl.format(m.t.KPA3m9, { igdbLink: iy.s8 }),
});
var iR = i(305866),
    iL = i(783878),
    iD = i(197287),
    iP = i(604949);
function iG(e) {
    let { onClose: t } = e,
        i = (0, R.bG)([eJ.Ay], () => eJ.Ay.getCandidateGames()),
        [n, s] = N.useState(null),
        l = i.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, f.jsxs)(iR.l, {
        className: eF()(iD.H, iP.Y_),
        "aria-label": m.intl.string(m.t.GTCx0p),
        children: [
            (0, f.jsx)(iL.Z, {
                selectionMode: "single",
                placeholder: m.intl.string(m.t.XqMe3N),
                value: n,
                options: l,
                onSelectionChange: function (e) {
                    s(e);
                },
            }),
            (0, f.jsx)(eT.c, { className: eF()(iI.Ot, iI.QB) }),
            (0, f.jsxs)("div", {
                className: eF()(iD.o, iS.xM),
                children: [
                    (0, f.jsx)(B.Q, { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: t }),
                    (0, f.jsx)(eE.$, {
                        variant: "primary",
                        text: m.intl.string(m.t.GTCx0p),
                        disabled: null == n,
                        onClick: function () {
                            null != n && (e6.Ay.addGame(n.pid, n.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
var iU = i(564206);
let iM = (0, o.E2)(d.X.REGISTERED_GAMES_ADD_GAME_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.GTCx0p)],
    Component: () => {
        let e = N.useRef(null);
        return (0, f.jsxs)("div", {
            className: eF()(iU.a, iI.Gf),
            children: [
                (0, f.jsx)("span", { children: m.intl.string(m.t.xwhoqM) }),
                (0, f.jsx)(G.Y, {
                    targetElementRef: e,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, f.jsx)(iG, { onClose: t });
                    },
                    align: "center",
                    position: "bottom",
                    children: (t) =>
                        (0, f.jsx)(B.Q, {
                            ...t,
                            buttonRef: e,
                            variant: "primary",
                            textVariant: "text-sm/medium",
                            text: m.intl.string(m.t.GjgdXe),
                        }),
                }),
            ],
        });
    },
});
function iV() {
    return (0, f.jsx)("div", {
        className: eF()(iS.tR, ix.eS, ix.Rw),
        children: (0, f.jsxs)("div", {
            className: eF()(ix.$K, iS.Vd),
            children: [
                (0, f.jsx)("div", { className: ix.mO, children: m.intl.string(m.t.H68X9x) }),
                (0, f.jsx)("div", { className: ix.GN, children: m.intl.string(m.t.T5Ilmw) }),
            ],
        }),
    });
}
let ik = (0, o.E2)(d.X.REGISTERED_GAMES_CURRENT_GAME_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["MY9/Oe"])],
        Component: () => {
            let { robloxSubgameHistory: e, overrideExePaths: t } = iC(),
                i = (0, R.bG)([eJ.Ay], () => eJ.Ay.getVisibleGame());
            return null != i
                ? (0, f.jsx)(
                      iN,
                      {
                          rawGame: i,
                          isOverride: t.has(i.exePath),
                          nowPlaying: !0,
                          subgames: i.id === iu.a7 ? e : void 0,
                      },
                      (0, eJ.Es)(i),
                  )
                : (0, f.jsx)(iV, {});
        },
    }),
    iw = (0, o.zZ)(d.X.REGISTERED_GAMES_CURRENT_GAME_CATEGORY, {
        useTitle: () => m.intl.string(m.t["MY9/Oe"]),
        buildLayout: () => [ik, iM],
    }),
    iF = (0, o.t_)(d.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => m.intl.string(m.t.AVDyEj),
        buildLayout: () => [iw, iO],
    }),
    iB = (0, o.i4)(d.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.AVDyEj),
        icon: ir._,
        usePredicate: eO.Pi,
        buildLayout: () => [iF],
    }),
    iz = (0, o.WI)(d.X.ACTIVITY_SECTION, {
        useTitle: () => m.intl.string(m.t.nVPpLM),
        buildLayout: () => [eg, iB, il],
    });
var iY = i(550640),
    iX = i(247928),
    iH = i(97808),
    iK = i(778712),
    iW = i(775602),
    iZ = i(320095),
    iq = i(963852),
    iQ = i(763754),
    iJ = i(20851),
    i$ = i(486020),
    i0 = i(382677);
let i1 = new t1.nA({ id: "1337", guild_id: "1337", type: Q.rbe.GUILD_TEXT, name: "preview" }),
    i2 = [
        { status: Q.clD.IDLE, discriminator: "2" },
        { status: Q.clD.DND, discriminator: "3" },
        { status: Q.clD.ONLINE, mobile: !0, discriminator: "4" },
    ];
function i3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, iZ.rh)({ ...(0, iq.Ay)({ channelId: i1.id, content: e }), state: Q.cmJ.SENT, reactions: t });
}
var i6 = i(856488);
let i4 = (0, o.zD)(d.X.ENABLE_LEGACY_CHAT_INPUT, {
        useTitle: () => m.intl.string(m.t.TZ2hZH),
        useSubtitle: () => m.intl.string(m.t.Q7wgHc),
        useValue: () => g.D_.useSetting(),
        setValue: (e) => g.D_.updateSetting(e),
    }),
    i5 = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS, {
        useTitle: () => m.intl.string(m.t.XYvMIX),
        useSubtitle: () => m.intl.string(m.t.T0rbtM),
        useValue: g._z.useSetting,
        setValue: g._z.updateSetting,
    });
var i8 = i(100767),
    i7 = i(106236),
    i9 = i(113494),
    ne = i(782134),
    nt = i(54570),
    ni = i(8880),
    nn = i(75804);
let ns = eL().debounce((e) => {
    (0, nt.zU)(e);
}, 250);
function nl() {
    let [e, t] = N.useState(!1);
    return (
        (0, em.l0)(() => (0, nt.pr)()),
        (0, f.jsx)(eE.$, {
            text: m.intl.string(m.t.SKNnqq),
            icon: e ? i9.E : ne.u,
            size: "sm",
            onClick: () => {
                if (e) {
                    (0, nt.pr)(), t(!1);
                    return;
                }
                (0, nt.AU)(
                    m.intl.string(m.t.PKaNJL),
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
let nr = (0, o.E2)(d.X.TTS_PLAYBACK_RATE, {
        useSearchTerms: () => [m.intl.string(m.t.lsW5Ev)],
        Component: function () {
            let e = (0, R.bG)([ni.A], () => ni.A.speechRate);
            return (0, f.jsxs)(L.B, {
                gap: 16,
                children: [
                    (0, f.jsx)(i7.A, {
                        label: m.intl.string(m.t.lsW5Ev),
                        description: m.intl.string(m.t.Ci4wMS),
                        markers: nn.P,
                        initialValue: e,
                        defaultValue: 1,
                        stickToMarkers: !0,
                        onValueChange: ns,
                        onValueRender: (e) => `x${e.toFixed(2)}`,
                        onMarkerRender: (e) =>
                            0 === e
                                ? (0, f.jsx)(k.E, {
                                      variant: "text-xs/medium",
                                      color: "text-subtle",
                                      children: m.intl.string(m.t["493lwX"]),
                                  })
                                : 10 === e
                                  ? (0, f.jsx)(k.E, {
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: m.intl.string(m.t.ZSZEdS),
                                    })
                                  : 1 === e
                                    ? (0, f.jsx)(k.E, {
                                          variant: "text-xs/medium",
                                          color: "text-feedback-positive",
                                          children: "x1.0",
                                      })
                                    : e % 1 == 0
                                      ? ""
                                      : void 0,
                    }),
                    (0, f.jsx)(nl, {}),
                ],
            });
        },
        usePredicate: () => i8.$j,
    }),
    na = (0, o.zZ)(d.X.AUDIO_AND_SCREEN_READER_CATEGORY, {
        useTitle: () => m.intl.string(m.t.XVR0Rb),
        buildLayout: () => [nr, i5, i4],
    }),
    no = (0, o.AK)(d.X.ACCESSIBILITY_TO_DISPLAY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.aTfeGK),
        destinationKey: d.X.APPEARANCE_PANEL,
    }),
    nu = (0, o.gN)(d.X.COLOR_AND_CONTRAST_RELATED_SETTINGS, { buildLayout: () => [no] });
var nd = i(955572);
let nc = (0, o.zD)(d.X.DESATURATE_CUSTOM_COLORS, {
    useTitle: () => m.intl.string(m.t.OCJg5f),
    useSubtitle: () => m.intl.string(m.t.HEO0s3),
    useValue: () => (0, R.bG)([iW.A], () => iW.A.desaturateUserColors),
    setValue: () => (0, nd.YV)(),
});
var ng = i(652525);
let nm = (0, o.zD)(d.X.ENABLE_CUSTOM_CURSOR, {
        useTitle: () => m.intl.string(m.t["+Isihb"]),
        useSubtitle: () => m.intl.string(m.t.nNZ1Tz),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.enableCustomCursor),
        setValue: (e) => (0, nd.ts)(e),
        usePredicate: () => (0, ng.t)("EnableCustomCursorSetting"),
    }),
    nA = (0, o.zD)(d.X.ENABLE_SWITCH_ICONS, {
        useTitle: () => m.intl.string(m.t["S3z+pV"]),
        useSubtitle: () => m.intl.string(m.t["3QuI9+"]),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.isSwitchIconsEnabled),
        setValue: (e) => (0, nd.Gm)(e),
        hasIcon: !0,
    }),
    nh = (0, o.zD)(d.X.HIGH_CONTRAST_MODE, {
        useTitle: () => m.intl.string(m.t.aZlePv),
        useSubtitle: () => m.intl.string(m.t["v2qF8+"]),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.isHighContrastModeEnabled),
        setValue: (e) => (0, nd.uh)(e ? iW._.HIGH : iW._.DEFAULT),
        getDismissibleBadges: () => [
            { badgeType: e_.Xi.NEW, dismissibleContent: ex.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
        ],
    });
var nE = i(406360),
    nT = i(742023);
let nx = (0, o.Qx)(d.X.HIGH_DYNAMIC_RANGE, {
        useTitle: () => m.intl.string(m.t.nemtgW),
        useSubtitle: () => m.intl.string(m.t["O/Gjvn"]),
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
        useOptions: function () {
            return N.useMemo(
                () => [
                    { name: m.intl.string(m.t.D5Fma9), desc: m.intl.string(m.t.Qj75ck), value: "no-limit" },
                    { name: m.intl.string(m.t.ldcGIH), desc: m.intl.string(m.t["+V/bDk"]), value: "standard" },
                ],
                [],
            );
        },
        usePredicate: function () {
            return (0, nE.i)("HDRDynamicRangeSetting");
        },
        setValue: function (e) {
            (0, nd.FU)(e);
        },
        useValue: function () {
            return (0, R.bG)([nT.Ay], () => nT.Ay.hdrDynamicRange);
        },
        useSearchTerms: () => ["HDR", m.intl.string(m.t["O/Gjvn"])],
    }),
    nS = (0, o.Hn)(d.X.ROLE_STYLE, {
        useTitle: () => m.intl.string(m.t.uSOPWm),
        useSubtitle: () => m.intl.string(m.t.u7fFKS),
        useOptions: () => [
            { id: "username", label: m.intl.string(m.t.eDdMzJ), value: "username" },
            { id: "dot", label: m.intl.string(m.t.rdmJp0), value: "dot" },
            { id: "hidden", label: m.intl.string(m.t.Ji2EVJ), value: "hidden" },
        ],
        useValue: () => (0, R.bG)([iW.A], () => iW.A.roleStyle),
        setValue: (e) => (0, nd.IX)(e),
    });
(0, o.Qx)(d.X.ROLE_STYLE, {
    useTitle: () => m.intl.string(m.t.uSOPWm),
    useSubtitle: () => m.intl.string(m.t["86hjzQ"]),
    useOptions: () => [
        { name: m.intl.string(m.t.YEOEi6), value: "username" },
        { name: m.intl.string(m.t.mQaro3), value: "dot" },
        { name: m.intl.string(m.t.Ji2EVJ), value: "hidden" },
    ],
    useValue: () => (0, R.bG)([iW.A], () => iW.A.roleStyle),
    setValue: (e) => (0, nd.IX)(e),
});
let np = (0, o.sN)(d.X.SATURATION, {
    useTitle: () => m.intl.string(m.t["5PWWCY"]),
    useSubtitle: () => m.intl.string(m.t.xf5S6P),
    markers: Q.hH7.SATURATION_INCREMENTS,
    onMarkerRender: (e) => ((100 * e) % 2 == 0 ? `${100 * e}%` : void 0),
    stickToMarkers: !0,
    minValue: 0,
    maxValue: 1,
    getInitialValue: () => iW.A.saturation,
    asValueChanges: (e) => (0, nd.HU)(e),
});
var nf = i(839214),
    nN = i(502229);
let n_ = (0, nf.D)(() => ({ syncEnabled: null, updateTimeout: null })),
    nC = (0, o.zD)(d.X.SYNC_FORCED_COLORS, {
        useTitle: () => m.intl.string(m.t.cguiec),
        useSubtitle: () => m.intl.format(m.t.GwEVE2, { learnMoreLink: to.A.getArticleURL(Q.MVz.FORCED_COLORS) }),
        useValue: () => {
            let e = (0, R.bG)([iW.A], () => iW.A.syncForcedColors);
            return (
                (0, e8.Ay)(() => {
                    n_.setState({ syncEnabled: iW.A.syncForcedColors });
                }),
                n_.useState((e) => e.syncEnabled) ?? e
            );
        },
        setValue: (e) => {
            let { updateTimeout: t } = n_.getState();
            if (null != t) {
                clearTimeout(t), n_.setState({ syncEnabled: e, updateTimeout: null });
                return;
            }
            if (e === iW.A.syncForcedColors) return void n_.setState({ syncEnabled: e });
            let i = setTimeout(() => {
                (0, nd.D3)(e), n_.setState({ updateTimeout: null });
            }, 150);
            n_.setState({ syncEnabled: e, updateTimeout: i });
        },
        usePredicate: () => (0, nN.D)(),
    }),
    nI = (0, o.zZ)(d.X.COLOR_AND_CONTRAST_CATEGORY, {
        useTitle: () => m.intl.string(m.t.JqvyiY),
        buildLayout: () => [np, nc, nh, nm, nC, nx, nS, nA, nu],
    });
var nb = i(397438),
    nv = i(355097);
function nj(e) {
    return (0, R.bG)([nb.A], () =>
        (function (e) {
            switch (e) {
                case nv._A.REDUCED_MOTION:
                    return m.intl.format(m.t["1dT9V4"], {});
                case nv._A.REDUCED_MOTION_STICKERS:
                    return m.intl.string(m.t["2ExvRu"]);
                default:
                    return;
            }
        })(nb.A.getAppliedOverrideReasonKey(e)),
    );
}
let ny = (0, o.zD)(d.X.ANIMATE_EMOJIS, {
        useTitle: () => m.intl.string(m.t.iIaOlc),
        useSubtitle: () => nj("animateEmoji"),
        useValue: () => g.Sf.useSetting(),
        setValue: (e) => g.Sf.updateSetting(e),
    }),
    nO = (0, o.zD)(d.X.ANIMATE_GIFS, {
        useTitle: () => m.intl.string(m.t.wqsK7q),
        useSubtitle: () => nj("gifAutoPlay"),
        useValue: () => g.kt.useSetting(),
        setValue: (e) => g.kt.updateSetting(e),
    });
var nR = i(823894);
let nL = (0, o.Qx)(d.X.ANIMATE_STICKERS, {
        useTitle: () => m.intl.string(m.t.sBHIh0),
        useSubtitle: () => nj("animateStickers"),
        useOptions: () => [
            { name: m.intl.string(m.t["Xp+X2U"]), value: nR.BJ.ALWAYS_ANIMATE },
            { name: m.intl.string(m.t.IlLT7e), desc: m.intl.string(m.t.bIW9Tl), value: nR.BJ.ANIMATE_ON_INTERACTION },
            { name: m.intl.string(m.t.IGu8x3), value: nR.BJ.NEVER_ANIMATE },
        ],
        useValue: () => g.S0.useSetting(),
        setValue: (e) => g.S0.updateSetting(e),
    }),
    nD = (0, o.zD)(d.X.REDUCED_MOTION, {
        useTitle: () => m.intl.string(m.t.b3XBzg),
        useSubtitle: () => m.intl.format(m.t.XqvxJc, { helpdeskArticle: to.A.getArticleURL(Q.MVz.REDUCED_MOTION) }),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "reduce" : "no-preference"),
    }),
    nP = (0, o.zD)(d.X.SYNC_REDUCED_MOTION, {
        useTitle: () => m.intl.string(m.t.oL55A6),
        useValue: () => (0, R.bG)([iW.A], () => "auto" === iW.A.rawPrefersReducedMotion),
        setValue: (e) => (0, nd.qz)(e ? "auto" : iW.A.systemPrefersReducedMotion),
    }),
    nG = (0, o.zZ)(d.X.MOTION_CATEGORY, {
        useTitle: () => m.intl.string(m.t.e3TR1b),
        buildLayout: () => [nD, nP, nO, ny, nL],
    });
var nU = i(688810),
    nM = i(259065),
    nV = i(864386);
let nk = (0, o.zD)(d.X.DISPLAY_NAME_STYLES, {
        useTitle: () => m.intl.string(nV.default["2gFUEw"]),
        useSubtitle: () => {
            let { analyticsLocations: e } = (0, nU.Ay)();
            return m.intl.format(nV.default.aEax6P, {
                onClickOpenModal() {
                    (0, nM.L)({ analyticsLocations: e });
                },
            });
        },
        useValue: () => (0, R.bG)([iW.A], () => iW.A.displayNameStylesEnabled),
        setValue: (e) => (0, nd.Dm)(e),
    }),
    nw = (e) => `${e.toFixed(0)}px`,
    nF = (0, o.sN)(d.X.APPEARANCE_FONT_SCALING, {
        useTitle: () => m.intl.string(m.t.rT3Pq5),
        useSubtitle: () => m.intl.string(m.t.LXUhen),
        markers: Q.hH7.FONT_SIZES,
        stickToMarkers: !0,
        minValue: Q.hH7.FONT_SIZES["0"],
        maxValue: Q.hH7.FONT_SIZES[Q.hH7.FONT_SIZES.length - 1],
        useDefaultValue: () => Q.hH7.FONT_SIZE_DEFAULT,
        getInitialValue: () => iW.A.fontSize,
        onValueRender: nw,
        onMarkerRender: nw,
        asValueChanges: (e) => (0, nd.XS)(e),
    }),
    nB = (0, o.zD)(d.X.UNDERLINE_LINKS, {
        useTitle: () => m.intl.string(m.t.OLZFB8),
        useSubtitle: () => m.intl.string(m.t.DIX3ke),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.alwaysShowLinkDecorations),
        setValue: (e) => (0, nd.kI)(e),
    }),
    nz = (0, o.zZ)(d.X.TEXT_READABILITY_CATEGORY, {
        useTitle: () => m.intl.string(m.t["bxh/R7"]),
        buildLayout: () => [nF, nB, nk],
    }),
    nY = (0, o.Qx)(d.X.APPEARANCE_UI_DENSITY, {
        useTitle: () => m.intl.string(m.t["C/5V0A"]),
        useSubtitle: () => m.intl.string(m.t.QLZhYk),
        useSearchTerms: () => ["List Spacing"],
        useOptions: () => [
            { name: m.intl.string(m.t["7iegX4"]), value: _.NS.COMPACT },
            { name: m.intl.string(m.t.bBvAEH), value: _.NS.DEFAULT },
            { name: m.intl.string(m.t["4cuYHx"]), value: _.NS.COZY },
        ],
        useValue: () => g.Xi.useSetting(),
        setValue: (e) => {
            e !== _.NS.UNSET_UI_DENSITY && g.Xi.updateSetting(e);
        },
    }),
    nX = "cozy",
    nH = "compact",
    nK = (0, o.Qx)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE, {
        useTitle: () => m.intl.string(m.t.nKRoPv),
        useSubtitle: () => m.intl.string(m.t.QntEEG),
        useSearchTerms: () => [m.intl.string(m.t.ZEoGMd)],
        useOptions: () => [
            { name: m.intl.string(m.t.Jqj4cZ), value: nX },
            { name: m.intl.string(m.t["1JNcPS"]), value: nH },
        ],
        useValue: () => (g.hH.useSetting() ? nH : nX),
        setValue: (e) => {
            g.hH.updateSetting(e === nH), (0, nd.AC)();
        },
    });
var nW = i(381941);
let nZ = (e) => `${e.toFixed(0)}px`,
    nq = (0, o.sN)(d.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => m.intl.string(m.t.Q6lKkg),
        useSubtitle: () => m.intl.string(m.t.p7eUrb),
        markers: nW.qh,
        stickToMarkers: !0,
        minValue: nW.qh["0"],
        maxValue: nW.qh[nW.qh.length - 1],
        useDefaultValue: () => (g.hH.useSetting() ? nW.y5 : nW.ES),
        useExternalValue: () => (0, R.bG)([iW.A], () => iW.A.messageGroupSpacing),
        getInitialValue: () => iW.A.messageGroupSpacing,
        onValueRender: nZ,
        onMarkerRender: nZ,
        asValueChanges: (e) => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, nd.AC)(e);
            }
        },
    });
var nQ = i(775121);
let nJ = (0, o.sN)(d.X.APPEARANCE_ZOOM, {
        usePredicate: () => ej.isPlatformEmbedded,
        useTitle: () => m.intl.string(m.t.i19n5L),
        useSubtitle: () => m.intl.format(m.t["x9PK/3"], { modKey: nQ.A.modKey }),
        markers: Q.hH7.ZOOM_SCALES,
        stickToMarkers: !0,
        minValue: Q.hH7.ZOOM_SCALES["0"],
        maxValue: Q.hH7.ZOOM_SCALES[Q.hH7.ZOOM_SCALES.length - 1],
        useDefaultValue: () => Q.hH7.ZOOM_DEFAULT,
        getInitialValue: () => iW.A.zoom,
        useExternalValue: () => (0, R.bG)([iW.A], () => iW.A.zoom),
        onValueRender: (e) => `${e.toFixed(0)}%`,
        setValue: (e) => (0, nd.Qp)(e),
        useSearchTerms: () => [m.intl.string(m.t.ip0uSf)],
    }),
    n$ = (0, o.zZ)(d.X.VISUAL_DENSITY_CATEGORY, {
        useTitle: () => m.intl.string(m.t.VKYWk8),
        buildLayout: () => [nY, nK, nq, nJ],
    }),
    n0 = (0, o.t_)(d.X.ACCESSIBILITY_PANEL, {
        useTitle: () => m.intl.string(m.t.G0neg7),
        buildLayout: () => [nz, n$, nI, nG, na],
        decoration: {
            type: e_.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let e = g.hH.useSetting(),
                    t = g.jW.useSetting(),
                    i = N.useMemo(
                        () => [
                            i3(
                                m.intl.formatToPlainString(m.t.BknJRT, {}),
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
                            i3(
                                m.intl.formatToPlainString(m.t["4rDfgM"], {
                                    link: "https://discord.com/accessibility",
                                }),
                            ),
                        ],
                        [t],
                    ),
                    n = (0, R.bG)([iW.A], () => iW.A.messageGroupSpacing);
                return (0, f.jsx)(iX.M, {
                    "aria-hidden": !0,
                    children: (0, f.jsxs)("section", {
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                className: i0.Vf,
                                children: m.intl.string(m.t.RC22qg),
                            }),
                            (0, f.jsxs)(tp.Ip, {
                                className: i0.VH,
                                children: [
                                    (0, f.jsx)("ol", {
                                        className: i0.DZ,
                                        style: { gap: n },
                                        "aria-label": m.intl.string(m.t.xfjsEV),
                                        children: i.map((t) =>
                                            (0, f.jsx)(
                                                "li",
                                                {
                                                    children: (0, f.jsx)(iJ.A, {
                                                        message: t,
                                                        channel: i1,
                                                        compact: e,
                                                        author: { ...(0, iQ.p_)(t), colorString: "#dd80f4" },
                                                    }),
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                    (0, f.jsxs)("div", {
                                        className: i0.Jb,
                                        children: [
                                            (0, f.jsx)("div", {
                                                className: i0.HD,
                                                children: i2.map((e) => {
                                                    let { status: t, discriminator: i, mobile: n = !1 } = e;
                                                    return (0, f.jsx)(
                                                        iH.eu,
                                                        {
                                                            status: t,
                                                            isMobile: n,
                                                            size: iK._3.SIZE_32,
                                                            src: i$.Ay.getDefaultAvatarURL(void 0, i),
                                                            "aria-label": m.intl.string(m.t.VKE5TK),
                                                        },
                                                        t,
                                                    );
                                                }),
                                            }),
                                            (0, f.jsx)(eE.$, {
                                                text: m.intl.string(m.t["2RHHgz"]),
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
    n1 = (0, o.i4)(d.X.ACCESSIBILITY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.G0neg7),
        icon: iY.c,
        useMenu: i6.A,
        buildLayout: () => [n0],
    });
var n2 = i(650809),
    n3 = i(636537),
    n6 = i(228366),
    n4 = i(74396),
    n5 = i(269880),
    n8 = i(55619),
    n7 = i(777666),
    n9 = i(574381),
    se = i(314116),
    st = i(19575),
    si = i(546385);
let sn = (0, o.E2)(d.X.HARDWARE_ACCELERATION, {
    usePredicate: () => n9.Av && !(0, n9.cX)(),
    useSearchTerms: () => [m.intl.string(m.t["/HIxyY"]), m.intl.string(m.t.B0hqpb)],
    Component: function () {
        let [e] = N.useState(() => st.Ay.getEnableHardwareAcceleration()),
            t = m.intl.string(m.t["/HIxyY"]),
            i = m.intl.string(m.t.B0hqpb);
        return (0, f.jsxs)(L.B, {
            children: [
                (0, f.jsx)(D.d, { label: t, description: i, checked: e, onChange: ss }),
                !e && (0, f.jsx)(si.A, { look: si.k.WARNING, children: m.intl.string(m.t.j7S6IX) }),
            ],
        });
    },
});
function ss(e) {
    let t = e ? m.intl.format(m.t.LYXRxL, {}) : m.intl.format(m.t.uDP3Kz, {});
    (0, se.A)({
        title: m.intl.string(m.t.aqpAvn),
        subtitle: t,
        confirmText: m.intl.string(m.t.vT7ckk),
        onConfirm: () => {
            st.Ay.setEnableHardwareAcceleration(e);
        },
    });
}
let sl = (0, o.zD)(d.X.SHOW_GAME_LIBRARY, {
        usePredicate: () => (0, R.bG)([tm.A], () => tm.A.hasLibraryApplication()),
        useTitle: () => m.intl.string(m.t.fi3UQN),
        useSubtitle: () => m.intl.string(m.t["8mYp37"]),
        useValue: () => !g.l_.useSetting(),
        setValue: (e) => g.l_.updateSetting(!e),
    }),
    sr = (0, o.zZ)(d.X.APPEARANCE_ADVANCED_CATEGORY, {
        useTitle: () => m.intl.string(m.t["8/udY0"]),
        buildLayout: () => [sn, sl],
    });
var sa = i(565645);
let so = (0, o.zD)(d.X.CHAT_EMOJI_CONVERT_EMOTICONS, {
        useTitle: () => m.intl.string(m.t["79qal8"]),
        useSubtitle: () =>
            m.intl.format(m.t.GejoQK, { emojiHook: (e, t) => (0, f.jsx)(sa.A, { emojiName: "\uD83D\uDE42" }, t) }),
        useValue: g.j7.useSetting,
        setValue: g.j7.updateSetting,
    }),
    su = (0, o.zD)(d.X.ENABLE_SEND_BUTTON, {
        useTitle: () => m.intl.string(m.t["I/5LyL"]),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.isSubmitButtonEnabled),
        setValue: () => (0, nd.Xt)(),
    }),
    sd = (0, o.zD)(d.X.CHAT_TEXT_BOX_PREVIEWS, {
        useTitle: () => m.intl.string(m.t.AqGrEI),
        useValue: g.SI.useSetting,
        setValue: (e) => {
            X.default.track(Q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: { section: Q.JJy.SETTINGS_TEXT_AND_IMAGES },
            }),
                g.SI.updateSetting(e);
        },
    }),
    sc = (0, o.zD)(d.X.CHAT_STICKERS_AUTOCOMPLETE, {
        useTitle: () => m.intl.string(m.t["d+It2U"]),
        useValue: g.ML.useSetting,
        setValue: (e) => {
            X.default.track(Q.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                enabled: e,
                location: { section: Q.JJy.SETTINGS_TEXT_AND_IMAGES },
                location_stack: [eV.A.TEXT_AND_IMAGES],
            }),
                g.ML.updateSetting(e);
        },
    }),
    sg = (0, o.zZ)(d.X.APPEARANCE_CHAT_BOX_CATEGORY, {
        useTitle: () => m.intl.string(m.t.Ob7VMB),
        useSearchTerms: () => [m.intl.string(m.t.onqU6o)],
        buildLayout: () => [sd, so, sc, su],
    });
var sm = i(526162),
    sA = i(793943),
    sh = i(792656),
    sE = i(830543),
    sT = i(785007),
    sx = i(806932),
    sS = i(915089),
    sp = i(174197),
    sf = i(788868);
let sN = (0, o.E2)(d.X.APPEARANCE_IN_APP_ICON, {
    useSearchTerms: () => [m.intl.string(m.t.gnwxvT)],
    Component: function () {
        let e = (0, sS.GV)(),
            { ref: t, ...i } = (0, sT._u)({ orientation: "horizontal", labelledBy: e }),
            n = (0, R.bG)([sm.A], () => sm.A.isUpsellPreview);
        return (
            (0, em.Ay)(() => {
                n &&
                    X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: sf.e.APP_ICON_UPSELL,
                        location_stack: [eV.A.USER_SETTINGS],
                    });
            }),
            (0, f.jsx)("div", {
                ...i,
                ref: t,
                children: (0, f.jsx)(L.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    children: (0, f.jsx)(sx.m, { disabled: n, size: sp.N8.SIZE_48 }),
                }),
            })
        );
    },
});
function s_() {
    (0, sA.nf)(sA.HP.APP_ICON), (0, sE.default)();
}
function sC() {
    return (0, f.jsx)(sh.A, {
        subscriptionTier: sf.pe.TIER_2,
        defaultTextOverride: m.intl.string(m.t.mr4K7D),
        premiumModalAnalyticsLocation: { object: Q.ZSU.BUTTON_CTA, objectType: Q.AnalyticsObjectTypes.BUY },
        fullWidth: !0,
    });
}
let sI = (0, o.zZ)(d.X.APPEARANCE_IN_APP_ICON_CATEGORY, {
        useTitle: () => m.intl.string(m.t.RPh2ou),
        useSubtitle: () => m.intl.string(m.t.IgENJo),
        useHeaderDecoration: function () {
            let e = (0, R.bG)([sm.A], () => sm.A.isUpsellPreview);
            return N.useMemo(() => {
                let t = [];
                return (
                    t.push({
                        id: "preview-icon-button",
                        type: e_.UV.BUTTON,
                        text: m.intl.string(m.t["6acvnZ"]),
                        onClick: s_,
                    }),
                    e && t.push({ id: "upsell-button", type: e_.UV.STRONGLY_DISCOURAGED_CUSTOM, button: sC }),
                    { type: e_.WX.BUTTON_GROUP, buttons: t }
                );
            }, [e]);
        },
        buildLayout: () => [sN],
    }),
    sb = (0, o.AK)(d.X.APPEARANCE_CHAT_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.UDr3Iy),
        useSearchTerms: () => [m.intl.string(m.t.UDr3Iy)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    sv = (0, o.gN)(d.X.APPEARANCE_CHAT_RELATED_SETTINGS, { buildLayout: () => [sb] });
var sj = i(379587),
    sy = i(452027),
    sO = i(976860),
    sR = i(474090),
    sL = i(181079),
    sD = i(422258),
    sP = i(668267),
    sG = i(313281),
    sU = i(335993);
let sM = to.A.getArticleURL(Q.MVz.FAVORITES_GUILD);
function sV() {
    let { analyticsLocations: e } = (0, nU.Ay)(eV.A.USER_SETTINGS_FAVORITES),
        t = N.useCallback(() => {
            (0, sP.mv)("settings_page"), (0, sO.uh)(Q.YYv), (0, sE.default)();
        }, []);
    return (0, f.jsx)(nU.f5, {
        value: e,
        children: (0, f.jsx)(sy.D, {
            label: m.intl.string(sU.default.OT1NK5),
            description: m.intl.format(sU.default.GR2KOG, { helpCenterLink: sM }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, f.jsxs)(L.B, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, f.jsx)(eE.$, { variant: "secondary", text: m.intl.string(sU.default["7WwLnr"]), onClick: t }),
                    (0, f.jsx)(sh.A, {
                        subscriptionTier: sf.pe.TIER_2,
                        defaultTextOverride: m.intl.string(sU.default["20sYUU"]),
                    }),
                ],
            }),
        }),
    });
}
let sk = (0, o.E2)(d.X.CHAT_FAVORITES_TOGGLE, {
        usePredicate: () => (0, sj.m)({ location: "FavoritesGuildToggle" }).enabled,
        useSearchTerms: () => [m.intl.string(sU.default.OT1NK5)],
        Component: function () {
            let e = (0, R.bG)([sL.A], () => sL.A.favoriteGuildEnabled),
                t = (0, R.bG)([t6.default], () => {
                    let e = t6.default.getCurrentUser();
                    return null != e && sR.Ay.isPremiumExactly(e, sf.PremiumTypes.TIER_2);
                }),
                i = (0, sG.DZ)(),
                n = N.useCallback(
                    (e) => {
                        (0, sD.tV)(e, "settings_page"), !e && i && (0, sO.pX)(Q.BVt.ME);
                    },
                    [i],
                );
            return t
                ? (0, f.jsx)(D.d, {
                      checked: e,
                      description: m.intl.format(sU.default.GR2KOG, { helpCenterLink: sM }),
                      onChange: n,
                      label: m.intl.string(sU.default.OT1NK5),
                      badge: "beta",
                  })
                : (0, f.jsx)(sV, {});
        },
    }),
    sw = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_LINKS, {
        useTitle: () => m.intl.string(m.t.U47N1p),
        useValue: g.hD.useSetting,
        setValue: g.hD.updateSetting,
    }),
    sF = (0, o.zD)(d.X.CHAT_INLINE_MEDIA_UPLOADS, {
        useTitle: () => m.intl.string(m.t.VP11No),
        useValue: g.X6.useSetting,
        setValue: g.X6.updateSetting,
    }),
    sB = (0, o.FW)(d.X.CHAT_INLINE_FIELD_SET, {
        useTitle: () => m.intl.string(m.t["9nyle0"]),
        buildLayout: () => [sw, sF],
    }),
    sz = (0, o.zD)(d.X.CHAT_EMBEDS_RENDER_EMBEDS, {
        useTitle: () => m.intl.string(m.t["5bK9vw"]),
        useValue: g.rs.useSetting,
        setValue: g.rs.updateSetting,
    }),
    sY = (0, o.zD)(d.X.CHAT_EMOJI_RENDER_REACTIONS, {
        useTitle: () => m.intl.string(m.t["zge/fP"]),
        useValue: g.jW.useSetting,
        setValue: g.jW.updateSetting,
    });
var sX = i(817281);
let sH = (0, o.zD)(d.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
        useTitle: () => m.intl.string(m.t.JgjNG3),
        useSubtitle: () => {
            if (!g.hH.useSetting())
                return m.intl.format(m.t["31PRaj"], {
                    a11yHook: (e, t) =>
                        (0, f.jsx)(
                            V.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(d.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                                children: e,
                            },
                            t,
                        ),
                });
        },
        useDisabled: () => !g.hH.useSetting(),
        useValue: () => {
            let e = (0, R.bG)([nT.Ay], () => nT.Ay.displayCompactAvatars);
            return !g.hH.useSetting() || e;
        },
        setValue: (e) => {
            sX.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
        },
    }),
    sK = (0, o.Hn)(d.X.CHAT_SPOILERS_SHOW_SPOILERS, {
        useTitle: () => m.intl.string(m.t.QgwmVz),
        useOptions: () => [
            { value: Q.P6Q.ON_CLICK, id: Q.P6Q.ON_CLICK, label: m.intl.string(m.t["KFH/me"]) },
            { value: Q.P6Q.ALWAYS, id: Q.P6Q.ALWAYS, label: m.intl.string(m.t.Pe1RbL) },
            { value: Q.P6Q.IF_MODERATOR, id: Q.P6Q.IF_MODERATOR, label: m.intl.string(m.t.K5VTBE) },
        ],
        useValue: g.gs.useSetting,
        setValue: g.gs.updateSetting,
    }),
    sW = (0, o.zD)(d.X.CHAT_THREADS_SPLIT_VIEW, {
        useTitle: () => m.intl.string(m.t.AInv5m),
        useValue: g.SY.useSetting,
        setValue: g.SY.updateSetting,
    }),
    sZ = (0, o.zZ)(d.X.APPEARANCE_MESSAGES_CATEGORY, {
        useTitle: () => m.intl.string(m.t.OIgYlQ),
        useSearchTerms: () => [m.intl.string(m.t["/VQax8"])],
        buildLayout: () => [sB, sz, sY, sK, sW, sH, sk, sv],
    });
var sq = i(753806),
    sQ = i(145331);
let sJ = (0, o.Qx)(d.X.MESSAGE_SEARCH_DEFAULT_DM_SEARCH_BEHAVIOR, {
        useTitle: () => m.intl.string(m.t.VkoLsy),
        useSearchTerms: () => [m.intl.string(m.t["t4+fbe"])],
        useOptions: function () {
            return [
                { name: m.intl.string(m.t.E9JM4J), value: 0 },
                { name: m.intl.string(m.t["Kr+lPi"]), value: 1 },
            ];
        },
        useValue: () => +!!g.Hu.useSetting(),
        setValue: (e) => {
            let t = 1 === e;
            t ? sq.A.cleanUpPrivateChannelSearchState() : sq.A.cleanUpSearchState({ type: Q.I4_.DMS }),
                (0, sQ._k)({
                    prevIsCrossDMSettingEnabled: g.Hu.getSetting(),
                    isCrossDMSettingEnabled: t,
                    location: sQ.vy.USER_SETTINGS,
                }),
                g.Hu.updateSetting(t);
        },
    }),
    s$ = (0, o.zZ)(d.X.APPEARANCE_SEARCH_CATEGORY, {
        useTitle: () => m.intl.string(m.t["5h0QOP"]),
        buildLayout: () => [sJ],
    }),
    s0 = (0, o.zD)(d.X.STREAMING_AUTO_STREAMER_MODE, {
        useTitle: () => m.intl.string(m.t.IxjaoF),
        useValue: function () {
            return (0, R.bG)([eC.A], () => {
                let { autoToggle: e } = eC.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n8.A.update({ autoToggle: e });
        },
        usePredicate: function () {
            return n9.Av;
        },
    }),
    s1 = (0, o.zD)(d.X.STREAMING_STREAMER_MODE, {
        useTitle: () => m.intl.string(m.t.TGNg6T),
        useSubtitle: () => m.intl.string(m.t["4nXLnE"]),
        useValue: function () {
            return (0, R.bG)([eC.A], () => {
                let { enabled: e } = eC.A.getSettings();
                return e;
            });
        },
        setValue: function (e) {
            n8.A.update({ enabled: e });
        },
    });
var s2 = i(77729),
    s3 = i(349230);
let s6 = [],
    s4 = (0, o.Hn)(d.X.STREAMER_MODE_HIDE_OVERLAY_WIDGETS, {
        selectionMode: "multiple",
        useTitle: () => m.intl.string(m.t.VCDSLW),
        useSearchTerms: () => [m.intl.string(m.t.VCDSLW)],
        usePredicate: () => {
            let e = (0, eO.b_)(),
                t = (0, ef.Mn)("StreamerModeSettings");
            return e && t;
        },
        useOptions: function () {
            return N.useMemo(() => {
                let e = [];
                for (let [t, i] of Object.entries(s3.A))
                    null != i.streamerModeLabel &&
                        (null == i.predicate || i.predicate()) &&
                        e.push({ id: t, value: t, label: i.streamerModeLabel() });
                return e;
            }, []);
        },
        useValue: function () {
            return (0, R.bG)([eC.A], () => eC.A.getSettings().disabledOverlayWidgets ?? s6);
        },
        setValue: (e) => n8.A.update({ disabledOverlayWidgets: e }),
        closeOnSelect: !1,
        wrapTags: !0,
    }),
    s5 = (0, o.zD)(d.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => m.intl.string(m.t.LSBUGR),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { hidePersonalInformation: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ hidePersonalInformation: e }),
    }),
    s8 = (0, o.zD)(d.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => m.intl.string(m.t.uWBOri),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { hideInstantInvites: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ hideInstantInvites: e }),
    }),
    s7 = (0, o.zD)(d.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => m.intl.string(m.t.OrqYDP),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { disableSounds: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ disableSounds: e }),
    }),
    s9 = (0, o.zD)(d.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.sUAbLd),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { disableNotifications: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ disableNotifications: e }),
    }),
    le = (0, o.zD)(d.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => m.intl.string(m.t["iA81+a"]),
        useSubtitle: () => m.intl.string(m.t.P4vj0h),
        useValue: () =>
            (0, R.bG)([eC.A], () => {
                let { enableContentProtection: e } = eC.A.getSettings();
                return e;
            }),
        setValue: (e) => n8.A.update({ enableContentProtection: e }),
        usePredicate: () => s2.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    lt = (0, o.FW)(d.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.xYhOEh),
        buildLayout: () => [s5, s8, s7, s9, le, s4],
    }),
    li = (0, o.zZ)(d.X.STREAMER_MODE_CATEGORY, {
        useTitle: () => m.intl.string(m.t.S5GfOW),
        buildLayout: () => [s1, s0, lt],
    });
var ln = i(47671),
    ls = i(665267),
    ll = i(414133),
    lr = i(412848);
let la = (0, o.Hn)(d.X.APPEARANCE_GUILD_THEME_DEFAULT_PREFERENCE, {
        useTitle: () => m.intl.string(m.t.Q7mm4g),
        useSearchTerms: () => [m.intl.string(lr.default["/6NbRv"])],
        useOptions: () => [
            { id: "guild", label: m.intl.string(m.t["hrS/Pc"]), value: _.tI.GUILD },
            { id: "personal", label: m.intl.string(m.t.mlvXIq), value: _.tI.PERSONAL },
        ],
        useValue: () => g.zY.useSetting(),
        setValue: g.zY.updateSetting,
        usePredicate: () => (0, ll.OS)("GuildThemeDefaultPreferenceSetting"),
    }),
    lo = (0, o.zD)(d.X.SYNC_PROFILE_THEMES, {
        useTitle: () => m.intl.string(m.t.C00w4l),
        useValue: () => (0, R.bG)([iW.A], () => iW.A.syncProfileThemeWithUserTheme),
        setValue: () => (0, nd.M1)(),
    });
var lu = i(284016);
let ld = (0, o.zD)(d.X.APPEARANCE_SYNC_THEME, {
    useTitle: () => m.intl.string(m.t["/B+kEV"]),
    useSearchTerms: () => [m.intl.string(m.t.Ksh3ik)],
    useValue: function () {
        return (0, R.bG)([lu.A], () => !1 !== lu.A.shouldSync("appearance"));
    },
    setValue: function (e) {
        var t;
        let i = id.A.theme,
            n = ln.A.gradientPreset?.id ?? null,
            s = g.eh.getSetting()?.customUserThemeSettings != null;
        (t = Q.HAw.SYNC_ACROSS_CLIENTS_TOGGLED),
            n6.h.dispatch({
                type: "TRACK",
                event: t,
                properties: { is_sync_enabled: e, base_theme: i, client_theme: n, has_custom_theme: s },
            }),
            sX.Ay.setShouldSyncAppearanceSettings(e);
    },
});
var lc = i(98596);
let lg = (0, o.AK)(d.X.APPEARANCE_THEME_ACCESSIBLITY_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.nhVQDJ),
        useSearchTerms: () => [m.intl.string(m.t.nhVQDJ)],
        destinationKey: d.X.ACCESSIBILITY_PANEL,
    }),
    lm = (0, o.gN)(d.X.APPEARANCE_THEME_RELATED_SETTINGS, { buildLayout: () => [lg] }),
    lA = (0, o.zZ)(d.X.APPEARANCE_THEME_CATEGORY, {
        useTitle: () => m.intl.string(m.t.Ksh3ik),
        useInlineNotice: function () {
            return (0, R.bG)([iW.A], () => iW.A.useForcedColors)
                ? {
                      type: e_.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () =>
                          (0, nN.D)()
                              ? m.intl.format(m.t.Jae48E, {
                                    onClick: () => {
                                        (0, ey.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                    },
                                })
                              : m.intl.string(m.t.AUMSZP),
                  }
                : null;
        },
        useHeaderDecoration: function () {
            return (0, R.bG)([ln.A, iW.A], () => iW.A.useForcedColors || ln.A.isPreview)
                ? null
                : {
                      type: e_.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "open-client-themes-button",
                              type: e_.UV.BUTTON,
                              text: m.intl.string(m.t["E+COuA"]),
                              onClick: ls.J3,
                          },
                      ],
                  };
        },
        buildLayout: () => [lc.k, ld, lo, la, lm],
    }),
    lh = (0, o.t_)(d.X.APPEARANCE_PANEL, {
        initialize: function () {
            n4.A.isFetching() ||
                (n6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
                n3.Bo.get({ url: Q.Rsh.USERS_ME_CUSTOM_THEMES, oldFormErrors: !0, rejectWithError: !0 })
                    .then((e) => {
                        n6.h.dispatch({
                            type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                            themes: e.body?.custom_themes ?? [],
                        });
                    })
                    .catch((e) => {
                        n6.h.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error: e });
                    }));
        },
        useTitle: () => m.intl.string(m.t["iHH+ky"]),
        buildLayout: () => [lA, sI, sZ, sg, s$, li, sr],
    }),
    lE = [
        { badgeType: e_.Xi.NEW, dismissibleContent: ex.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE },
        {
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            dismissibleContent: ex.M.FAVORITES_GUILD_NEW_BADGE,
            StronglyDiscouragedCustomComponent: function () {
                return (0, f.jsx)(n7.JI, { text: m.intl.string(m.t.y2b7CA) });
            },
        },
    ],
    lT = (0, o.i4)(d.X.APPEARANCE_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["iHH+ky"]),
        icon: n2.B,
        useMenu: function () {
            let e,
                t,
                i,
                n = (0, n5.A)(),
                s =
                    ((e = g.D_.useSetting()),
                    (t = g.SI.useSetting()),
                    e
                        ? null
                        : (0, f.jsx)(M.sL, {
                              id: "preview-markdown-toggle",
                              label: m.intl.string(m.t.sHJ9wZ),
                              action: () => {
                                  let e = !t;
                                  X.default.track(Q.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                      enabled: e,
                                      location: { section: Q.JJy.SETTINGS_CONTEXT_MENU },
                                  }),
                                      g.SI.updateSetting(e);
                              },
                              checked: t,
                          })),
                l =
                    ((i = (0, R.bG)([eC.A], () => eC.A.enabled, [])),
                    (0, f.jsx)(M.sL, {
                        id: "streamer-mode-toggle",
                        label: m.intl.string(m.t.p9ZAJZ),
                        action: () => {
                            n8.A.setEnabled(!i);
                        },
                        checked: i,
                    }));
            return N.useMemo(() => {
                let e = [...n];
                return (
                    null != s &&
                        e.push((0, f.jsx)(M.rX, { label: m.intl.string(m.t.Ob7VMB), children: s }, "text-and-images")),
                    null != l && e.push((0, f.jsx)(M.rX, { children: l }, "streamer-mode")),
                    e
                );
            }, [n, s, l]);
        },
        getDismissibleBadges: () => lE,
        buildLayout: () => [lh],
    });
var lx = i(410767),
    lS = i(691885),
    lp = i(408278),
    lf = i(241326),
    lN = i(885574),
    l_ = i(475358),
    lC = i(28647),
    lI = i(337371),
    lb = i(695366),
    lv = i(761853),
    lj = i(364094);
function ly(e) {
    let { game: t, application: i } = e;
    return null == t || null == i
        ? (0, f.jsx)("div", {
              className: lj.zc,
              children: (0, f.jsx)(lb.E, { size: "sm", color: F.A.colors.TEXT_FEEDBACK_WARNING }),
          })
        : (0, f.jsxs)("div", {
              className: lj.nt,
              children: [
                  (0, f.jsx)(e7.A, { game: i, pid: t.pid, size: e7.M.MEDIUM }),
                  (0, f.jsx)("div", {
                      className: lj.Am,
                      children: (0, f.jsx)(lb.E, { size: "sm", color: F.A.colors.TEXT_FEEDBACK_WARNING }),
                  }),
              ],
          });
}
function lO(e) {
    let t = (0, R.bG)([lv.Ay], () => lv.Ay.getMode()),
        { runningGame: i, runningGameApplication: n } = e0();
    null == i || i.elevated || ((i = void 0), (n = void 0));
    let s = (0, tu.NP)(),
        l = s && null != i && t === Q.TBI.PUSH_TO_TALK;
    return { canPrompt: "voice" === e ? l : s, runningGame: i, runningGameApplication: n };
}
function lR(e) {
    let { className: t, sourcePage: i } = e,
        { canPrompt: n, runningGame: s, runningGameApplication: l } = lO(i);
    return n
        ? (0, f.jsxs)("div", {
              className: eF()(lj.kL, t),
              children: [
                  (0, f.jsx)(ly, { game: s, application: l }),
                  (0, f.jsxs)("div", {
                      className: lj.FS,
                      children: [
                          (0, f.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "text-strong",
                              children:
                                  "voice" === i
                                      ? m.intl.string(m.t.vxfv7v)
                                      : null != s
                                        ? m.intl.string(m.t.fAYU2G)
                                        : m.intl.string(m.t["9V4X/c"]),
                          }),
                          (0, f.jsx)(k.E, {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              children: m.intl.format(m.t["/y6htt"], {
                                  helpCenterLink: to.A.getArticleURL(Q.MVz.SYSTEM_SERVICE),
                              }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["1iI46O"]),
                      onClick: function () {
                          (0, tu.sL)(i + (null != s ? "-with-game" : "-no-game"));
                      },
                  }),
              ],
          })
        : null;
}
var lL = i(189213),
    lD = i(292666),
    lP = i(320989),
    lG = i(978263);
let lU = [];
var lM = i(235986),
    lV = i(820785),
    lk = i(734057),
    lw = i(808728),
    lF = i(967198),
    lB = i(926140),
    lz = i(746642);
function lY() {}
let lX = [lB.rD.VOICE_CHANNEL];
function lH(e) {
    e.setOptions({ voiceChannelGuildFilter: null }), e.setLimit(1 / 0);
}
function lK() {
    return (0, f.jsx)("div", {
        className: lz.i1,
        children: (0, f.jsx)(k.E, {
            variant: "text-md/medium",
            color: "text-muted",
            className: lz.GN,
            children: m.intl.string(m.t.zHjCd1),
        }),
    });
}
function lW(e) {
    let { keybind: t, className: i } = e,
        n = N.useRef(t);
    N.useEffect(() => {
        n.current = t;
    });
    let [s, l] = N.useState(t.params?.channelId ?? void 0),
        r = N.useCallback(() => {
            (0, C.openModalLazy)(
                async () => (e) =>
                    (0, f.jsx)(lZ, {
                        ...e,
                        onSelect: (e) => {
                            l(e), tR.A.setKeybind({ ...n.current, params: { channelId: e } });
                        },
                    }),
            );
        }, []);
    return (0, f.jsx)("div", {
        className: eF()(lz.a8, i),
        children: (0, f.jsx)(sy.D, {
            label: m.intl.string(m.t.q4JpM8),
            children: (0, f.jsxs)(lM.A, {
                align: lM.A.Align.STRETCH,
                children: [
                    (0, f.jsx)("div", { className: lz.$X, children: (0, f.jsx)(lq, { channelId: s }) }),
                    (0, f.jsx)(lM.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, f.jsx)(eE.$, { variant: "primary", text: m.intl.string(m.t.Dm8O4e), onClick: r }),
                    }),
                ],
            }),
        }),
    });
}
function lZ(e) {
    let t,
        i,
        { transitionState: n, onClose: s, onSelect: l } = e,
        r = N.useId(),
        a = N.useRef(null),
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
                [l, r] = N.useState(""),
                [a, o] = N.useState(lU),
                u = N.useCallback((e, t) => {
                    "" === (t = t.trim()).trim() ? o(lU) : o(e);
                }, []);
            N.useEffect(
                () =>
                    lP.A.addRouteChangeListener(() => {
                        r("");
                    }),
                [],
            );
            let [d] = N.useState(() => new lG.A(u, i, void 0, n));
            return (
                N.useEffect(() => {
                    t ? (s?.(d), d.createSearchContext()) : (d.clean(), r(""));
                }, [t, d, s]),
                {
                    queryResults: a,
                    query: l,
                    updateQuery: N.useCallback(
                        (e) => {
                            r(e), d.search(e);
                        },
                        [d],
                    ),
                }
            );
        })({ visible: !0, autocompleterResultTypes: lX, autocompleterBeforeCreateSearchContext: lH }),
        c =
            ((t = "" !== o),
            (i = (0, R.yK)([lw.Ay, lk.A, lF.A], () => {
                let e = lF.A.getGuildId();
                if (t || null == e) return [];
                let i = [];
                for (let t of lw.Ay.getVocalChannelIds(e)) {
                    let e = lk.A.getChannel(t);
                    null != e && i.push(e);
                }
                return i;
            }, [t])),
            t ? null : i),
        { focusedIndex: g, setFocusedIndex: A } = (function (e) {
            let [t, i] = N.useState(0),
                n = N.useRef(e);
            return (
                e !== n.current && 0 !== t && i(0),
                N.useEffect(() => {
                    n.current = e;
                }),
                { focusedIndex: t, setFocusedIndex: i }
            );
        })(o);
    N.useEffect(() => {
        let { current: e } = a;
        null == e || e.isItemVisible(0, g, !0) || e.scrollToIndex({ section: 0, row: g });
    }, [g]);
    let h = null != c ? c.length : d.length,
        E = (() => {
            if (null != c) return c[g]?.id;
            let e = d[g];
            if (e?.type === lB.rD.VOICE_CHANNEL) return e.record.id;
        })(),
        T =
            h > 0 || "" === o
                ? {
                      innerId: r,
                      innerRole: "listbox",
                      innerAriaLabel: m.intl.string(m.t["+N3fW7"]),
                      ref: a,
                      sections: [h],
                      renderRow: function (e) {
                          let { row: t } = e,
                              i = (() => {
                                  if (null != c) return c[t];
                                  let e = d[t];
                                  if (e?.type === lB.rD.VOICE_CHANNEL) return e.record;
                              })();
                          if (null == i) return null;
                          let n = null != i.parent_id ? lk.A.getChannel(i.parent_id) : void 0,
                              r = K.A.getGuild(i.guild_id);
                          return (0, f.jsx)(
                              lV.c3,
                              {
                                  id: i.id,
                                  channel: i,
                                  category: n,
                                  focused: g === t,
                                  onMouseEnter: () => A(t),
                                  onClick: () => {
                                      l(i.id), s();
                                  },
                                  onFocus: () => A(t),
                                  children:
                                      null != r ? (0, f.jsx)("div", { className: lz.J5, children: r.name }) : null,
                              },
                              i.id,
                          );
                      },
                      sectionHeight: 0,
                      rowHeight: 34,
                  }
                : { sections: [1], renderRow: () => (0, f.jsx)(lK, {}), sectionHeight: 0, rowHeight: 52 };
    return (0, f.jsx)(lL.Modal, {
        transitionState: n,
        onClose: s,
        title: m.intl.string(m.t.Dm8O4e),
        subtitle: m.intl.string(m.t.q4JpM8),
        actions: void 0,
        input: (0, f.jsx)(lD.k, {
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
                                if (null != c) return c[g];
                                let e = d[g];
                                if (e?.type === lB.rD.VOICE_CHANNEL) return e.record;
                            })();
                            null == e ? l(void 0) : l(e.id), s();
                            break;
                        }
                        case "arrowup":
                            0 === g ? A(h - 1) : A(g - 1);
                            break;
                        case "arrowdown":
                            g >= h - 1 ? A(0) : A(g + 1);
                    }
            },
            placeholder: m.intl.string(m.t.tG0r7g),
            role: "combobox",
            "aria-controls": r,
            "aria-expanded": h > 0,
            "aria-activedescendant": h > 0 && null != E ? E : void 0,
            "aria-autocomplete": "list",
            spellCheck: !1,
            autoFocus: !0,
        }),
        listProps: T,
    });
}
function lq(e) {
    let { channelId: t } = e,
        {
            channel: i,
            category: n,
            guild: s,
        } = (0, R.cf)([lk.A, K.A], () => {
            let e = null != t ? lk.A.getChannel(t) : void 0;
            return null != e
                ? {
                      channel: e,
                      category: null != e.parent_id ? lk.A.getChannel(e.parent_id) : void 0,
                      guild: null != e.guild_id ? K.A.getGuild(e.guild_id) : void 0,
                  }
                : { channel: void 0, category: void 0, guild: void 0 };
        });
    return null == i
        ? (0, f.jsx)(k.E, {
              variant: "text-md/medium",
              color: "text-muted",
              className: lz.GN,
              children: m.intl.string(m.t["/fYIK7"]),
          })
        : (0, f.jsx)(lV.c3, {
              channel: i,
              id: i.id,
              category: n,
              onClick: lY,
              onFocus: lY,
              onMouseEnter: lY,
              focused: !1,
              children: null != s ? (0, f.jsx)("div", { className: lz.J5, children: s.name }) : null,
          });
}
function lQ(e) {
    let { className: t, children: i } = e;
    return (0, f.jsx)("div", { className: t, children: (0, f.jsx)(L.B, { gap: 16, children: i }) });
}
var lJ = i(734066),
    l$ = i(880144),
    l0 = i(614455);
function l1() {
    let e = (0, R.bG)([eI.Ay], () => eI.Ay.getState()),
        t = (0, R.bG)([lv.Ay], () => (0, l$.A)(lv.Ay)),
        i = (0, R.bG)([l0.A], () => l0.A.isSupported),
        n = (0, lJ.sw)(),
        s = (0, lJ.BW)(),
        l = (0, ej.isWindows)();
    return {
        customizableKeybinds: (function (e) {
            let { keybinds: t, enableClips: i, enableScreenshotKeybind: n, allowSoundboard: s } = e;
            return eL()(t)
                .reject(
                    (e) =>
                        e.managed &&
                        ![Q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, Q.hCu.SAVE_CLIP, Q.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((e) => !i && (e.action === Q.hCu.SAVE_CLIP || e.action === Q.hCu.SAVE_SCREENSHOT))
                .reject((e) => !n && e.action === Q.hCu.SAVE_SCREENSHOT)
                .reject((e) => !s && (e.action === Q.hCu.SOUNDBOARD || e.action === Q.hCu.SOUNDBOARD_HOLD))
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
                    { id: "unassigned", value: Q.hCu.UNASSIGNED, label: m.intl.string(m.t["0Uh579"]) },
                    { id: "push-to-talk", value: Q.hCu.PUSH_TO_TALK, label: m.intl.string(m.t.Y5lgTP) },
                    {
                        id: "push-to-talk-priority",
                        value: Q.hCu.PUSH_TO_TALK_PRIORITY,
                        label: m.intl.string(m.t.DkSwJ2),
                    },
                    { id: "push-to-mute", value: Q.hCu.PUSH_TO_MUTE, label: m.intl.string(m.t.hSCRqd) },
                    { id: "vad-priority", value: Q.hCu.VAD_PRIORITY, label: m.intl.string(m.t["49d6Nd"]) },
                    { id: "toggle-mute", value: Q.hCu.TOGGLE_MUTE, label: m.intl.string(m.t.PlkYKD) },
                    { id: "toggle-deafen", value: Q.hCu.TOGGLE_DEAFEN, label: m.intl.string(m.t.NvGq1K) },
                    { id: "toggle-voice-mode", value: Q.hCu.TOGGLE_VOICE_MODE, label: m.intl.string(m.t.Wa5H9S) },
                    { id: "toggle-streamer-mode", value: Q.hCu.TOGGLE_STREAMER_MODE, label: m.intl.string(m.t.BK0Ncc) },
                    { id: "toggle-camera", value: Q.hCu.TOGGLE_CAMERA, label: m.intl.string(m.t.hf8JVT) },
                ];
            return (
                t &&
                    (r.push({
                        id: "toggle-overlay-input-lock",
                        value: Q.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                        label: m.intl.string(m.t.VsAZcC),
                    }),
                    r.push({
                        id: "activate-overlay-region-text-widget",
                        value: Q.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                        label: m.intl.string(m.t.hurHWo),
                    })),
                i &&
                    ((0, ej.isWindows)() || lv.Ay.getUseSystemScreensharePicker()) &&
                    r.push({
                        id: "toggle-go-live-streaming",
                        value: Q.hCu.TOGGLE_GO_LIVE_STREAMING,
                        label: m.intl.string(m.t.ybdjJD),
                    }),
                (0, ej.isDesktop)() &&
                    (r.push(
                        { id: "navigate-back", value: Q.hCu.NAVIGATE_BACK, label: m.intl.string(m.t.gRSaOa) },
                        { id: "navigate-forward", value: Q.hCu.NAVIGATE_FORWARD, label: m.intl.string(m.t.zOXpjU) },
                        {
                            id: "switch-to-voice-channel",
                            value: Q.hCu.SWITCH_TO_VOICE_CHANNEL,
                            label: m.intl.string(m.t.ty7Lxy),
                        },
                        {
                            id: "disconnect-from-voice-channel",
                            value: Q.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                            label: m.intl.string(m.t.CV7mT7),
                        },
                    ),
                    n &&
                        r.push(
                            { id: "soundboard", value: Q.hCu.SOUNDBOARD, label: m.intl.string(m.t.yPH4xm) },
                            {
                                id: "soundboard-hold",
                                value: Q.hCu.SOUNDBOARD_HOLD,
                                label: m.intl.string(m.t["1xFbP/"]),
                            },
                        ),
                    s &&
                        (r.push({ id: "save-clip", value: Q.hCu.SAVE_CLIP, label: m.intl.string(m.t.U4URzP) }),
                        l &&
                            r.push({
                                id: "save-screenshot",
                                value: Q.hCu.SAVE_SCREENSHOT,
                                label: m.intl.string(m.t["+WloFH"]),
                            }))),
                r
            );
        })({ overlaySupported: i, canGoLive: t, allowSoundboard: l, enableClips: n, enableScreenshotKeybind: s }),
        keybindDescriptions: (function (e) {
            let { overlaySupported: t, canGoLive: i, enableClips: n, enableScreenshotKeybind: s } = e,
                l = {
                    [Q.hCu.UNASSIGNED]: m.intl.string(m.t.rvlNLv),
                    [Q.hCu.PUSH_TO_MUTE]: m.intl.string(m.t.xtESim),
                    [Q.hCu.PUSH_TO_TALK]: m.intl.string(m.t.wTcBSy),
                    [Q.hCu.PUSH_TO_TALK_PRIORITY]: m.intl.string(m.t.FhHvWH),
                    [Q.hCu.TOGGLE_MUTE]: m.intl.string(m.t.X2fbUm),
                    [Q.hCu.TOGGLE_DEAFEN]: m.intl.string(m.t.MjREZV),
                    [Q.hCu.TOGGLE_VOICE_MODE]: m.intl.string(m.t.snm5YW),
                    [Q.hCu.TOGGLE_STREAMER_MODE]: m.intl.string(m.t.YszLLx),
                    [Q.hCu.VAD_PRIORITY]: m.intl.string(m.t.rSe8IZ),
                    [Q.hCu.TOGGLE_CAMERA]: m.intl.string(m.t.v1JBtL),
                };
            return (
                t && (l[Q.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = m.intl.string(m.t.IoP5vc)),
                i && (0, ej.isWindows)() && (l[Q.hCu.TOGGLE_GO_LIVE_STREAMING] = m.intl.string(m.t.s4C238)),
                (0, ej.isDesktop)() &&
                    ((l[Q.hCu.NAVIGATE_BACK] = m.intl.string(m.t.nKDlEt)),
                    (l[Q.hCu.NAVIGATE_FORWARD] = m.intl.string(m.t.DK0FFk)),
                    (l[Q.hCu.SOUNDBOARD] = (0, ej.isWindows)()
                        ? m.intl.string(m.t["5wJefL"])
                        : m.intl.string(m.t.gzjsSP)),
                    (l[Q.hCu.SOUNDBOARD_HOLD] = (0, ej.isWindows)()
                        ? m.intl.string(m.t.RRkZc9)
                        : m.intl.string(m.t.laNlTl)),
                    n &&
                        ((l[Q.hCu.SAVE_CLIP] = m.intl.string(m.t.z3Wbam)),
                        s && (l[Q.hCu.SAVE_SCREENSHOT] = m.intl.string(m.t.m0zd57)))),
                l
            );
        })({ overlaySupported: i, canGoLive: t, enableClips: n, enableScreenshotKeybind: s }),
    };
}
var l2 = i(581133);
function l3(e) {
    let { children: t } = e;
    return t([lI.Q_.MESSAGE, lI.Q_.NAVIGATION, lI.Q_.DND, lI.Q_.CHAT, lI.Q_.VOICE_AND_VIDEO, lI.Q_.MISCELLANEOUS]);
}
class l6 extends N.PureComponent {
    handleActionChanged = (e) => {
        tR.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        tR.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        tR.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        tR.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = eD.dI(e.shortcut);
        return nQ.A.hasBind(t)
            ? (0, f.jsx)(ta.p, { messageType: ta.Y.ERROR, children: m.intl.string(m.t["7lQlw3"]) })
            : iT.Yy.has(t)
              ? (0, f.jsx)(ta.p, {
                    messageType: ta.Y.ERROR,
                    children: m.intl.format(m.t.MOIaNd, {
                        keyboardNavArticle: to.A.getArticleURL(Q.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, f.jsx)(k.E, {
                    variant: "text-md/normal",
                    className: l2.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, f.jsxs)("div", {
            className: l2.YI,
            children: [
                (0, f.jsxs)("div", {
                    className: l2.PO,
                    children: [
                        (0, f.jsx)("div", {
                            className: l2.AS,
                            children: (0, f.jsx)(lS.l, {
                                selectionMode: "single",
                                label: m.intl.string(m.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, f.jsx)("div", {
                            className: l2.AS,
                            children: (0, f.jsx)(sy.D, {
                                label: m.intl.string(m.t["1La4tC"]),
                                children: (0, f.jsx)(tL.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, f.jsx)("div", {
                                className: l2.d9,
                                children: (0, f.jsx)(lp.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: lf.u,
                                    "aria-label": m.intl.string(m.t.qEHmmB),
                                }),
                            }),
                        (0, f.jsx)("div", {
                            className: l2.ZW,
                            children: (0, f.jsx)(e1.m, {
                                text: m.intl.string(m.t.uCD7qK),
                                children: (0, f.jsx)("div", {
                                    children: (0, f.jsx)(D.d, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === Q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, f.jsx)(lW, { keybind: this.props.keybind }) : void 0;
    }
}
class l4 extends N.PureComponent {
    handleAddKeybind = () => {
        tR.A.addKeybind();
    };
    renderKeybinds(e, t, i) {
        return e.map((n, s) =>
            (0, f.jsxs)(
                N.Fragment,
                {
                    children: [
                        (0, f.jsx)(l6, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }, n.id),
                        s !== e.length - 1 ? (0, f.jsx)(eT.c, {}) : null,
                    ],
                },
                n.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, f.jsxs)("div", {
            className: l2.$e,
            children: [
                (0, f.jsx)(lN.m, { size: "xs", color: F.A.colors.ICON_SUBTLE }),
                (0, f.jsx)(k.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: m.intl.string(m.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { customizableKeybinds: e, keybindActionTypes: t, keybindDescriptions: i } = this.props;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(lQ, {
                    className: iI.IE,
                    children: ej.isPlatformEmbedded
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsxs)("div", {
                                      className: l2.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, f.jsx)("div", {
                                              className: l2.c9,
                                              children: (0, f.jsx)(eE.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: m.intl.string(m.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsx)(lR, { className: l2.Qo, sourcePage: "keybinds" }),
                                  e.length > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [(0, f.jsx)(eT.c, {}), this.renderKeybinds(e, i, t)],
                                      }),
                                  (0, f.jsx)(eT.c, {}),
                              ],
                          })
                        : (0, f.jsx)(ta.p, {
                              messageType: ta.Y.INFO,
                              className: l2.Ly,
                              children: m.intl.format(m.t.mPi3F3, { downloadLink: Q.X7G.DOWNLOAD }),
                          }),
                }),
                (0, f.jsx)(l5, {}),
            ],
        });
    }
}
function l5(e) {
    let { showHeader: t = !0 } = e,
        i = eL()((0, lI.Bx)())
            .filter((e) => e.description !== m.intl.string(m.t.HnNtEI))
            .groupBy((e) => e.group)
            .value();
    return (0, f.jsxs)(L.B, {
        gap: 48,
        children: [
            (0, f.jsx)(io.n, {
                label: t ? m.intl.string(m.t.Lz5KHI) : void 0,
                children: (0, f.jsx)("div", {
                    className: l2.jh,
                    children: (0, f.jsxs)("div", {
                        className: l2.yZ,
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/normal", children: m.intl.string(m.t.sMWLBj) }),
                            (0, f.jsx)("div", {
                                className: l2.DM,
                                children: (0, f.jsx)(l_.e, { shortcut: lC.z.binds["0"], className: l2.LE }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, f.jsx)(l3, {
                children: (e) =>
                    (0, f.jsx)(f.Fragment, {
                        children: e.map((e, t) => {
                            let n = (0, lI.Gm)(e),
                                s = (0, lI.zF)(e),
                                l = i[e];
                            return (0, f.jsx)(
                                io.n,
                                {
                                    label: n,
                                    description: s,
                                    children: (0, f.jsx)("div", {
                                        className: l2.jh,
                                        children: l.map((e, t) =>
                                            (0, f.jsxs)(
                                                N.Fragment,
                                                {
                                                    children: [
                                                        0 !== t && (0, f.jsx)(eT.c, {}),
                                                        (0, f.jsxs)("div", {
                                                            className: l2.yZ,
                                                            children: [
                                                                (0, f.jsx)(k.E, {
                                                                    variant: "text-md/normal",
                                                                    children: e.description,
                                                                }),
                                                                (0, f.jsx)("div", {
                                                                    className: l2.DM,
                                                                    children: e.binds.map((e) =>
                                                                        (0, f.jsx)(
                                                                            l_.e,
                                                                            { shortcut: e, className: l2.LE },
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
let l8 = (0, o.E2)(d.X.KEYBINDS_SETTING, {
        Component: function () {
            N.useEffect(
                () => (
                    tR.A.enableAll(!1),
                    () => {
                        tR.A.enableAll(!0);
                    }
                ),
                [],
            );
            let e = l1();
            return (0, f.jsx)(l4, { ...e });
        },
        useSearchTerms: () => [m.intl.string(m.t.T9DA2K)],
    }),
    l7 = (0, o.zZ)(d.X.KEYBINDS_CATEGORY, { buildLayout: () => [l8] }),
    l9 = (0, o.t_)(d.X.KEYBINDS_PANEL, { useTitle: () => m.intl.string(m.t.T9DA2K), buildLayout: () => [l7] }),
    re = (0, o.i4)(d.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.T9DA2K),
        icon: lx.F,
        buildLayout: () => [l9],
    });
var rt = i(37646),
    ri = i(434404);
let rn = (0, o.t_)(d.X.LANGUAGE_AND_TIME_PANEL, {
        useTitle: () => m.intl.string(m.t.KyFVyi),
        buildLayout: () => [ri.F],
    }),
    rs = (0, o.i4)(d.X.LANGUAGE_AND_TIME_SIDEBAR_ITEM, {
        icon: rt.U,
        useTitle: () => m.intl.string(m.t.KyFVyi),
        buildLayout: () => [rn],
    }),
    rl = (0, nf.D)(() => ({ openOnStartup: !0, startMinimized: !1, minimizeToTray: !0 }));
async function rr() {
    let e = await st.Ay.getOpenOnStart(),
        t = await st.Ay.getSetting("START_MINIMIZED", !1),
        i = await st.Ay.getSetting("MINIMIZE_TO_TRAY", !0);
    rl.setState({ openOnStartup: e, startMinimized: t, minimizeToTray: i });
}
let ra = (0, o.zD)(d.X.OS_OPEN_ON_STARTUP, {
        useTitle: () => m.intl.string(m.t["3BeZti"]),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rl.useState((e) => e.openOnStartup),
        setValue: function (e) {
            rl.setState({ openOnStartup: e }), st.Ay.send("TOGGLE_OPEN_ON_STARTUP", e);
        },
        initialize: () => {
            st.Ay.getOpenOnStart().then((e) => rl.setState({ openOnStartup: e }));
        },
    }),
    ro = (0, o.zD)(d.X.OS_MINIMIZE_TO_TRAY, {
        useTitle: () => m.intl.string(m.t.dJ5MUh),
        useSubtitle: () => m.intl.string(m.t.nQavHr),
        usePredicate: () => n9.Av && !(0, n9.cX)(),
        useValue: () => rl.useState((e) => e.minimizeToTray),
        setValue: function (e) {
            rl.setState({ minimizeToTray: e }), st.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e);
        },
        initialize: () => {
            st.Ay.getSetting("MINIMIZE_TO_TRAY", !0).then((e) => rl.setState({ minimizeToTray: e }));
        },
    });
var ru = i(117695);
function rd(e) {
    switch (e.state) {
        case "unknown":
            return m.intl.string(m.t["KW+nqT"]);
        case "disabled":
            return m.intl.string(m.t["Q/wAF7"]);
        case "disconnected":
            return m.intl.string(m.t.Xvs9IM);
        case "initializing":
            return m.intl.string(m.t.h4qz8W);
        case "connecting":
            return m.intl.string(m.t.fSu9XF);
        case "handshaking":
            return m.intl.string(m.t["00aYLJ"]);
        case "running":
            return m.intl.string(m.t["54TB7Z"]);
        case "waiting-for-retry":
            return m.intl.string(m.t["0FONwi"]);
        case "failure":
            return m.intl.string(m.t.Ic0nkd);
        default:
            (0, t4.xb)(e.state);
    }
}
let rc = new Set(["failure", "unknown"]),
    rg = (0, o.E2)(d.X.OS_SYSTEM_SERVICE, {
        useSearchTerms: () => [m.intl.string(m.t.roHq80)],
        Component: function () {
            let [e, t] = N.useState(!1),
                [i, n] = N.useState(() => (0, tu.TC)()),
                s = (0, u.ri)("SystemService"),
                l = (0, R.bG)([eJ.Ay], () => eJ.Ay.getSystemServiceStatus("input-service")),
                r = N.useCallback(async () => {
                    t(!0),
                        i ? await (0, tu.z8)("windows-settings") : await (0, tu.sL)("windows-settings"),
                        t(!1),
                        n((0, tu.TC)());
                }, [i]),
                a = "running" === l.state;
            return (0, f.jsxs)("div", {
                className: ru.q,
                children: [
                    (0, f.jsxs)("div", {
                        className: ru.L,
                        children: [
                            (0, f.jsxs)(L.B, {
                                direction: "horizontal",
                                children: [
                                    (0, f.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-strong",
                                        children: m.intl.string(m.t.roHq80),
                                    }),
                                    i &&
                                        s &&
                                        (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-md/medium",
                                                    color: "text-strong",
                                                    "aria-hidden": !0,
                                                    children: "\u2022",
                                                }),
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-md/medium",
                                                    color:
                                                        "running" === l.state
                                                            ? "text-feedback-positive"
                                                            : rc.has(l.state)
                                                              ? "text-feedback-critical"
                                                              : "text-feedback-warning",
                                                    children: rd(l),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.intl.format(m.t["8CAL+D"], {
                                    helpCenterLink: to.A.getArticleURL(Q.MVz.SYSTEM_SERVICE),
                                }),
                            }),
                            i &&
                                !s &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-sm/normal",
                                    color: a ? "text-feedback-positive" : "text-feedback-warning",
                                    children: a
                                        ? m.intl.string(m.t.KHVMkW)
                                        : m.intl.format(m.t["5Rlr0b"], { status: rd(l) }),
                                }),
                        ],
                    }),
                    (0, f.jsx)(eE.$, {
                        variant: i ? "critical-secondary" : "primary",
                        loading: e,
                        onClick: r,
                        text: i ? m.intl.string(m.t.pAwbdL) : m.intl.string(m.t["1iI46O"]),
                    }),
                ],
            });
        },
        usePredicate: tu.XQ,
    }),
    rm = (0, o.zZ)(d.X.LINUX_CATEGORY, {
        buildLayout: () => [ra, ro, rg],
        initialize: () => {
            rr();
        },
    }),
    rA = (0, o.t_)(d.X.LINUX_PANEL, { useTitle: () => m.intl.string(m.t["7pPjTW"]), buildLayout: () => [rm] }),
    rh = (0, o.i4)(d.X.LINUX_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["7pPjTW"]),
        icon: e3.k,
        usePredicate: () => ej.isPlatformEmbedded && (0, ej.isLinux)(),
        buildLayout: () => [rA],
    });
var rE = i(3137),
    rT = i(369606),
    rx = i(604121),
    rS = i(725951),
    rp = i(400492),
    rf = i(669067),
    rN = i(115063),
    r_ = i(754692),
    rC = i(927018),
    rI = i(512599),
    rb = i(532197),
    rv = i(874486),
    rj = i(989349),
    ry = i.n(rj),
    rO = i(58703),
    rR = i(906688),
    rL = i(523896);
function rD(e) {
    let { achievementId: t, dateUnlocked: i } = e,
        n = (0, rC.vM)(t);
    if (null == n) return null;
    let s = null != i,
        { name: l, description: r, hideDescriptionUntilUnlock: a, onAction: o } = n,
        u = a && !s,
        d = s ? "text-strong" : "text-muted",
        c = s ? "text-default" : "text-muted",
        g = ry()(i),
        m = null != o && s,
        A = m ? V.D : "div";
    return (0, f.jsxs)(A, {
        className: eF()(rL.kL, m && rL.b),
        onClick: () => {
            m && o();
        },
        children: [
            (0, f.jsx)("div", {
                className: rL.zc,
                children: (0, f.jsx)(rR.A, { achievementId: t, size: rR.A.Sizes.SIZE_40, unlocked: s }),
            }),
            (0, f.jsxs)("div", {
                className: rL.VW,
                children: [
                    null != i &&
                        (0, f.jsx)(k.E, {
                            variant: "text-xxs/semibold",
                            color: "text-muted",
                            className: rL.YR,
                            children: (0, rO.mk)(g),
                        }),
                    (0, f.jsx)(k.E, { variant: "text-md/medium", color: d, children: l() }),
                    (0, f.jsx)(k.E, { variant: "text-xs/normal", color: c, children: u ? "?????" : r() }),
                ],
            }),
        ],
    });
}
var rP = i(885959);
function rG(e) {
    let { onBackClick: t } = e,
        i = (0, R.bG)([rv.A], () => rv.A.getAllUnlockedAchievements()),
        n = N.useMemo(() => Object.values(i).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [i]),
        s = N.useMemo(
            () =>
                Object.values(rC.l0)
                    .filter(t4.Vq)
                    .filter((e) => null == i[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [i],
        );
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)(V.D, {
                onClick: t,
                className: rP.vv,
                children: [
                    (0, f.jsx)(rb.A, { direction: rb.A.Directions.LEFT, className: rP.Kk }),
                    (0, f.jsx)(k.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: m.intl.string(m.t["13/7kX"]),
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: rP.N1,
                children: [
                    (0, f.jsxs)("div", {
                        className: rP.if,
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: m.intl.string(m.t["6jI0hd"]),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: m.intl.string(m.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, f.jsx)("div", {
                        className: rP.nr,
                        children: (0, f.jsx)(rT.O, {
                            size: "custom",
                            color: F.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            n.length > 0 &&
                (0, f.jsx)("div", {
                    className: rP.yF,
                    children: (0, f.jsx)("div", {
                        className: rP.Eh,
                        children: n.map((e) => {
                            let { achievementId: t, dateUnlocked: i } = e;
                            return (0, f.jsx)(rD, { achievementId: t, dateUnlocked: i }, t);
                        }),
                    }),
                }),
            s.length > 0 &&
                (0, f.jsxs)("div", {
                    className: rP.yF,
                    children: [
                        (0, f.jsx)("div", {
                            className: rP.if,
                            children: (0, f.jsx)(k.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: m.intl.string(m.t.GFyMg1),
                            }),
                        }),
                        (0, f.jsx)("div", {
                            className: rP.Eh,
                            children: s.map((e) => (0, f.jsx)(rD, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, f.jsx)("div", { className: rP.yF, children: (0, f.jsx)("div", { className: rP.F3 }) }),
        ],
    });
}
var rU = i(224964),
    rM = i(31408),
    rV = i(739347);
let rk = { enabled: !0, combosEnabled: !0, screenshakeEnabled: !1, confettiEnabled: !1 },
    rw = (0, eR.range)(0, 11),
    rF = (0, eR.range)(0, 2.25, 0.25),
    rB = (0, eR.range)(1, 11),
    rz = (0, eR.range)(1, 26),
    rY = { 0: "poggermode_settings_panel", 1: "poggermode_achievements_panel" };
function rX(e) {
    let { disabled: t, locations: i, settingsLocations: n, onChange: s } = e,
        l = i.map((e) =>
            (0, f.jsx)(
                D.d,
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
    return (0, f.jsx)(io.n, { label: m.intl.string(m.t.bWVN1D), children: l });
}
function rH(e) {
    let { children: t } = e;
    return (0, f.jsx)(k.E, { className: rV.iF, variant: "text-sm/normal", color: "text-default", children: t });
}
function rK(e) {
    let {
            settings: { enabled: t, warningSeen: i },
            updateSettings: n,
        } = e,
        s = (0, R.bG)([iW.A], () => iW.A.useReducedMotion);
    return (0, f.jsx)(D.d, {
        label: m.intl.string(m.t.vuiXm9),
        description: m.intl.string(m.t.KuYbWN),
        checked: t,
        onChange: (e) => {
            e || (0, r_._)(rC.sn.DISABLE_POGGERMODE),
                e && (!i || s)
                    ? (0, se.A)({
                          title: s ? m.intl.string(m.t["FxT+p0"]) : m.intl.string(m.t.TAZ4F9),
                          subtitle: s ? m.intl.string(m.t.gmixrx) : m.intl.string(m.t.jN3t3K),
                          confirmText: m.intl.string(m.t.JFfins),
                          onConfirm: () => n(s ? rk : { enabled: !0, warningSeen: !0 }),
                      })
                    : n({ enabled: e });
        },
    });
}
function rW(e) {
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
    return (0, f.jsxs)(io.n, {
        label: m.intl.string(m.t.mqxwJO),
        children: [
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t.s0KCgF),
                description: m.intl.string(m.t.O1Vflg),
                checked: i,
                disabled: !t,
                onChange: (e) => r({ confettiEnabled: e }, 0),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.vd0D81),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t.a18Sug) }),
                    (0, f.jsx)(i7.A, {
                        disabled: a,
                        markers: rB,
                        stickToMarkers: !0,
                        minValue: rB[0],
                        maxValue: rB[rB.length - 1],
                        initialValue: n,
                        onValueChange: (e) => r({ confettiCount: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.sPO3ij),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t.xoldVn) }),
                    (0, f.jsx)(i7.A, {
                        disabled: a,
                        markers: rz,
                        stickToMarkers: !0,
                        minValue: rz[0],
                        maxValue: rz[rz.length - 1],
                        initialValue: s,
                        onValueChange: (e) => r({ confettiSize: e }, 0),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
            (0, f.jsx)(rX, {
                disabled: a,
                locations: [
                    {
                        location: rM.k.CHAT_INPUT,
                        title: m.intl.string(m.t.elTtyz),
                        description: m.intl.string(m.t.HtKfMi),
                    },
                    {
                        location: rM.k.REACTION,
                        title: m.intl.string(m.t.Ik4VIa),
                        description: m.intl.string(m.t.y4rqK0),
                    },
                    {
                        location: rM.k.MEMBER_USER,
                        title: m.intl.string(m.t.ZXBlAn),
                        description: m.intl.string(m.t["m9RD+c"]),
                    },
                    {
                        location: rM.k.CALL_TILE,
                        title: m.intl.string(m.t.V66giQ),
                        description: m.intl.string(m.t.fiHV7u),
                    },
                ],
                settingsLocations: l,
                onChange: (e) => r({ confettiEnabledLocations: e }, 0),
            }),
        ],
    });
}
function rZ(e) {
    let {
            settings: { enabled: t, combosEnabled: i, comboSoundsEnabled: n, combosRequiredCount: s },
            updateSettings: l,
        } = e,
        r = !t || !i;
    return (0, f.jsxs)(io.n, {
        label: m.intl.string(m.t.Xz0ole),
        children: [
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t.o3iV7B),
                description: m.intl.string(m.t["31Z8Ee"]),
                checked: i,
                disabled: !t,
                onChange: (e) => l({ combosEnabled: e }),
            }),
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t["Ax+IoW"]),
                description: m.intl.string(m.t["9rgQEr"]),
                checked: n,
                disabled: !t,
                onChange: (e) => l({ comboSoundsEnabled: e }),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: r ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.L0oQuh),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t["/OOFpL"]) }),
                    (0, f.jsx)(i7.A, {
                        disabled: r,
                        markers: rw,
                        stickToMarkers: !0,
                        minValue: rw[0],
                        maxValue: rw[rw.length - 1],
                        initialValue: s,
                        onValueChange: (e) => l({ combosRequiredCount: e }),
                        onValueRender: (e) => `${e}`,
                    }),
                ],
            }),
        ],
    });
}
function rq(e) {
    let {
            settings: { enabled: t, screenshakeEnabled: i, shakeIntensity: n, screenshakeEnabledLocations: s },
            updateSettings: l,
        } = e,
        r = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        a = !t || !i || r;
    return (0, f.jsxs)(io.n, {
        label: m.intl.string(m.t.wVS5Sd),
        children: [
            (0, f.jsx)(D.d, {
                label: m.intl.string(m.t.N004zO),
                description: r ? m.intl.string(m.t.GckHGw) : m.intl.string(m.t.Qq5W3v),
                checked: i && !r,
                disabled: !t || r,
                onChange: (e) => l({ screenshakeEnabled: e }, 1),
            }),
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: a ? "text-muted" : "text-strong",
                        className: rV.KF,
                        children: m.intl.string(m.t.UxnnC4),
                    }),
                    (0, f.jsx)(rH, { children: m.intl.string(m.t.CEOEOb) }),
                    (0, f.jsx)(i7.A, {
                        disabled: a,
                        markers: rF,
                        equidistant: !0,
                        stickToMarkers: !0,
                        minValue: rF[0],
                        maxValue: rF[rF.length - 1],
                        initialValue: n,
                        onValueChange: (e) => {
                            var t;
                            null != (t = { shakeIntensity: e }).shakeIntensity &&
                                t.shakeIntensity > n &&
                                (0, r_._)(rC.sn.MORE),
                                l(t, 1);
                        },
                        onMarkerRender: (e) => (e === rF[rF.length - 1] ? m.intl.string(m.t["4rbMWc"]) : `${100 * e}%`),
                    }),
                ],
            }),
            (0, f.jsx)(rX, {
                disabled: a,
                locations: [
                    {
                        location: rM.uD.CHAT_INPUT,
                        title: m.intl.string(m.t.vUcvPP),
                        description: m.intl.string(m.t.y00OrF),
                    },
                    {
                        location: rM.uD.VOICE_USER,
                        title: m.intl.string(m.t.TcRO54),
                        description: m.intl.string(m.t.YJCxVY),
                    },
                    {
                        location: rM.uD.MENTION,
                        title: m.intl.string(m.t.oW4shO),
                        description: m.intl.string(m.t["mqfw/H"]),
                    },
                ],
                settingsLocations: s,
                onChange: (e) => l({ screenshakeEnabledLocations: e }, 1),
            }),
        ],
    });
}
function rQ(e) {
    let { updateSettings: t } = e;
    return (0, f.jsx)(io.n, {
        label: m.intl.string(m.t.EuXv2q),
        children: (0, f.jsxs)(L.B, {
            gap: 16,
            children: [
                (0, f.jsx)("div", { children: m.intl.string(m.t["1SLnki"]) }),
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: rV.hw,
                    children: (0, f.jsx)(eE.$, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t.qz65yY),
                        onClick: () => {
                            t({ enabled: !1, settingsVisible: !1 }), (0, sE.default)();
                        },
                    }),
                }),
            ],
        }),
    });
}
function rJ(e) {
    let { onChangePage: t } = e;
    return (0, f.jsxs)(V.D, {
        onClick: () => t(1),
        className: rV.Tq,
        children: [
            (0, f.jsx)("div", {
                className: rV.w1,
                children: (0, f.jsx)(rT.O, { size: "md", color: F.A.unsafe_rawColors.ORANGE_345.css }),
            }),
            (0, f.jsxs)("div", {
                className: rV.qL,
                children: [
                    (0, f.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: m.intl.string(m.t["6jI0hd"]),
                    }),
                    (0, f.jsx)(k.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: m.intl.string(m.t.GuUItX),
                    }),
                ],
            }),
            (0, f.jsx)(tE._, { size: "custom", color: "currentColor", width: 16, className: rV.nT }),
        ],
    });
}
let r$ = () =>
    i
        .e("4660")
        .then(i.t.bind(i, 662336, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
function r0(e) {
    let { onChangePage: t, setShowEnableAnimation: i } = e,
        n = (0, R.cf)([rE.A], () => rE.A.getState()),
        [s, l] = N.useState({ x: 0, y: 0 }),
        r = (0, rU.A)(),
        a = (e, t) => {
            var l, a, o, u, d, c, g, m;
            if (
                (e.enabled &&
                    !1 === n.enabled &&
                    (i(!0),
                    (0, rp.Ak)("poggermode_enabled"),
                    (0, rN.fO)({ duration: 2e3, intensity: e.shakeIntensity ?? n.shakeIntensity })),
                (0, rI.O9)(e),
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
            1 === t && h && (0, rN.fO)({ duration: 1e3, intensity: e.shakeIntensity ?? n.shakeIntensity });
        },
        o = (e) => {
            l({ x: e.clientX, y: e.clientY });
        };
    return (
        N.useEffect(
            () => (window.addEventListener("mousemove", o), () => window.removeEventListener("mousemove", o)),
            [],
        ),
        (0, f.jsxs)(L.B, {
            gap: 24,
            children: [
                (0, f.jsx)(rK, { settings: n, updateSettings: a }),
                (0, f.jsx)(rJ, { onChangePage: t }),
                (0, f.jsx)(rZ, { settings: n, updateSettings: a }),
                (0, f.jsx)(rq, { settings: n, updateSettings: a }),
                (0, f.jsx)(rW, { settings: n, updateSettings: a }),
                (0, f.jsx)(rQ, { updateSettings: a }),
            ],
        })
    );
}
let r1 = (e) => (0 === e ? rS.f.LEFT : rS.f.RIGHT),
    r2 = (0, o.E2)(d.X.POGGERMODE_SETTING, {
        Component: function () {
            let [e, t] = N.useState(0),
                [i, n] = N.useState(r1(e)),
                [s, l] = N.useState(!1),
                r = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
                a = s && !r;
            return (
                N.useEffect(() => {
                    let t = setTimeout(() => {
                        n(r1(e));
                    }, 500);
                    return () => clearTimeout(t);
                }, [e]),
                N.useEffect(() => {
                    (0, rf._)(rY[e]);
                }, [e]),
                N.useEffect(() => {
                    Math.random() > 0.99 && (0, r_._)(rC.sn.VISITOR_100);
                }, []),
                (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(rS.A, {
                            className: rV.l3,
                            step: e,
                            direction: i,
                            children: ((e, t, i) => {
                                let n = (e) => () => {
                                    t(e);
                                };
                                switch (e) {
                                    case 0:
                                        return (0, f.jsx)(r0, { onChangePage: n(1), setShowEnableAnimation: i });
                                    case 1:
                                        return (0, f.jsx)(rG, { onBackClick: n(0) });
                                    default:
                                        return null;
                                }
                            })(e, t, l),
                        }),
                        (0, f.jsx)("div", {
                            className: a ? rV.Sr : rV.IP,
                            children: (0, f.jsx)(rx.a, {
                                className: rV.gT,
                                importData: r$,
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
            m.intl.string(m.t.AtCukI),
            m.intl.string(m.t.mqxwJO),
            m.intl.string(m.t.wVS5Sd),
            m.intl.string(m.t.Xz0ole),
            m.intl.string(m.t["Ax+IoW"]),
            m.intl.string(m.t["6jI0hd"]),
            m.intl.string(m.t.s0KCgF),
        ],
    }),
    r3 = (0, o.zZ)(d.X.POGGERMODE_CATEGORY, { buildLayout: () => [r2] });
var r6 = i(736170);
let r4 = (0, o.t_)(d.X.POGGERMODE_PANEL, { useTitle: () => m.intl.string(m.t.AtCukI), buildLayout: () => [r3] }),
    r5 = (0, o.i4)(d.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.AtCukI),
        icon: () => (0, f.jsx)("img", { alt: "", src: i(724405), className: r6.$ }),
        usePredicate: () => (0, R.bG)([rE.A], () => rE.A.settingsVisible),
        buildLayout: () => [r4],
    });
var r8 = i(307301);
let r7 = (0, o.zD)(d.X.OS_START_MINIMIZED, {
    useTitle: () => m.intl.string(m.t.GfBL83),
    useSubtitle: () => m.intl.string(m.t.XGyhhc),
    usePredicate: () => (0, n9.uF)(),
    useValue: () => rl.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: function (e) {
        rl.setState({ startMinimized: e }), st.Ay.send("TOGGLE_START_MINIMIZED", e);
    },
    useDisabled: () => !rl.useState((e) => e.openOnStartup),
    initialize: () => {
        st.Ay.getSetting("START_MINIMIZED", !1).then((e) => rl.setState({ startMinimized: e }));
    },
});
var r9 = i(839610),
    ae = i(145339);
function at(e) {
    let { keybind: t } = e,
        i = eD.dI(t.shortcut);
    return nQ.A.hasBind(i)
        ? (0, f.jsx)("div", {
              className: ae.$e,
              children: (0, f.jsx)(O.w, { type: "warning", children: m.intl.string(m.t["7lQlw3"]) }),
          })
        : iT.Yy.has(i)
          ? (0, f.jsx)("div", {
                className: ae.$e,
                children: (0, f.jsx)(O.w, {
                    type: "warning",
                    children: m.intl.format(m.t.MOIaNd, {
                        keyboardNavArticle: to.A.getArticleURL(Q.MVz.KEYBOARD_NAVIGATION),
                    }),
                }),
            })
          : void 0;
}
function ai(e) {
    let { keybind: t } = e;
    return t.action === Q.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, f.jsx)(lW, { keybind: t, className: ae._M }) : null;
}
let an = N.memo(function (e) {
    let { keybind: t, keybindDescriptions: i, keybindActionTypes: n } = e,
        s = N.useCallback((e) => tR.A.setKeybind({ ...t, action: e }), [t]),
        l = N.useCallback((e) => tR.A.setKeybind({ ...t, shortcut: e }), [t]),
        r = N.useCallback(() => tR.A.setKeybind({ ...t, enabled: !t.enabled }), [t]),
        a = N.useCallback(() => tR.A.deleteKeybind(t.id), [t.id]),
        o = N.useId(),
        u = N.useMemo(() => n.find((e) => e.value === t.action)?.label ?? t.action, [t.action, n]);
    return (0, f.jsxs)("div", {
        className: ae.f_,
        children: [
            (0, f.jsx)(at, { keybind: t }),
            (0, f.jsx)("div", {
                className: ae.XI,
                children: (0, f.jsx)(lS.l, {
                    selectionMode: "single",
                    label: m.intl.string(m.t.XH5b12),
                    value: t.action,
                    options: n,
                    onSelectionChange: s,
                    disabled: t.managed,
                }),
            }),
            (0, f.jsx)("div", {
                className: ae.LE,
                children: (0, f.jsx)(sy.D, {
                    label: m.intl.string(m.t["1La4tC"]),
                    layout: "vertical",
                    children: (0, f.jsx)(tL.A, { defaultValue: t.shortcut, onChange: l }),
                }),
            }),
            (0, f.jsxs)("div", {
                className: ae.ne,
                children: [
                    !t.managed &&
                        (0, f.jsx)(lp.K, {
                            variant: "icon-only",
                            onClick: a,
                            icon: lf.u,
                            "aria-label": m.intl.string(m.t.qEHmmB),
                        }),
                    (0, f.jsx)(e1.m, {
                        text: m.intl.string(t.enabled ? m.t.pNYGbx : m.t["51DGkH"]),
                        ariaHidden: !0,
                        children: (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsx)(z.A, {
                                    id: o,
                                    children: m.intl.format(t.enabled ? m.t["myr/Y0"] : m.t.lYhtPO, { actionName: u }),
                                }),
                                (0, f.jsx)(r9.I, { checked: t.enabled, onChange: r, labelledBy: o }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, f.jsx)(k.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ae.h_,
                children: i[t.action],
            }),
            (0, f.jsx)(ai, { keybind: t }),
        ],
    });
});
var as = i(354594);
let al = function () {
        let { customizableKeybinds: e, keybindDescriptions: t, keybindActionTypes: i } = l1();
        return 0 === e.length
            ? (0, f.jsx)(k.E, { variant: "text-sm/normal", color: "text-subtle", children: m.intl.string(m.t.vyYgWp) })
            : (0, f.jsx)("div", {
                  className: as.A,
                  children: e.map((n, s) =>
                      (0, f.jsxs)(
                          N.Fragment,
                          {
                              children: [
                                  (0, f.jsx)(an, { keybind: n, keybindDescriptions: t, keybindActionTypes: i }),
                                  s < e.length - 1 ? (0, f.jsx)(eT.c, { className: as.y, gap: 24 }) : null,
                              ],
                          },
                          n.id,
                      ),
                  ),
              });
    },
    ar = (0, o.E2)(d.X.CUSTOM_KEYBINDS_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["069nVT"])],
        Component: function () {
            return n9.Av ? (0, f.jsx)(al, {}) : null;
        },
    }),
    aa = (0, o.E2)(d.X.DEFAULT_KEYBINDS_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.Lz5KHI)],
        Component: () => (0, f.jsx)(l5, { showHeader: !1 }),
    }),
    ao = (0, o.zZ)(d.X.SYSTEM_GENERAL_CATEGORY, {
        useTitle: () => m.intl.string(m.t.cg6ltt),
        buildLayout: () => [ra, r7, ro],
        usePredicate: () => n9.Av && ((0, n9.uF)() || (0, n9.j9)()),
        initialize: () => {
            rr();
        },
    }),
    au = (0, o.zZ)(d.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t["069nVT"]),
        useSubtitle: () => m.intl.string(m.t.T4LZVL),
        buildLayout: () => [ar],
        initialize: () => (tR.A.enableAll(!1), () => tR.A.enableAll(!0)),
        useInlineNotice: function () {
            return n9.Av
                ? { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: () => (0, f.jsx)(lR, { sourcePage: "keybinds" }) }
                : {
                      type: e_.lT.INLINE_NOTICE,
                      noticeType: "info",
                      useText: () => m.intl.format(m.t.mPi3F3, { downloadLink: Q.X7G.DOWNLOAD }),
                  };
        },
        useHeaderDecoration: () =>
            n9.Av
                ? {
                      type: e_.WX.BUTTON_GROUP,
                      buttons: [
                          {
                              id: "add-keybind",
                              type: e_.UV.BUTTON,
                              text: m.intl.string(m.t.zk6Xbs),
                              variant: "secondary",
                              icon: r8.j,
                              onClick: () => tR.A.addKeybind(),
                          },
                      ],
                  }
                : null,
    }),
    ad = (0, o.zZ)(d.X.SYSTEM_DEFAULT_KEYBINDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.Lz5KHI),
        buildLayout: () => [aa],
    }),
    ac = (0, o.zZ)(d.X.SYSTEM_HELPER_CATEGORY, {
        useTitle: () => m.intl.string(m.t["+XZgmA"]),
        usePredicate: () => n9.Av && ((0, n9.uF)() || (0, n9.j9)()),
        buildLayout: () => [rg],
    }),
    ag = (0, o.t_)(d.X.SYSTEM_PANEL, {
        useTitle: () => m.intl.string(m.t["VJ/qKo"]),
        buildLayout: () => [ao, au, ad, ac],
    }),
    am = (0, o.i4)(d.X.SYSTEM_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["VJ/qKo"]),
        icon: lx.F,
        buildLayout: () => [ag],
    });
var aA = i(831544),
    ah = i(922795),
    aE = i(212245),
    aT = i(329551),
    ax = i(285918),
    aS = i(413339),
    ap = i(952572),
    af = i(382003);
let aN = (0, o.E2)(d.X.CAMERA_BACKGROUND_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.lZTUPs)],
        usePredicate: ap.A,
        Component: function () {
            let e = (0, aE.p)(),
                t = N.useRef(!1),
                i = (0, R.bG)([lv.Ay], () => lv.Ay.getVideoDeviceId()),
                [n, s] = N.useState((0, aT.i)(t6.default.getCurrentUser())),
                l = N.useRef(n);
            return (
                N.useEffect(
                    () => () => {
                        t.current && (0, ax._C)(l.current);
                    },
                    [],
                ),
                (0, f.jsx)(af.A, {
                    selectedBackgroundOption: n,
                    onSelectBackgroundOption: (i) => {
                        (t.current = !0), (l.current = i), s(i), (0, aS.gB)(i, { location: e.location }).catch(Q.tEg);
                    },
                    currentDeviceId: i,
                })
            );
        },
    }),
    a_ = (0, o.zD)(d.X.CAMERA_PREVIEW_PREFERENCE, {
        useTitle: () => m.intl.string(m.t["3Ppr1h"]),
        useSubtitle: () => m.intl.string(m.t.WNbX4O),
        useValue: g.bm.useSetting,
        setValue: (e) => {
            g.bm.updateSetting(e), X.default.track(Q.HAw.UPDATE_USER_SETTINGS_LOCAL, { always_preview_video: e });
        },
    });
var aC = i(625841),
    aI = i(74848),
    ab = i(204050);
let av = (0, nf.D)(() => ({ previewEnabled: !1 }));
var aj = i(731854);
let ay = (0, o.E2)(d.X.CAMERA_SELECTION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.FsQ3OR)],
    Component: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.isVideoAvailable()),
            { id: t } = (0, aI.x5)(aj.oh.VIDEO_INPUT),
            { analyticsLocations: i } = (0, nU.Ay)();
        return (0, f.jsx)(aC.U, {
            label: m.intl.string(m.t.FsQ3OR),
            deviceType: aj.oh.VIDEO_INPUT,
            location: "UserSettingsCameraSelect",
            isDisabled: !e,
            helperText: (0, ab.p)()
                ? m.intl.format(m.t.aJYgRt, {
                      onCameraSettingsClick: () => {
                          av.setState({ previewEnabled: !1 }),
                              window.open((0, ab.i)(t)),
                              X.default.track(Q.HAw.SYSTEM_CAMERA_SETTINGS_OPENED, { location_stack: i });
                      },
                  })
                : void 0,
        });
    },
});
var aO = i(745317),
    aR = i(886964);
let aL = (0, o.E2)(d.X.CAMERA_VIDEO_PREVIEW, {
        useSearchTerms: () => [m.intl.string(m.t.JIf4v7)],
        Component: function () {
            let e = lv.Ay.getCameraComponent(),
                t = (0, R.bG)([lv.Ay], () => lv.Ay.getVideoDeviceId()),
                i = av.useField("previewEnabled"),
                n = (0, R.bG)([lv.Ay], () => lv.Ay.isVideoAvailable());
            return ((0, e8.l0)(() => {
                av.setState({ previewEnabled: !1 });
            }),
            i)
                ? (0, f.jsx)("div", {
                      className: aR.T,
                      children: (0, f.jsxs)("div", {
                          className: aR.U,
                          children: [
                              (0, f.jsx)(e, { deviceId: t, width: 387, height: 218, disabled: !i }),
                              (0, f.jsx)(aO.k, {}),
                          ],
                      }),
                  })
                : (0, f.jsx)("div", {
                      className: aR.T,
                      children: (0, f.jsx)(e1.m, {
                          text: n ? null : m.intl.string(m.t["8jSzSe"]),
                          children: (0, f.jsx)(eE.$, {
                              variant: "primary",
                              text: m.intl.string(m.t.JIf4v7),
                              onClick: () => av.setState({ previewEnabled: !0 }),
                              disabled: !n,
                          }),
                      }),
                  });
        },
    }),
    aD = (0, o.zZ)(d.X.CAMERA_CATEGORY, {
        useTitle: () => m.intl.string(m.t.uje3P9),
        usePredicate: () => (0, R.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.VIDEO)),
        buildLayout: () => [aL, a_, ay, aN],
    });
function aP() {
    n6.h.dispatch({ type: "DISCORD_STATS_POPOUT_WINDOW_OPEN" });
}
let aG = (0, o.Tf)(d.X.DISCORD_STATS_POPOUT, {
    useTitle: () => "Discord Stats",
    useSubtitle: () => "Open a floating panel showing live GPU, CPU, and memory usage.",
    useLabel: () => "Open",
    usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.isStaff() ?? !1),
    onClick: () => {
        aP();
    },
});
var aU = i(827343);
let aM = (0, o.zD)(d.X.VOICE_AND_VIDEO_OPENH264, {
        useTitle: () => m.intl.string(m.t.qFphsa),
        useSubtitle: () => m.intl.string(m.t.cQfwyY),
        usePredicate: function () {
            return (0, n9.j9)();
        },
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getOpenH264Enabled());
        },
        setValue: function (e) {
            aU.A.setOpenH264Enabled(e),
                (0, se.A)({
                    title: m.intl.string(m.t["9jf31O"]),
                    subtitle: m.intl.string(m.t["J2wg+X"]),
                    confirmText: m.intl.string(m.t.BddRzS),
                    onConfirm: () => s2.A.app.relaunch(),
                });
        },
        useSearchTerms: () => ["open", "OpenH264", "H264", "codec"],
    }),
    aV = (0, o.zD)(d.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
        useTitle: () => m.intl.string(m.t["r6K+TL"]),
        useSubtitle: () => m.intl.string(m.t["xl9+I6"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getAecDump());
        },
        setValue: aU.A.setAecDump,
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isAecDumpSupported());
        },
    });
var ak = i(139033),
    aw = i(862482),
    aF = i(640238),
    aB = i(825484),
    az = i(77138),
    aY = i(487329),
    aX = i(353835);
let aH = (0, nf.D)(() => ({ isUploading: !1, isDisabled: !1 }));
async function aK() {
    let e = await s2.A.fileManager.getLogPath();
    s2.A.fileManager.showItemInFolder(e);
}
function aW(e) {
    (0, se.A)({
        title: m.intl.string(m.t["7UXEF2"]),
        subtitle: m.intl.string(m.t.IYPrRl),
        confirmText: m.intl.string(m.t.BddRzS),
        onConfirm: () => aU.A.setDebugLogging(e),
    });
}
async function aZ(e) {
    let { onUploadStart: t, onUploadFinish: i } = e;
    t?.();
    try {
        let e, t;
        await lv.Ay.getMediaEngine().writeAudioDebugState(),
            await aX.A.submitLiveCrashReport({ message: { message: "User Live Dump" } }),
            await (0, az.a)(Q.Umv.RTC),
            (e = m.intl.string(m.t["fKBB8+"])),
            (t = m.intl.string(m.t.BvyxE7)),
            (0, ak.A)({ title: e, subtitle: t });
    } catch (l) {
        var n;
        let e, t, i, s;
        (n = l.displayMessage),
            (e = m.intl.string(m.t.QZg0J7)),
            (t = n ?? m.intl.string(m.t.VzHcSm)),
            (i = (0, aY.B1)(aY.iy.DEBUG_LOG_UPLOAD_FAILED)?.errorCode),
            (s = m.intl.formatToPlainString(m.t.ejOT95, { errorCode: i })),
            (0, C.openModal)((i) =>
                (0, f.jsx)(aF.a, {
                    header: e,
                    confirmButtonColor: aw.$n.Colors.BRAND,
                    confirmText: m.intl.string(m.t.BddRzS),
                    ...i,
                    children: (0, f.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column", height: "100%" },
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/normal", children: t }),
                            (0, f.jsx)(k.E, {
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
async function aq() {
    await aZ({
        onUploadStart: () => aH.setState({ isUploading: !0 }),
        onUploadFinish: () => aH.setState({ isUploading: !1, isDisabled: !0 }),
    });
}
let aQ = (0, o.E2)(d.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
    useSearchTerms: () => [m.intl.string(m.t["726JHL"]), m.intl.string(m.t.EbwFfR), m.intl.string(m.t.nuPtYi)],
    usePredicate: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.DEBUG_LOGGING));
        return n9.Av && e && null != s2.A.fileManager.readLogFiles;
    },
    Component: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.getDebugLogging()),
            t = aH.useField("isUploading"),
            i = aH.useField("isDisabled"),
            n = N.useId();
        return (0, f.jsxs)("fieldset", {
            children: [
                (0, f.jsx)(z.A, { tag: "legend", id: n, children: m.intl.string(m.t["FjN+et"]) }),
                (0, f.jsxs)(L.B, {
                    direction: "vertical",
                    gap: 4,
                    children: [
                        (0, f.jsx)(D.d, {
                            label: m.intl.string(m.t["726JHL"]),
                            description: m.intl.string(m.t["/7ak9Q"]),
                            checked: e,
                            onChange: aW,
                        }),
                        (0, f.jsx)("div", {
                            role: "group",
                            "aria-labelledby": n,
                            children: (0, f.jsxs)(aB.e, {
                                children: [
                                    (0, f.jsx)(eE.$, {
                                        variant: "secondary",
                                        text: m.intl.string(m.t.EbwFfR),
                                        onClick: aq,
                                        loading: t,
                                        disabled: i,
                                        "aria-label": m.intl.string(m.t.aY1OH2),
                                    }),
                                    (0, f.jsx)(eE.$, {
                                        variant: "secondary",
                                        text: m.intl.string(m.t.nuPtYi),
                                        onClick: aK,
                                        "aria-label": m.intl.string(m.t["L/hFOe"]),
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
var aJ = i(233545),
    a$ = i(412780);
function a0() {
    return (0, R.bG)([t6.default, lv.Ay], () => {
        let e = t6.default.getCurrentUser(),
            t = e?.isStaff() ?? !1,
            i = "canary" === st.Ay.releaseChannel || "development" === st.Ay.releaseChannel,
            n = lv.Ay.supports(aj.O5.CONNECTION_REPLAY);
        return t && i && n;
    });
}
let a1 = (0, o.zD)(d.X.VOICE_AND_VIDEO_RECORD_CONNECTION_REPLAY, {
        useTitle: () => m.intl.string(m.t.U4FgFK),
        useSubtitle: () => m.intl.string(m.t.Lm72RU),
        useValue: function () {
            return (0, R.bG)([a$.Ay], () => a$.Ay.shouldRecordNextConnection());
        },
        setValue: aJ.Et,
        usePredicate: a0,
    }),
    a2 = (0, o.Tf)(d.X.VOICE_AND_VIDEO_OPEN_CONNECTION_REPLAY, {
        useTitle: () => m.intl.string(m.t.nJnOHO),
        useLabel: () => m.intl.string(m.t["3xjX0U"]),
        onClick: aJ.YW,
        usePredicate: a0,
    });
var a3 = i(926919),
    a6 = i(111162),
    a4 = i(855302);
let a5 = (0, o.zD)(d.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
        useTitle: () => m.intl.string(m.t["0CEP6e"]),
        useSubtitle: () => m.intl.string(m.t["kBXuW+"]),
        useValue: function () {
            return (0, R.bG)([a6.default], () => a6.default.isStreamInfoOverlayEnabled);
        },
        setValue: function (e) {
            let t = a6.default.isStreamInfoOverlayEnabled;
            (0, a4.A)("stream_info_overlay_enabled", e, t), (0, a3.x)({ isStreamInfoOverlayEnabled: e });
        },
        usePredicate: function () {
            return g.Q_.useSetting();
        },
    }),
    a8 = (0, o.bd)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_ACCORDION, {
        useTitle: (e) => (e ? m.intl.string(m.t["/B4I8H"]) : m.intl.string(m.t.BTlsWH)),
        useCollapsedSubtitle: () => m.intl.string(m.t.la1Ys4),
        buildLayout: () => [a5, aV, a1, a2, aQ],
    });
function a7(e, t, i) {
    (0, se.A)({ title: e, subtitle: t, confirmText: m.intl.string(m.t.BddRzS), onConfirm: i });
}
let a9 = (0, o.Tf)(d.X.VOICE_AND_VIDEO_RESET_ALL_SETTINGS, {
        useTitle: () => m.intl.string(m.t.SXfv1v),
        useSubtitle: () => m.intl.string(m.t["buA5/q"]),
        useLabel: () => m.intl.string(m.t.yBZMsQ),
        onClick: function () {
            a7(m.intl.string(m.t["4iKQ/3"]), m.intl.string(m.t.sQ42iT), aU.A.reset);
        },
        useVariant: () => "critical-secondary",
    }),
    oe = (0, o.zZ)(d.X.VOICE_AND_VIDEO_DIAGNOSTICS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.UDAU9K),
        buildLayout: () => [aM, a8, aG, a9],
    });
var ot = i(347481),
    oi = i(852712),
    on = i(199966),
    os = i(963935);
function ol(e) {
    let { title: t } = e;
    return t;
}
function or(e) {
    let { useTitle: t, settingKey: i, formatter: n, index: s } = e,
        l = t();
    return "string" == typeof l ? n({ title: l, index: s, key: i }) : l;
}
function oa(e) {
    let { setting: t, formatter: i, index: n } = e;
    return () => (0, f.jsx)(or, { useTitle: t.useTitle, settingKey: t.key, formatter: i, index: n }, t.key);
}
function oo(e) {
    return e.type === os.Z6.LIST;
}
function ou(e, t) {
    let { limit: i = 2, formatter: n = ol } = t ?? {};
    tO()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: s, accessibleDirectory: l } = (0, on._)(),
        r = s.get(e) ?? l.get(e);
    tO()(
        null != r && (r.type === os.Z6.ACCORDION || oo(r)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let a = oo(r) ? (r.collapseAfter ?? 0) : 0,
        o = r.layout;
    return N.useMemo(() => {
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
                return m.intl.format(m.t["3H9tCW"], { settingOneHook: oa({ setting: t[0], formatter: n, index: 0 }) });
            else if (2 === t.length)
                return m.intl.format(m.t.MWryo6, {
                    settingOneHook: oa({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oa({ setting: t[1], formatter: n, index: 1 }),
                });
            else
                return m.intl.format(m.t.a00b5G, {
                    settingOneHook: oa({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oa({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: oa({ setting: t[2], formatter: n, index: 2 }),
                });
        return 1 === s
            ? m.intl.format(m.t.O8vNbS, { settingOneHook: oa({ setting: t[0], formatter: n, index: 0 }) })
            : 2 === s
              ? m.intl.format(m.t["acXG/W"], {
                    settingOneHook: oa({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oa({ setting: t[1], formatter: n, index: 1 }),
                })
              : m.intl.format(m.t["5+ldWc"], {
                    settingOneHook: oa({ setting: t[0], formatter: n, index: 0 }),
                    settingTwoHook: oa({ setting: t[1], formatter: n, index: 1 }),
                    settingThreeHook: oa({ setting: t[2], formatter: n, index: 2 }),
                });
    }, [i, a, o, n]);
}
let od = (0, o.zD)(d.X.VOICE_AUTOMATIC_GAIN_CONTROL_SETTING, {
        useTitle: () => m.intl.string(m.t.cUMdH0),
        useSubtitle: () => m.intl.string(m.t["6EjbvA"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getAutomaticGainControl());
        },
        setValue: function (e) {
            aU.A.setAutomaticGainControl(e, { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, R.bG)([lv.Ay, ot.A], () => {
                let e = lv.Ay.getInputDeviceId();
                return ot.A.hasAutomaticGainControl(e);
            });
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isAutomaticGainControlSupported() && lv.Ay.isInputProfileCustom());
        },
    }),
    oc = (0, o.sN)(d.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => m.intl.string(m.t.AlybXj),
        setValue: (e) =>
            aU.A.setAttenuation(e, lv.Ay.getAttenuateWhileSpeakingSelf(), lv.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => lv.Ay.getAttenuation(),
    }),
    og = (0, o.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => m.intl.string(m.t["9dHxRY"]),
        useValue: () => (0, R.bG)([lv.Ay], () => lv.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => aU.A.setAttenuation(lv.Ay.getAttenuation(), e, lv.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    om = (0, o.zD)(d.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => m.intl.string(m.t.SMt0Gr),
        useValue: () => (0, R.bG)([lv.Ay], () => lv.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => aU.A.setAttenuation(lv.Ay.getAttenuation(), lv.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    oA = (0, o.FW)(d.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.oSdBvW),
        useSubtitle: () => m.intl.string(m.t["0A/8Rt"]),
        usePredicate: () => (0, R.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.ATTENUATION)),
        buildLayout: () => [oc, og, om],
    });
var oh = i(801644);
let oE = (0, o.zD)(d.X.VOICE_HARDWARE_MUTE_SILENCE_ALERT_SETTING, {
        useTitle: () => m.intl.string(m.t.pZ0vr4),
        useSubtitle: () => m.intl.string(m.t.tVbzoZ),
        useValue: function () {
            return (0, R.bG)([nT.Ay], () => !nT.Ay.disableHardwareMuteSilenceAlert);
        },
        setValue: function (e) {
            (0, a4.A)("hardware_mute_silence_alert_enabled", e, !nT.Ay.disableHardwareMuteSilenceAlert),
                sX.Ay.updatedUnsyncedSettings({ disableHardwareMuteSilenceAlert: !e });
        },
        usePredicate: function () {
            let { enableHardwareSilenceWarning: e } = oh.A.useConfig({ location: "HardwareMuteSilenceAlertSetting" });
            return e;
        },
    }),
    oT = (0, o.zD)(d.X.VOICE_BYPASS_SYSTEM_INPUT_PROCESSING_SETTING, {
        useTitle: () => m.intl.string(m.t.DFPXIG),
        useSubtitle: () => m.intl.string(m.t["UyRX+C"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getBypassSystemInputProcessing());
        },
        setValue: function (e) {
            aU.A.setBypassSystemInputProcessing(e);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.showBypassSystemInputProcessing() && lv.Ay.isInputProfileCustom());
        },
    }),
    ox = (0, o.zD)(d.X.VOICE_SWITCH_CHANNEL_ALERT_SETTING, {
        useTitle: () => m.intl.string(m.t.jrWHD3),
        useSubtitle: () => m.intl.string(m.t.YCCMkJ),
        useValue: function () {
            return (0, R.bG)([nT.Ay], () => !nT.Ay.disableVoiceChannelChangeAlert);
        },
        setValue: function (e) {
            (0, a4.A)("switch_channel_warning_enabled", e, !nT.Ay.disableVoiceChannelChangeAlert),
                sX.Ay.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !e });
        },
    }),
    oS = (0, o.zD)(d.X.ADVANCED_VOICE_ACTIVITY_PROCESSING_SETTING, {
        useTitle: () => m.intl.string(m.t.BbESsg),
        useSubtitle: () => m.intl.string(m.t.LoOB1F),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => {
                let { vadUseKrisp: e } = lv.Ay.getModeOptions();
                return e;
            });
        },
        setValue: function (e) {
            let t = lv.Ay.getMode();
            aU.A.setMode(t, { vadUseKrisp: e });
        },
        useDisabled: function () {
            return (0, R.bG)([lv.Ay], () => {
                let e = lv.Ay.getMode(),
                    t = lv.Ay.getModeOptions().autoThreshold;
                return e === Q.TBI.VOICE_ACTIVITY && t;
            });
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isAdvancedVoiceActivitySupported() && lv.Ay.isInputProfileCustom());
        },
    }),
    op = (0, o.Hn)(d.X.VOICE_AUDIO_SUBSYSTEM_SETTING, {
        useTitle: () => m.intl.string(m.t.wVBHr0),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getAudioSubsystem());
        },
        setValue: function (e) {
            a7(m.intl.string(m.t.uY7AcQ), m.intl.string(m.t.gBqik6), () => aU.A.setAudioSubsystem(e));
        },
        useOptions: function () {
            let {
                legacyAudioSubsystemSupported: e,
                experimentalAudioSubsystemSupported: t,
                automaticAudioSubsystemSupported: i,
            } = (0, R.cf)([lv.Ay], () => ({
                legacyAudioSubsystemSupported: lv.Ay.supports(aj.O5.LEGACY_AUDIO_SUBSYSTEM),
                experimentalAudioSubsystemSupported: lv.Ay.supports(aj.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM),
                automaticAudioSubsystemSupported: lv.Ay.supports(aj.O5.AUTOMATIC_AUDIO_SUBSYSTEM),
            }));
            return N.useMemo(() => {
                let n;
                return (
                    (n = [{ id: aj.rB.STANDARD, value: aj.rB.STANDARD, label: m.intl.string(m.t.dqb2JZ) }]),
                    e && n.push({ id: aj.rB.LEGACY, value: aj.rB.LEGACY, label: m.intl.string(m.t["TYfH+5"]) }),
                    t &&
                        n.push({ id: aj.rB.EXPERIMENTAL, value: aj.rB.EXPERIMENTAL, label: m.intl.string(m.t.liQmtr) }),
                    i && n.push({ id: aj.rB.AUTOMATIC, value: aj.rB.AUTOMATIC, label: m.intl.string(m.t.qNgtO1) }),
                    n
                );
            }, [i, t, e]);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.shouldOfferManualSubsystemSelection());
        },
    }),
    of = (0, o.zD)(d.X.VOICE_QUALITY_OF_SERVICE_SETTING, {
        useTitle: () => m.intl.string(m.t.uancuJ),
        useSubtitle: () => m.intl.string(m.t.I1Eoqq),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getQoS());
        },
        setValue: function (e) {
            aU.A.setQoS(e);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.QOS));
        },
    }),
    oN = (0, o.zD)(d.X.VOICE_SILENCE_WARNING_SETTING, {
        useTitle: () => m.intl.string(m.t["4rsOPQ"]),
        useSubtitle: () => m.intl.string(m.t.jtiiCw),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getEnableSilenceWarning());
        },
        setValue: function (e) {
            aU.A.setSilenceWarning(e);
        },
        usePredicate: function () {
            return ej.isPlatformEmbedded;
        },
    }),
    o_ = (0, o.bd)(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
        useTitle: function (e) {
            return e ? m.intl.string(m.t.KHsSWK) : m.intl.string(m.t.PPDo5V);
        },
        useCollapsedSubtitle: () =>
            ou(d.X.INPUT_PROFILE_VOICE_ADVANCED_ACCORDION, {
                limit: (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom()) ? 3 : 2,
            }),
        buildLayout: () => [od, oS, oT, oN, oE, ox, oA, op, of],
    }),
    oC = (0, o.zD)(d.X.VOICE_ECHO_CANCELLATION_SETTING, {
        useTitle: () => m.intl.string(m.t.iWTwu6),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getEchoCancellation());
        },
        setValue: function (e) {
            aU.A.setEchoCancellation(e, { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO });
        },
        useDisabled: function () {
            return (0, R.bG)([lv.Ay, ot.A], () => {
                let e = lv.Ay.getInputDeviceId();
                return ot.A.hasEchoCancellation(e);
            });
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom());
        },
    });
var oI = i(459838),
    ob = i(451988),
    ov = i(801102),
    oj = i(160671);
let oy = (0, sS.Ld)();
function oO(e) {
    let { isSpeaking: t, className: i, id: n, ariaDescribedBy: s, ariaLabelledBy: l, disabled: r } = e;
    return (0, f.jsx)("div", {
        role: "meter",
        className: eF()(ov.$I, i),
        id: n,
        "aria-describedby": s,
        "aria-labelledby": l,
        "aria-valuenow": t && !r ? 100 : 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": t && !r ? m.intl.string(m.t.haLKZ0) : m.intl.string(m.t.X2hJL7),
        children: (0, f.jsx)("div", { className: eF()(ov.Jx, ov.NU, { [ov.zY]: t && !r, [ov.r9]: r }) }),
    });
}
function oR(e) {
    let { volume: t, id: i, ariaDescribedBy: n, ariaLabelledBy: s, disabled: l } = e,
        { threshold: r, autoThreshold: a } = (0, R.cf)([lv.Ay], () => ({
            threshold: lv.Ay.getModeOptions().threshold,
            autoThreshold: lv.Ay.getModeOptions().autoThreshold,
        })),
        o = (0, R.bG)([lv.Ay], () => lv.Ay.getMode());
    return (0, f.jsx)("section", {
        className: eF()(ov.Mo, ov.jW),
        id: i,
        "aria-describedby": n,
        "aria-labelledby": s,
        children: (0, f.jsx)(i7.A, {
            initialValue: r + 100,
            onValueRender: (e) => `${(-((100 - e) * 1)).toFixed(0)}dB`,
            onValueChange: (e) => {
                var t;
                return (t = -((100 - e) * 1)), void aU.A.setMode(o, { threshold: t, autoThreshold: a });
            },
            barStyles: { background: F.A.unsafe_rawColors.GREEN_360.css },
            fillStyles: { background: F.A.unsafe_rawColors.YELLOW_300.css },
            "aria-labelledby": oy,
            disabled: l,
            children: (0, f.jsxs)("div", {
                className: eF()(ov.NU, ov.TL, ov.Jx, oj.bar),
                children: [
                    (0, f.jsx)("div", { className: eF()(ov.GS, ov.SH), style: { width: l ? 0 : t + 100 + "%" } }),
                    (0, f.jsx)("div", { className: "grow" }),
                ],
            }),
        }),
    });
}
let oL = (0, o.E2)(d.X.VOICE_INPUT_SENSITIVITY_FIELD_SET, {
    useSearchTerms: () => [m.intl.string(m.t["sqUm+k"]), m.intl.string(m.t.I1Zuq0), m.intl.string(m.t.nuFtHH)],
    usePredicate: () => (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom()),
    Component: function () {
        let { autoThreshold: e, disabled: t } = (0, R.cf)([lv.Ay], () => ({
                autoThreshold: lv.Ay.getModeOptions().autoThreshold,
                disabled: lv.Ay.getMode() !== aj.TB.VOICE_ACTIVITY,
            })),
            i = N.useCallback((e) => {
                let t = lv.Ay.getMode(),
                    { threshold: i } = lv.Ay.getModeOptions();
                aU.A.setMode(t, { autoThreshold: e, threshold: i });
            }, []),
            n = (0, R.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.AUTOMATIC_VAD)),
            { volume: s, isSpeaking: l } = (function () {
                let [e, t] = N.useState(-100),
                    [i, n] = N.useState(!1);
                function s(e, i) {
                    t(e), n((i & aj.ME.VOICE) === aj.ME.VOICE);
                }
                return (
                    N.useEffect(() => {
                        let e = new ob.Ep();
                        return (
                            e.start(1e3, () => {
                                lv.Ay.getMediaEngine().on(oI.bg.VoiceActivity, s), e.stop();
                            }),
                            () => {
                                lv.Ay.getMediaEngine().removeListener(oI.bg.VoiceActivity, s), e.stop();
                            }
                        );
                    }, []),
                    { volume: e, isSpeaking: i }
                );
            })(),
            r = (0, R.bG)([lv.Ay], () => lv.Ay.isEnabled()),
            a = N.useMemo(
                () =>
                    !r &&
                    (0, f.jsx)("div", {
                        className: ov.B4,
                        children: (0, f.jsx)(O.w, {
                            type: "warning",
                            children: m.intl.format(m.t["O13I+O"], { onEnableClick: () => aU.A.enable(!0) }),
                        }),
                    }),
                [r],
            ),
            o = N.useMemo(() => (e ? m.intl.string(m.t.JsbzjA) : m.intl.string(m.t.MLmyMY)), [e]),
            u = N.useId(),
            d = N.useId();
        return n
            ? (0, f.jsxs)("fieldset", {
                  "aria-describedby": d,
                  children: [
                      (0, f.jsx)(z.A, { tag: "legend", id: u, children: m.intl.string(m.t.GByLar) }),
                      (0, f.jsx)(z.A, { id: d, children: o }),
                      (0, f.jsxs)(L.B, {
                          direction: "vertical",
                          gap: 8,
                          children: [
                              (0, f.jsx)(D.d, {
                                  disabled: t,
                                  label: m.intl.string(m.t.lY6j47),
                                  description: o,
                                  checked: e,
                                  onChange: i,
                              }),
                              e
                                  ? (0, f.jsx)(oO, {
                                        isSpeaking: l,
                                        className: ov.UJ,
                                        ariaDescribedBy: d,
                                        ariaLabelledBy: u,
                                        disabled: t,
                                    })
                                  : (0, f.jsx)(oR, { volume: s, ariaDescribedBy: d, ariaLabelledBy: u, disabled: t }),
                              a,
                          ],
                      }),
                  ],
              })
            : (0, f.jsxs)(L.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, f.jsx)(sy.D, {
                          label: m.intl.string(m.t["sqUm+k"]),
                          description: o,
                          layout: "vertical",
                          children: (i) =>
                              e
                                  ? (0, f.jsx)(oO, {
                                        isSpeaking: l,
                                        className: ov.UJ,
                                        id: i.controlId,
                                        ariaDescribedBy: i.describedById,
                                        ariaLabelledBy: i.labelId,
                                        disabled: t,
                                    })
                                  : (0, f.jsx)(oR, {
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
var oD = i(366010);
let oP = i(993830),
    oG = i(413142),
    oU = { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO };
function oM() {
    let e = (0, R.bG)([id.A], () => (0, oD.q)(id.A.theme));
    return (0, f.jsx)("img", { src: e ? oP : oG, width: 48, height: 32, alt: "" });
}
let oV = (0, o.E2)(d.X.VOICE_NOISE_SUPPRESSION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.t8Qhib), m.intl.string(m.t.hmfkCi)],
    usePredicate: function () {
        return (0, R.bG)([lv.Ay], () => lv.Ay.isInputProfileCustom() && lv.Ay.isNoiseSuppressionSupported());
    },
    Component: function () {
        let e = N.useCallback((e) => {
                aU.A.setNoiseCancellation("KRISP" === e, oU), aU.A.setNoiseSuppression("STANDARD" === e, oU);
            }, []),
            {
                noiseCancellation: t,
                noiseSuppression: i,
                isNoiseSuppressionSupported: n,
                isNoiseCancellationSupported: s,
            } = (0, R.cf)([lv.Ay], () => ({
                noiseCancellation: lv.Ay.getNoiseCancellation(),
                noiseSuppression: lv.Ay.getNoiseSuppression(),
                isNoiseSuppressionSupported: lv.Ay.isNoiseSuppressionSupported(),
                isNoiseCancellationSupported: lv.Ay.isNoiseCancellationSupported(),
            })),
            l = N.useMemo(() => {
                let e = [];
                return (
                    s && e.push({ id: "krisp", label: m.intl.string(m.t.rdoNzt), value: "KRISP" }),
                    n && e.push({ id: "standard", label: m.intl.string(m.t.qXeYHw), value: "STANDARD" }),
                    e.push({ id: "disabled", label: m.intl.string(m.t.wkYAlz), value: "NONE" }),
                    e
                );
            }, [s, n]),
            r = s
                ? m.intl.format(m.t["1q5aTp"], { helpArticle: to.A.getArticleURL(Q.MVz.NOISE_SUPPRESSION) })
                : m.intl.string(m.t.OWKjw5);
        return (0, f.jsxs)(L.B, {
            direction: "vertical",
            gap: 0,
            children: [
                (0, f.jsx)(lS.l, {
                    label: m.intl.string(m.t.t8Qhib),
                    description: r,
                    layout: "horizontal",
                    value: t ? "KRISP" : i ? "STANDARD" : "NONE",
                    onSelectionChange: e,
                    options: l,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                s && (0, f.jsx)(oM, {}),
            ],
        });
    },
});
var ok = i(934729),
    ow = i(621380);
let oF = !n9.Av;
function oB() {
    return (0, R.bG)([lv.Ay], () => lv.Ay.getMode() === aj.TB.PUSH_TO_TALK);
}
let oz = (0, o.zD)(d.X.VOICE_PUSH_TO_TALK_SETTING, {
    useTitle: function () {
        return n9.Av ? m.intl.string(m.t.tG4Np5) : m.intl.string(m.t.JMyQin);
    },
    useSubtitle: function () {
        let e = (0, R.bG)([lv.Ay], () => lv.Ay.getMode());
        return N.useMemo(() => {
            if (!n9.Av && e === aj.TB.PUSH_TO_TALK)
                return m.intl.format(m.t["VHI4+Y"], { onDownloadClick: () => (0, ok._)("Help Text PTT") });
        }, [e]);
    },
    usePredicate: function () {
        return (0, R.bG)([lv.Ay], () => lv.Ay.getActiveInputProfile() !== ow.m.STUDIO);
    },
    useValue: function () {
        return (0, R.bG)([lv.Ay], () => lv.Ay.getMode() === aj.TB.PUSH_TO_TALK);
    },
    setValue: function (e) {
        var t, n;
        (t = e ? aj.TB.PUSH_TO_TALK : aj.TB.VOICE_ACTIVITY),
            (n = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
            t === aj.TB.PUSH_TO_TALK &&
                oF &&
                (0, C.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([i.e("31910"), i.e("10919")]).then(i.bind(i, 556506));
                    return (t) =>
                        (0, f.jsx)(e, {
                            title: m.intl.string(m.t.Kdt0Gb),
                            confirmText: m.intl.string(m.t["1WjMbC"]),
                            cancelText: m.intl.string(m.t.BddRzS),
                            onConfirm: () => (0, ok._)("PTT Limited Modal"),
                            body: m.intl.string(m.t.NIozvt),
                            ...t,
                        });
                }),
            aU.A.setMode(t, void 0, void 0, { analyticsLocations: n });
    },
    useSearchTerms: () => [m.intl.string(m.t["pS+K2L"]), m.intl.string(m.t.nuFtHH)],
});
var oY = i(371060);
let oX = (0, o.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["pS+K2L"]), m.intl.string(m.t.nuFtHH)],
        usePredicate: oB,
        Component: function () {
            let e = (0, R.bG)([lv.Ay], () => {
                    let { shortcut: e } = lv.Ay.getModeOptions();
                    return e;
                }),
                t = m.intl.format(m.t.HVvn5T, { onClick: () => (0, ey.openUserSettings)(d.X.KEYBINDS_PANEL) });
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t["o+BJQR"]),
                description: t,
                layout: "horizontal-responsive",
                children: (0, f.jsx)("div", {
                    className: oY.e,
                    children: (0, f.jsx)(tL.A, {
                        defaultValue: e,
                        onChange: (e) => aU.A.setMode(Q.TBI.PUSH_TO_TALK, { shortcut: e }),
                    }),
                }),
            });
        },
    }),
    oH = (0, o.sN)(d.X.VOICE_PUSH_TO_TALK_RELEASE_DELAY_SETTING, {
        useTitle: () => m.intl.string(m.t.GCNMM8),
        useSearchTerms: () => [m.intl.string(m.t["pS+K2L"]), m.intl.string(m.t.nuFtHH)],
        setValue: function (e) {
            aU.A.setMode(Q.TBI.PUSH_TO_TALK, { delay: e });
        },
        minValue: 0,
        maxValue: Q.IjB,
        getInitialValue: function () {
            let { delay: e } = lv.Ay.getModeOptions();
            return e;
        },
        onValueRender: function (e) {
            return e >= 1e3 ? ((e /= 1e3), `${e.toFixed(2)}s`) : `${e.toFixed(0)}\u00A0ms`;
        },
        usePredicate: oB,
    }),
    oK = (0, o.Qx)(d.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => m.intl.string(m.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, oi._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [m.intl.string(m.t.nuFtHH), m.intl.string(m.t.VZPR0R), m.intl.string(m.t.cjPbpT)],
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getActiveInputProfile() ?? ow.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aU.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, oi.d)({ location: "InputProfileCategory" });
            return [
                { value: ow.m.VOICE_ISOLATION, name: m.intl.string(m.t.cjPbpT), desc: m.intl.string(m.t.CzhvnE) },
                { value: ow.m.STUDIO, name: m.intl.string(m.t.VZPR0R), desc: m.intl.string(m.t.ZaJksS) },
                { value: ow.m.CUSTOM, name: m.intl.string(m.t["N/PQjv"]), desc: m.intl.string(m.t.SnBmuY) },
            ].filter((t) => {
                let { value: i } = t;
                return e.includes(i);
            });
        },
    }),
    oW = (0, o.zZ)(d.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, R.bG)([ot.A, lv.Ay], () => {
                let e = lv.Ay.getInputDeviceId();
                return (
                    (ot.A.hasEchoCancellation(e) || ot.A.hasNoiseSuppression(e) || ot.A.hasAutomaticGainControl(e)) &&
                    lv.Ay.isInputProfileCustom()
                );
            });
            return N.useMemo(() => {
                if (e)
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => m.intl.string(m.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [oK, oL, oV, oC, oz, oX, oH, o_],
    });
var oZ = i(403581),
    oq = i(983851),
    oQ = i(687021),
    oJ = i(128450),
    o$ = i(796774),
    o0 = i(209932),
    o1 = i(813564),
    o2 = i(984813),
    o3 = i(22231),
    o6 = i(428262),
    o4 = i(792348),
    o5 = i(674168),
    o8 = i(277192),
    o7 = i(805945),
    o9 = i(902460);
function ue(e) {
    let { onSelect: t } = e,
        [i, n] = N.useState(!1),
        s = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        l = o6.Ay.canUseCustomCallSounds(s),
        r = N.useRef(null);
    function a(e) {
        l && (n(!1), t?.(e));
    }
    return (0, f.jsx)(G.Y, {
        targetElementRef: r,
        shouldShow: i,
        position: "left",
        onRequestClose: () => n(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, f.jsx)(iR.l, {
                children: (0, f.jsx)(o8.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: a,
                    gridNotice: l ? null : (0, f.jsx)(o5.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, f.jsx)(o7.dT, {
                ...e,
                ref: r,
                onClick: () => {
                    n(!i);
                },
                text: m.intl.string(m.t.uOe0Az),
                children: (0, f.jsx)(o3.R, { size: "md", color: "currentColor", className: o9.Wo }),
            }),
    });
}
function ut(e) {
    let { sound: t } = e,
        { previewSound: i } = (0, o4.A)(t, null),
        n =
            0 === (0, o1.wH)()
                ? m.intl.string(m.t.OASXjt)
                : m.intl.formatToPlainString(m.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, f.jsx)(o7.dT, {
        onClick: i,
        text: n,
        children: (0, f.jsx)(oq.H, { size: "md", color: "currentColor", className: o9.wg }),
    });
}
function ui(e) {
    let { sound: t, isGlobal: i, onSelect: n } = e,
        s = null != t,
        l = t?.emojiId,
        r = t?.emojiName,
        a = s && (null != r || null != l);
    return (0, f.jsxs)("div", {
        className: o9.D6,
        children: [
            (0, f.jsxs)("div", {
                className: o9.kL,
                children: [
                    a && (0, f.jsx)(sa.A, { emojiId: l, emojiName: r, className: o9.Zg }),
                    (0, f.jsx)(k.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: o9.dj,
                        children:
                            null == t
                                ? m.intl.string(m.t.PoWNfe)
                                : i
                                  ? m.intl.format(m.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, f.jsx)(k.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    s
                        ? (0, f.jsx)(ut, { sound: t })
                        : (0, f.jsx)(oq.H, { size: "md", color: "currentColor", className: o9.Gk }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: o9.kL,
                children: [
                    (0, f.jsx)(ue, { onSelect: n }),
                    s &&
                        !i &&
                        (0, f.jsx)(o7.dT, {
                            onClick: () => n(null),
                            text: m.intl.string(m.t.jmtcGA),
                            children: (0, f.jsx)(lf.u, {
                                size: "md",
                                color: F.A.unsafe_rawColors.RED_400.css,
                                className: o9.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
var un = i(617617);
i(980504);
var us = i(384863);
function ul(e) {
    return (0, R.bG)([o0.A], () => {
        if (null == e) return null;
        let { guildId: t, soundId: i } = e;
        return o0.A.getSound("0" === t ? "0" : t, i);
    });
}
function ur(e) {
    let { guildId: t } = e,
        i = (0, R.bG)([un.A], () => un.A.settings.guilds?.guilds?.[t]?.joinSound),
        n = ul(i);
    if (null == i || null == n) return null;
    let { emojiId: s, emojiName: l } = n,
        r = null != s || null != l;
    return (0, f.jsxs)("div", {
        className: us.Io,
        children: [
            r
                ? (0, f.jsx)(sa.A, { emojiId: s, emojiName: l, className: us.nW })
                : (0, f.jsx)(oq.H, { size: "md", color: "currentColor", className: us.nW }),
            (0, f.jsx)(k.E, { className: us.dK, variant: "text-xs/medium", children: n.name }),
        ],
    });
}
let ua = (0, o.E2)(d.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.nzUc3B)],
    Component: function () {
        let { analyticsLocations: e } = (0, nU.Ay)(),
            [t, i] = N.useState("0"),
            n = (0, o2.mz)(t),
            s = ul(n),
            l = n?.type === o2.PP.GLOBAL,
            r = (0, R.bG)([o0.A], () => o0.A.hasFetchedAllSounds()) && null != n && null == s;
        N.useEffect(() => {
            r && (0, o1.ND)({ location: e });
        }, [r, e]),
            N.useEffect(() => {
                (0, o$.E7)();
            }, []);
        let a = N.useCallback((e, t) => {
            let { inDropdown: i } = t;
            return null == e ? null : i ? (0, f.jsx)(ur, { guildId: e.value }) : null;
        }, []);
        return (0, f.jsxs)(io.n, {
            label: m.intl.string(m.t.nzUc3B),
            description: m.intl.format(m.t.u9RWmv, { helpdeskArticle: to.A.getArticleURL(Q.MVz.SOUNDBOARD) }),
            children: [
                (0, f.jsx)(oQ.A, {
                    guildId: t,
                    className: us.Dt,
                    globalOption: { label: m.intl.string(m.t["CpEUP/"]), value: "0" },
                    onChange: (e) => {
                        i(null == e ? "0" : e.id);
                    },
                    renderOptionSuffix: a,
                    hideDivider: !0,
                }),
                (0, f.jsxs)(oJ.A, {
                    title: m.intl.format(m.t.I2TsYN, {
                        nitroWheelHook: () => (0, f.jsx)(oZ.t, { size: "md", color: "currentColor", className: us.ax }),
                    }),
                    children: [
                        (0, f.jsx)(ui, {
                            sound: s,
                            isGlobal: l,
                            onSelect: (i) => {
                                null == i ? (0, o1.Dv)(t, e) : (0, o1.un)(t, i, e);
                            },
                        }),
                        r &&
                            (0, f.jsx)(ta.p, {
                                className: us.lm,
                                messageType: ta.Y.WARNING,
                                children: m.intl.string(m.t.WkPsFR),
                            }),
                    ],
                }),
            ],
        });
    },
});
var uo = i(824744);
let uu = (0, o.sN)(d.X.SOUNDBOARD_VOLUME_SETTING, {
    useTitle: () => m.intl.string(m.t.kbFsAD),
    useSubtitle: () => m.intl.format(m.t.BPbGq7, { helpCenterArticle: to.A.getArticleURL(Q.MVz.SOUNDBOARD) }),
    setValue: function (e) {
        let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
            i = (0, uo.w)(e);
        (0, o$.iy)(i, t);
    },
    minValue: 0,
    maxValue: 100,
    getInitialValue: function () {
        let e = (0, o1.wH)();
        return (0, uo.M)(e);
    },
    onValueRender: function (e) {
        return `${e.toFixed(0)}%`;
    },
});
var ud = i(864145);
let uc = (0, o.sN)(d.X.SOUNDMOJI_VOLUME_SETTING, {
        useTitle: () => m.intl.string(m.t["2JbvKw"]),
        useSubtitle: () => m.intl.string(m.t.INenzY),
        setValue: function (e) {
            let t = (0, uo.w)(e);
            g.HO.updateSetting(t);
        },
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = g.HO.getSetting();
            return (0, uo.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        usePredicate: function () {
            return (0, ud.X)({ location: "SoundmojiVolumeSetting" });
        },
    }),
    ug = (0, o.zZ)(d.X.SOUNDBOARD_CATEGORY, {
        useTitle: () => m.intl.string(m.t.ABjMWI),
        buildLayout: () => [uu, uc, ua],
    });
var um = i(803224),
    uA = i(552122);
let uh = (0, o.E2)(d.X.SOUNDS_HOLIDAY_NOTICE, {
        useSearchTerms: () => [m.intl.string(m.t.fgSHf8)],
        usePredicate: () => null != uA.A.useHolidaySoundpack(),
        Component: () =>
            (0, f.jsx)(k.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: m.intl.format(m.t.Eup6Wv, {
                    onClick: () => (0, ey.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                }),
            }),
    }),
    uE = (0, o.AK)(d.X.VOICE_AND_VIDEO_TO_NOTIFICATION_SOUNDS_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t.eyGEE4),
        useSearchTerms: () => [m.intl.string(m.t.eyGEE4)],
        destinationKey: d.X.NOTIFICATIONS_SOUNDS_CATEGORY,
    }),
    uT = (0, o.gN)(d.X.VOICE_AND_VIDEO_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [uE] });
var ux = i(264686);
let uS = (0, nf.D)(() => ({ currentPlayingSound: null }));
function up() {
    let e = uS.getField("currentPlayingSound");
    e?.stop(), uS.setState({ currentPlayingSound: null });
}
function uf(e) {
    let t = uS.getField("currentPlayingSound");
    t?.stop();
    let i = (0, rp.Ak)(e);
    uS.setState({ currentPlayingSound: i });
}
function uN(e) {
    return (0, o.zD)(`${d.X.SOUNDS_LIST_ITEM_PREFIX}${e.sound}`, {
        useTitle: e.useTitle,
        useSubtitle: () => m.intl.format(m.t.OOiGCM, { onClick: () => uf(e.sound) }),
        useValue: () => {
            let t = (0, R.bG)([um.A], () => um.A.isSoundDisabled(e.sound)),
                i = e.useDisabled?.();
            return !t && !i;
        },
        setValue: (t) => {
            let i = um.A.getDisabledSounds().filter((t) => t !== e.sound);
            t || i.push(e.sound), ux.default.setDisabledSounds(i);
        },
        useDisabled: () => {
            let t = e.useDisabled?.(),
                i = (0, R.bG)([um.A], () => um.A.getDisableAllSounds());
            return t || i;
        },
        useDisabledMessage: e.useDisabledMessage,
    });
}
let u_ = [
        { useTitle: () => m.intl.string(m.t.hK51Yg), sound: "deafen" },
        { useTitle: () => m.intl.string(m.t.XiejaJ), sound: "undeafen" },
        { useTitle: () => m.intl.string(m.t.w4m945), sound: "mute" },
        { useTitle: () => m.intl.string(m.t.YqAjXy), sound: "unmute" },
        { useTitle: () => m.intl.string(m.t.JoTq8n), sound: "camera_on" },
        { useTitle: () => m.intl.string(m.t["8P6tQ6"]), sound: "camera_off" },
        { useTitle: () => m.intl.string(m.t["juL9/L"]), sound: "disconnect" },
        { useTitle: () => m.intl.string(m.t.x98vQq), sound: "ptt_start" },
        { useTitle: () => m.intl.string(m.t["1HjRqC"]), sound: "ptt_stop" },
        { useTitle: () => m.intl.string(m.t["9JB1Ck"]), sound: "user_join" },
        { useTitle: () => m.intl.string(m.t.KUBBNt), sound: "user_leave" },
        { useTitle: () => m.intl.string(m.t.EZjqUT), sound: "user_moved" },
        { useTitle: () => m.intl.string(m.t.LnNlQh), sound: "call_calling" },
        { useTitle: () => m.intl.string(m.t.Nd8P5y), sound: "stream_started" },
        { useTitle: () => m.intl.string(m.t["9bYj+G"]), sound: "stream_ended" },
        { useTitle: () => m.intl.string(m.t.KccUI1), sound: "stream_user_joined" },
        { useTitle: () => m.intl.string(m.t.dsjkiN), sound: "stream_user_left" },
        { useTitle: () => m.intl.string(m.t.nFOcf9), sound: "activity_launch" },
        { useTitle: () => m.intl.string(m.t["a6lw/u"]), sound: "activity_end" },
        { useTitle: () => m.intl.string(m.t.KaFxrY), sound: "activity_user_join" },
        { useTitle: () => m.intl.string(m.t.S14z9n), sound: "activity_user_left" },
        { useTitle: () => m.intl.string(m.t.CP3DC3), sound: "reconnect" },
    ],
    uC = (0, o.D1)(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, {
        collapseAfter: 4,
        useCollapsibleTitle: (e, t) =>
            e
                ? m.intl.formatToPlainString(m.t["0JYT98"], { count: t })
                : m.intl.formatToPlainString(m.t.ji1uNt, { count: t }),
        useCollapsedSubtitle: () => ou(d.X.VOICE_AND_VIDEO_SOUNDS_LIST, { limit: 3 }),
        initialize: function () {
            return () => {
                up();
            };
        },
        buildLayout: () => u_.map((e) => uN(e)),
    }),
    uI = (0, o.zZ)(d.X.SOUNDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.MKWyKc),
        useInlineNotice: function () {
            let e = (0, R.bG)([um.A], () => um.A.getDisableAllSounds());
            return N.useMemo(() => {
                if (e)
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () =>
                            m.intl.format(m.t.fRvixS, {
                                onClick: () => (0, ey.openUserSettings)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY),
                            }),
                    };
            }, [e]);
        },
        buildLayout: () => [uC, uh, uT],
    }),
    ub = (0, o.zD)(d.X.STREAMING_SHOW_STREAM_PREVIEWS, {
        useTitle: () => m.intl.string(m.t.e3Zz3F),
        useSubtitle: () => m.intl.string(m.t.RztTjP),
        useValue: function () {
            return !g.uh.useSetting();
        },
        setValue: function (e) {
            (0, a4.A)("stream_previews_disabled", !e, g.uh.getSetting(), [eV.A.USER_SETTINGS_VOICE_AND_VIDEO]),
                g.uh.updateSetting(!e);
        },
    }),
    uv = (0, o.zD)(d.X.STREAMING_ADVANCED_SCREENSHARE, {
        useTitle: () => m.intl.string(m.t.GmWk2E),
        useSearchTerms: () => [m.intl.string(m.t["Fj/xn1"])],
        useSubtitle: () => m.intl.string(m.t["Fj/xn1"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getVideoHook());
        },
        setValue: aU.A.setVideoHook,
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.supportsVideoHook());
        },
    }),
    uj = (0, o.zD)(d.X.STREAMING_EXPERIMENTAL_SOUNDSHARE, {
        useTitle: () => m.intl.string(m.t["4I0qzZ"]),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getExperimentalSoundshare());
        },
        setValue: aU.A.setExperimentalSoundshare,
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => {
                let e = lv.Ay.supportsExperimentalSoundshare(),
                    t = lv.Ay.supportsHookSoundshare();
                return e && t;
            });
        },
    }),
    uy = (0, o.zD)(d.X.STREAMING_STREAM_ATTENUATION, {
        useTitle: () => m.intl.string(m.t["/jwMtn"]),
        useSubtitle: () => m.intl.string(m.t.zlA23F),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getSidechainCompression());
        },
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aU.A.setSidechainCompression(e, { analyticsLocations: t });
        },
        usePredicate: function () {
            return lv.Ay.supports(aj.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uO = (0, o.sN)(d.X.STREAMING_STREAM_ATTENUATION_STRENGTH, {
        useTitle: () => m.intl.string(m.t.fhEzfj),
        setValue: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO];
            aU.A.setSidechainCompressionStrength(e, { analyticsLocations: t });
        },
        minValue: 1,
        maxValue: 100,
        getInitialValue: lv.Ay.getSidechainCompressionStrength,
        usePredicate: function () {
            return lv.Ay.supports(aj.O5.SIDECHAIN_COMPRESSION);
        },
    }),
    uR = (0, o.zD)(d.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
        useTitle: () => m.intl.string(m.t.lt8rRx),
        useSubtitle: () => m.intl.string(m.t.ie1mgY),
        useValue: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.getUseSystemScreensharePicker());
        },
        setValue: function (e) {
            (0, n9.cX)() && e
                ? (0, se.A)({
                      title: m.intl.string(m.t["9jf31O"]),
                      subtitle: m.intl.string(m.t.uBd6JW),
                      variant: "primary",
                      onConfirm: () => {
                          aU.A.setUseSystemScreensharePicker(e), s2.A.app.relaunch();
                      },
                      confirmText: m.intl.string(m.t.BddRzS),
                  })
                : aU.A.setUseSystemScreensharePicker(e);
        },
        usePredicate: function () {
            return (0, R.bG)([lv.Ay], () => lv.Ay.supportsSystemScreensharePicker() && (0, n9.cX)());
        },
    }),
    uL = (0, o.bd)(d.X.STREAMING_ADVANCED_ACCORDION, {
        useTitle: (e) => (e ? m.intl.string(m.t.qrMyvm) : m.intl.string(m.t.LEtTNl)),
        useCollapsedSubtitle: () => ou(d.X.STREAMING_ADVANCED_ACCORDION),
        buildLayout: () => [uy, uO, uR, uj, uv],
    }),
    uD = (0, o.zZ)(d.X.STREAMING_CATEGORY, { useTitle: () => m.intl.string(m.t.KDdjou), buildLayout: () => [ub, uL] }),
    uP = (0, o.E2)(d.X.VOICE_MICROPHONE_INPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(aC.U, {
                label: m.intl.string(m.t.UTM8VP),
                deviceType: aj.oh.AUDIO_INPUT,
                location: "UserSettingsVoiceVideo",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uG = (0, o.E2)(d.X.VOICE_SPEAKER_OUTPUT_SELECT, {
        useSearchTerms: () => [],
        Component: function () {
            return (0, f.jsx)(aC.U, {
                label: m.intl.string(m.t.xuYQ0n),
                deviceType: aj.oh.AUDIO_OUTPUT,
                location: "UserSettingsDevices",
                hideDeviceTypeIcon: !0,
            });
        },
    }),
    uU = (0, o.zC)(d.X.VOICE_INPUT_OUTPUT_DEVICE_SPLIT, { buildLayout: () => [uP, uG] }),
    uM = (0, o.sN)(d.X.VOICE_INPUT_VOLUME_SETTING, {
        useTitle: () => m.intl.string(m.t.Rtsr6w),
        minValue: 0,
        maxValue: 100,
        getInitialValue: function () {
            let e = lv.Ay.getInputVolume();
            return (0, uo.M)(e);
        },
        asValueChanges: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uo.w)(e);
            aU.A.setInputVolume(i, { analyticsLocations: t });
        },
    }),
    uV = (0, o.sN)(d.X.VOICE_OUTPUT_VOLUME_SETTING, {
        useTitle: () => m.intl.string(m.t.aUJ062),
        minValue: 0,
        maxValue: 200,
        getInitialValue: function () {
            let e = lv.Ay.getOutputVolume();
            return (0, uo.M)(e);
        },
        onValueRender: function (e) {
            return `${e.toFixed(0)}%`;
        },
        asValueChanges: function (e) {
            let t = [eV.A.USER_SETTINGS_VOICE_AND_VIDEO],
                i = (0, uo.w)(e);
            aU.A.setOutputVolume(i, { analyticsLocations: t });
        },
    }),
    uk = (0, o.zC)(d.X.VOICE_INPUT_OUTPUT_VOLUME_SPLIT, { buildLayout: () => [uM, uV] });
var uw = i(702841),
    uF = i(349288),
    uB = i(152567),
    uz = i(593290);
let uY = `${to.A.getArticleURL(Q.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`,
    uX = (0, o.E2)(d.X.VOICE_MICROPHONE_TEST_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.nuFtHH)],
        usePredicate: function () {
            return (0, uw.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.LOOPBACK));
        },
        Component: function () {
            return (0, uw.bG)([lv.Ay], () => lv.Ay.supports(aj.O5.LOOPBACK))
                ? (0, f.jsx)(uB.A, {
                      size: "md",
                      notchBackground: uB.V.GRAY,
                      captionVoice: m.intl.string(m.t.bp3JOV),
                      captionNoVoice: (0, f.jsxs)(f.Fragment, {
                          children: [
                              (0, f.jsx)(k.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-default",
                                  children: m.intl.string(m.t.bgn75v),
                              }),
                              m.intl.string(m.t["MA+OZh"]),
                              (0, f.jsx)(uF.Anchor, {
                                  className: uz.X,
                                  href: to.A.getArticleURL(Q.MVz.NO_INPUT_DETECTED),
                                  children: m.intl.string(m.t.RYKKox),
                              }),
                          ],
                      }),
                      helpText: m.intl.format(m.t["V+B3FH"], { guideURL: uY }),
                      buttonTest: m.intl.string(m.t.gyljWE),
                      buttonStop: m.intl.string(m.t.I6OnJ3),
                      buttonVariant: "primary",
                      location: { page: Q.liQ.USER_SETTINGS, section: Q.JJy.SETTINGS_VOICE_AND_VIDEO },
                  })
                : null;
        },
    }),
    uH = ej.isWindows() ? ["BTHENUM", "BTHHFENUM"] : [];
function uK(e) {
    let { inputAndOutputAreBluetooth: t, canPromptSystemServiceInstallForVoice: i } = e;
    return (0, f.jsxs)(L.B, {
        children: [
            i && (0, f.jsx)(lR, { sourcePage: "voice" }),
            t && (0, f.jsx)(si.A, { look: si.k.WARNING, children: m.intl.string(m.t.Ioz3gx) }),
        ],
    });
}
let uW = (0, o.zZ)(d.X.VOICE_CATEGORY, {
        useTitle: () => m.intl.string(m.t.K3lovD),
        useSearchTerms: () => [
            m.intl.string(m.t.hHMYbb),
            m.intl.string(m.t.nuFtHH),
            m.intl.string(m.t.dl18zb),
            m.intl.string(m.t["3182VD"]),
            m.intl.string(m.t["DGq/PR"]),
            m.intl.string(m.t.eATD2B),
            m.intl.string(m.t.Rtsr6w),
            m.intl.string(m.t.aUJ062),
        ],
        useInlineNotice: function () {
            let e = lO("voice"),
                t = (0, aI.x5)(aj.oh.AUDIO_INPUT),
                i = (0, aI.x5)(aj.oh.AUDIO_OUTPUT),
                n = N.useMemo(() => {
                    let e = uH.some((e) => t?.hardwareId?.startsWith(e)),
                        n = uH.some((e) => i?.hardwareId?.startsWith(e));
                    return e && n && t?.containerId != null && t.containerId === i?.containerId;
                }, [t, i]);
            return N.useMemo(
                () =>
                    e.canPrompt || n
                        ? {
                              type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM,
                              notice: () =>
                                  (0, f.jsx)(uK, {
                                      inputAndOutputAreBluetooth: n,
                                      canPromptSystemServiceInstallForVoice: e.canPrompt,
                                  }),
                          }
                        : null,
                [e.canPrompt, n],
            );
        },
        buildLayout: () => [uU, uk, uX],
    }),
    uZ = (0, o.t_)(d.X.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => m.intl.string(m.t.B1fFpf),
        buildLayout: () => [uW, oW, aD, uD, uI, ug, oe],
    }),
    uq = (0, o.i4)(d.X.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.B1fFpf),
        usePredicate: () => lv.Ay.isSupported(),
        icon: aA.c,
        useMenu: ah.A,
        buildLayout: () => [uZ],
    }),
    uQ = (0, o.zZ)(d.X.WINDOWS_CATEGORY, {
        buildLayout: () => [ra, r7, ro, rg],
        initialize: () => {
            rr();
        },
    }),
    uJ = (0, o.t_)(d.X.WINDOWS_PANEL, { useTitle: () => m.intl.string(m.t.ZkDZov), buildLayout: () => [uQ] }),
    u$ = (0, o.i4)(d.X.WINDOWS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.ZkDZov),
        icon: e3.k,
        usePredicate: () => ej.isPlatformEmbedded && (0, ej.isWindows)(),
        buildLayout: () => [uJ],
    }),
    u0 = (0, o.WI)(d.X.APP_SECTION, {
        useTitle: () => m.intl.string(m.t.gcyH1J),
        buildLayout: function () {
            let e = (0, u.SB)("AppSection_buildLayout");
            return [uq, lT, n1, r5, e ? am : re, rs, e ? null : u$, e ? null : rh].filter(t4.Vq);
        },
    });
var u1 = i(360669),
    u2 = i(974544),
    u3 = i(546605),
    u6 = i(423764),
    u4 = i(289873),
    u5 = i(465323),
    u8 = i(194261),
    u7 = i(391048),
    u9 = i(753390),
    de = i(99696),
    dt = i(202613),
    di = i(615405),
    dn = i(580630),
    ds = i(83617),
    dl = i(935208),
    dr = i(607399),
    da = i(150934),
    du = i(256006),
    dd = i(198970),
    dc = i(71532);
let dg = /[^0-9/]/g,
    dm = /[^0-9]/g;
class dA extends N.PureComponent {
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
                ((n = (i = e.replace(dg, "").split("/"))[0]),
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
            ? (u = u.replace(dm, ""))
            : u === r && e.includes("/") && !r.includes("/") && (u += "/"),
            u.length > e.length && (d += u.length - e.length),
            (this.selectionStart = d),
            null != a && a(u, t);
    };
    render() {
        return (0, f.jsx)(lD.k, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef,
        });
    }
}
var dh = i(832208),
    dE = i(536439);
let dT = [
        {
            fields: [
                {
                    expirationDate: {
                        name: "expirationDate",
                        id: (0, sS.Ld)(),
                        title: () => m.intl.string(m.t["CeBa/4"]),
                        autoComplete: "cc-exp",
                        placeholder: () => m.intl.string(m.t.xeEWQ6),
                        pattern: "\\d*",
                        getClassNameForLayout: () => dE.ep,
                        renderInput: (e) => (0, f.jsx)(dA, { ...e }),
                    },
                }.expirationDate,
            ],
        },
    ],
    dx = function (e) {
        let { onCardInfoChange: t, className: i, expirationDate: n, error: s } = e,
            [l, r] = N.useState(!1),
            [a, o] = N.useState(null),
            [u, d] = N.useState(n);
        return (
            N.useEffect(() => {
                t({ expirationDate: u }, null === a);
            }, [u, t, a]),
            (0, f.jsx)(dh.A, {
                className: i,
                form: dT,
                values: { expirationDate: u },
                errors: null != a ? { expirationDate: a } : {},
                formError: s,
                onFieldChange: (e) => {
                    l || "" === e || r(!0),
                        (l && "" === e) || !(0, dc.So)(e) ? o(m.intl.string(m.t["9/zZdl"])) : o(null),
                        d(e);
                },
            })
        );
    };
var dS = i(219887),
    dp = i(276589);
let df = "isDefault";
class dN extends N.PureComponent {
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
            expiresMonth: t instanceof dt.YS ? t.expiresMonth : void 0,
            expiresYear: t instanceof dt.YS ? t.expiresYear : void 0,
            billingAddressValid: !1,
            isDefault: i,
            expirationValid: !0,
            dirtyFields: {},
        };
    }
    componentWillUnmount() {
        n6.h.wait(() => {
            (0, u9.ey)(), (0, u9.tc)();
        });
    }
    handleSubmit = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(t4.Vq).length))
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
                ? (0, f.jsx)("div", {
                      className: dp.zc,
                      children: (0, f.jsx)(O.w, { type: "critical", children: t.message }),
                  })
                : null
            : (0, f.jsx)("div", {
                  className: dp.zc,
                  children: (0, f.jsx)(O.w, { type: "critical", children: e.message }),
              });
    }
    renderBillingAddressSection() {
        let { billingAddress: e } = this.state,
            { updateError: t, paymentSource: i } = this.props,
            n = (0, du.g)(i);
        return (0, f.jsxs)("div", {
            className: dp.yV,
            children: [
                (0, f.jsx)(k.E, {
                    className: dp.bV,
                    variant: "text-sm/normal",
                    children: m.intl.string(m.t["50Auo2"]),
                }),
                (0, f.jsx)(dd.Ay, {
                    ...e,
                    mode: dd.Ay.Modes.EDIT,
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
        return (0, f.jsxs)("div", {
            className: dp.yV,
            children: [
                (0, f.jsx)(k.E, { className: dp.bV, variant: "text-sm/normal", children: m.intl.string(m.t.Fo2YP7) }),
                (0, f.jsx)(dx, {
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
        return (0, f.jsx)("div", {
            className: dp.AU,
            children: (0, f.jsxs)(L.B, {
                direction: "horizontal",
                justify: "space-between",
                children: [
                    (0, f.jsx)(aB.e, {
                        children: (0, f.jsxs)("div", {
                            className: dp.lH,
                            children: [
                                i
                                    ? (0, f.jsx)(e1.m, {
                                          text: m.intl.string(m.t["v6/z28"]),
                                          children: (0, f.jsx)("div", { "aria-hidden": !0, className: dp.dm }),
                                      })
                                    : null,
                                (0, f.jsx)(eE.$, {
                                    type: "button",
                                    disabled: i || e,
                                    loading: t,
                                    onClick: this.handleDelete,
                                    variant: "critical-secondary",
                                    size: dr.Fr ? "sm" : "md",
                                    text: dr.Fr ? m.intl.string(m.t.oyYWHE) : m.intl.string(m.t.yk5qfb),
                                }),
                            ],
                        }),
                    }),
                    (0, f.jsxs)(aB.e, {
                        children: [
                            (0, f.jsx)(eE.$, {
                                type: "button",
                                disabled: e || t,
                                onClick: this.handleCancel,
                                variant: "secondary",
                                size: dr.Fr ? "sm" : "md",
                                text: m.intl.string(m.t["ETE/oC"]),
                            }),
                            (0, f.jsx)(eE.$, {
                                loading: e,
                                disabled: !n || t || !s,
                                type: "submit",
                                variant: "active",
                                size: dr.Fr ? "sm" : "md",
                                text: m.intl.string(m.t["R3BPH+"]),
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
            r = e instanceof dt.SJ;
        return (0, f.jsx)(ea.Z, {
            editable: !0,
            className: eF()(dp.Nr, n),
            children: (0, f.jsxs)("form", {
                onSubmit: this.handleSubmit,
                noValidate: !0,
                children: [
                    this.renderError(),
                    (0, f.jsxs)("div", {
                        className: dp.__invalid_paymentSection,
                        children: [
                            (0, f.jsx)(dS.A, {
                                paymentSource: e,
                                isDefault: t,
                                isForSubscription: s,
                                locale: i,
                                showLabels: !0,
                                showPaymentSourceIcon: !0,
                            }),
                            e.invalid
                                ? (0, f.jsx)("div", { className: dp.Um, children: m.intl.string(m.t["3R0U0b"]) })
                                : null,
                            (0, f.jsx)("div", {
                                className: dp.Sv,
                                children: r
                                    ? m.intl.format(m.t.w9WkBl, { paypalURL: "https://www.paypal.com" })
                                    : m.intl.string(m.t.VXndyr),
                            }),
                        ],
                    }),
                    this.renderCardExpirationSection(),
                    this.renderBillingAddressSection(),
                    (0, f.jsx)("div", {
                        className: dp.D5,
                        children: (0, f.jsx)(da.S, {
                            value: df,
                            checked: l,
                            onChange: (e) => this.handleFieldChange(e, df),
                            label: m.intl.string(m.t.nag9Og),
                            labelType: "secondary",
                        }),
                    }),
                    (0, f.jsx)(eT.c, {}),
                    this.renderActions(),
                ],
            }),
        });
    }
}
let d_ = R.Ay.connectStores([di.A], () => ({ updateError: di.A.editSourceError, removeError: di.A.removeSourceError }))(
    dN,
);
var dC = i(776409),
    dI = i(95322);
class db extends N.PureComponent {
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
            ? (0, f.jsx)(d_, {
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
            : (0, f.jsxs)(f.Fragment, {
                  children: [
                      n ? null : (0, f.jsx)(eT.c, { className: dI.__invalid_sourceDivider }),
                      (0, f.jsxs)("div", {
                          className: dI.Yb,
                          children: [
                              (0, f.jsx)(dS.A, {
                                  paymentSource: e,
                                  isDefault: t,
                                  isForSubscription: s,
                                  locale: l,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0,
                              }),
                              (0, f.jsx)(eE.$, {
                                  variant: "secondary",
                                  onClick: this.handleEditClick,
                                  size: "sm",
                                  text: m.intl.string(m.t.bt75uw),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let dv = N.memo(function (e) {
    let { paymentSource: t, hideDivider: i, isForSubscription: n, locale: s, onRedeemClick: l } = e,
        [r, a] = N.useState(null),
        o = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.storeCountry?.country ?? null),
        u = (0, R.bG)([di.A], () => di.A.ipCountryCode),
        d = N.useMemo(() => (0, u5.TW)(`-${o ?? u ?? "US"}`), [o, u]);
    return (
        N.useEffect(() => {
            void 0 === t
                ? a({ amount: 0, currency: d })
                : u9.YP(t.id).then((e) => {
                      a(e);
                  });
        }, [t, d]),
        (0, f.jsxs)(f.Fragment, {
            children: [
                i ? null : (0, f.jsx)(eT.c, { className: dI.__invalid_sourceDivider }),
                (0, f.jsxs)("div", {
                    className: dI.Yb,
                    children: [
                        void 0 !== t
                            ? (0, f.jsx)(dS.A, {
                                  paymentSource: t,
                                  isDefault: !1,
                                  isForSubscription: n,
                                  locale: s,
                                  showSubtext: !1,
                                  showLabels: !1,
                                  showPaymentSourceIcon: !0,
                              })
                            : (0, f.jsx)(k.E, {
                                  variant: "text-sm/medium",
                                  children: m.intl.string(dC.default["/FQWfA"]),
                              }),
                        (0, f.jsxs)("div", {
                            className: dI.zy,
                            children: [
                                (0, f.jsx)("div", {
                                    className: dI.Tq,
                                    children:
                                        null == r
                                            ? (0, f.jsx)(u4.y, { type: u4.y.Type.SPINNING_CIRCLE })
                                            : (0, f.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  children: (() => {
                                                      let { amount: e, currency: t } = r ?? {},
                                                          i = t ?? d,
                                                          n = String(i).toUpperCase(),
                                                          s = (0, dn.$g)(e ?? 0, i, {
                                                              currencyDisplay: "narrowSymbol",
                                                          });
                                                      return `${n} ${s}`;
                                                  })(),
                                              }),
                                }),
                                (0, f.jsx)(eE.$, {
                                    variant: "secondary",
                                    onClick: l,
                                    size: "sm",
                                    text: m.intl.string(dC.default.iBFPMf),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
});
class dj extends N.PureComponent {
    state = { editingPayment: null };
    handleEditClick = async (e) => {
        try {
            await u9.Gr(e), this.setState({ editingPayment: e });
        } catch (e) {}
    };
    handleCancel = () => {
        this.setState({ editingPayment: null });
    };
    handleDelete = async (e) => {
        try {
            await u9.JQ(e), this.setState({ editingPayment: null });
        } catch (e) {}
    };
    handleSubmit = async (e, t) => {
        if (null != e)
            try {
                await u9.Ps(e, t), this.setState({ editingPayment: null });
            } catch (e) {}
    };
    handlePaymentSourceAdded = async (e) => {
        await (0, ds.c_)(e.id);
    };
    handleAddPaymentMethod = () => {
        (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 362111));
                return (t) => (0, f.jsx)(e, { ...t, onAddPaymentSource: this.handlePaymentSourceAdded });
            },
            {
                onCloseCallback: () => {
                    (0, u7.ET)();
                },
                onCloseRequest: Q.tEg,
            },
        );
    };
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, f.jsxs)("div", {
            className: dI.qr,
            children: [
                0 === Object.keys(e).length
                    ? (0, f.jsxs)("div", {
                          className: dI.z8,
                          children: [
                              (0, f.jsx)(k.E, { variant: "text-sm/normal", children: m.intl.string(m.t.aRHpAB) }),
                              (0, f.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  className: dI.Sv,
                                  children: m.intl.string(m.t.o9bOIl),
                              }),
                          ],
                      })
                    : null,
                (0, f.jsx)(eE.$, { onClick: this.handleAddPaymentMethod, text: m.intl.string(m.t.CpOiEO) }),
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
            u = eL()
                .values(n)
                .sort((e, t) => (e.id === i ? -1 : t.id === i ? 1 : dl.default.compare(e.id, t.id))),
            d = u.filter((e) => !(e instanceof dt.LQ)),
            c = u.filter((e) => e instanceof dt.LQ),
            g = this.state.editingPayment,
            A = d.findIndex((e) => e.id === g),
            h = d.map((e, t) =>
                (0, f.jsx)(
                    db,
                    {
                        locale: s,
                        paymentSource: e,
                        isDefault: i === e.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: e.id === a,
                        hideDivider: 0 === t || A === t - 1,
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
                          (0, f.jsx)(
                              dv,
                              {
                                  paymentSource: e,
                                  hideDivider: 0 === d.length || A === d.length - 1,
                                  isForSubscription: e.id === a,
                                  locale: s,
                                  onRedeemClick: () =>
                                      (0, de.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                              },
                              e.id,
                          ),
                      )
                    : (0, f.jsx)(dv, {
                          hideDivider: 0 === d.length || A === d.length - 1,
                          isForSubscription: !1,
                          locale: s,
                          onRedeemClick: () =>
                              (0, de.HF)({ withRedemptionSuccessModal: !0, source: "desktop_billing_page" }),
                      })),
            (0, f.jsxs)(f.Fragment, {
                children: [
                    t
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsxs)(eh.D, {
                                      variant: "heading-lg/semibold",
                                      children: [
                                          (0, f.jsx)(u8.X, { size: "sm", className: dI.hz }),
                                          " ",
                                          m.intl.string(m.t.W26xGQ),
                                      ],
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: m.intl.string(m.t.h6V3uK),
                                  }),
                              ],
                          })
                        : null,
                    h,
                    o && e,
                    A !== d.length - 1 || (o && c.length > 0) ? (0, f.jsx)(eT.c, {}) : null,
                    this.renderFooter(),
                ],
            })
        );
    }
}
var dy = i(459357),
    dO = i(295405),
    dR = i(166403),
    dL = i(773669),
    dD = i(589764);
function dP() {
    let e = (0, u3.vg)("PaymentMethodsHeader"),
        t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.storeCountry);
    return e && t?.country != null ? { country: t.country, countryName: (0, u6.Gw)(t.country) } : null;
}
let dG = (0, o.E2)(d.X.BILLING_PAYMENT_METHODS, {
        Component: function (e) {
            let { showHeader: t = !1 } = e,
                i = (0, R.bG)([di.A], () => di.A.isSyncing),
                n = (0, R.bG)([dO.A], () => dO.A.paymentSources),
                s = (0, R.bG)([dO.A], () => dO.A.defaultPaymentSourceId),
                l = (0, R.bG)([dL.default], () => dL.default.locale),
                r = (0, R.bG)([dR.A], () => dR.A.getPremiumTypeSubscription()),
                a = (0, R.bG)([di.A], () => di.A.isRemovingPaymentSource),
                o = (0, R.bG)([di.A], () => di.A.isUpdatingPaymentSource),
                { enabled: u } = (0, dy.c)({ location: "UserSettingsBilling" });
            return (N.useEffect(() => {
                u9.$o(), u9.hP();
            }, []),
            i && 0 === Object.keys(n).length)
                ? (0, f.jsx)("div", { className: dD.o, children: (0, f.jsx)(u4.y, {}) })
                : (0, f.jsx)(dj, {
                      showHeader: t,
                      paymentSources: n,
                      defaultPaymentSourceId: s,
                      premiumSubscriptionPaymentSourceId:
                          null != r && r.status !== Q.Dmq.CANCELED ? r.paymentSourceId : null,
                      locale: l,
                      removing: a,
                      submitting: o,
                      showGiftCards: u,
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t.W26xGQ), m.intl.string(m.t["3pIjBH"])],
    }),
    dU = (0, o.zZ)(d.X.BILLING_PAYMENT_METHODS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.W26xGQ),
        useSubtitle: () => {
            let e = dP();
            return null != e ? m.intl.format(m.t.e2t1G5, { country: e.countryName }) : m.intl.string(m.t.h6V3uK);
        },
        useSubtitleDecoration: function () {
            return null == dP()
                ? null
                : {
                      type: e_.p3.INFO_POPOVER,
                      ariaLabel: m.intl.string(m.t.PuB1W7),
                      popoverProps: {
                          title: "",
                          body: m.intl.string(m.t["21skUa"]),
                          size: "sm",
                          position: "top",
                          getActions: (e) => [
                              {
                                  text: m.intl.string(m.t.PuB1W7),
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
        buildLayout: () => [dG],
    });
var dM = i(549363),
    dV = i(545075);
let dk = (0, o.E2)(d.X.BILLING_TRANSACTION_HISTORY, {
        Component: function () {
            let e = (0, R.bG)([dL.default], () => dL.default.locale);
            return (0, f.jsxs)(f.Fragment, { children: [(0, f.jsx)(dV.kb, {}), (0, f.jsx)(dM.A, { locale: e })] });
        },
        useSearchTerms: () => [m.intl.string(m.t.obLrcK)],
    }),
    dw = (0, o.zZ)(d.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => m.intl.string(m.t.obLrcK),
        buildLayout: () => [dk],
    }),
    dF = (0, o.t_)(d.X.BILLING_PANEL, {
        useTitle: () => m.intl.string(m.t.oeUm2s),
        buildLayout: () => [dU, dw],
        useObscuredNotice: u2.L,
    }),
    dB = (0, o.i4)(d.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.oeUm2s),
        icon: u1.B,
        buildLayout: () => [dF],
    });
var dz = i(597770),
    dY = i(962644),
    dX = i(35587),
    dH = i(86379);
let dK = (0, o.E2)(d.X.GIFT_BLOCKED_PAYMENTS_SETTING, {
        Component: dV.uK,
        usePredicate: () => (0, dH.Hp)(),
        useSearchTerms: () => [m.intl.string(m.t.vwMEHS)],
    }),
    dW = (0, o.zZ)(d.X.GIFT_BLOCKED_PAYMENTS_CATEGORY, { buildLayout: () => [dK] });
var dZ = i(532446),
    dq = i(869038),
    dQ = i(499454),
    dJ = i(45938);
class d$ extends N.Component {
    state = { codeInput: "", submitting: !1, hasError: !1, isPromoCode: !1 };
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, object: Q.ZSU.BUTTON_CTA };
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
                    await (0, de.Qp)(i),
                        (0, de.HF)({ initialCode: i, withRedemptionSuccessModal: !0 }),
                        this.setState({ codeInput: "" });
                    return;
                } catch {}
            let e = (0, dJ.Vd)(t);
            if (null == e) return void this.setState({ hasError: !0 });
            let n = await dq.A.resolveGiftCode(e);
            if (null != n && null != n.giftCode.promotion)
                throw (this.setState({ isPromoCode: !0 }), Error("Cannnot redeem promotion code as gift"));
            X.default.track(Q.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: {
                    ...this.analyticsLocation,
                    section: Q.JJy.LIBRARY_INVENTORY_CODE_REDEMPTION,
                    object: Q.ZSU.BUTTON_CTA,
                },
            }),
                (0, dQ.h)({ processedCode: e }),
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
            r = e ? m.intl.string(m.t["hVEn/j"]) : m.intl.string(m.t.SeKIoS),
            a = e ? m.intl.string(m.t.epHMtp) : void 0;
        return (0, f.jsx)(io.n, {
            label: e ? void 0 : m.intl.string(m.t["il+VCo"]),
            children: (0, f.jsx)("form", {
                onSubmit: this.handleSubmit,
                children: (0, f.jsxs)(dZ.M, {
                    children: [
                        (0, f.jsx)(lD.k, {
                            label: r,
                            description: a,
                            type: t ? "password" : "text",
                            value: i,
                            onChange: this.handleChange,
                            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
                            error: !l && s ? m.intl.string(m.t.Y11a2u) : null,
                            helperText: l
                                ? m.intl.format(m.t.gPt3PE, {
                                      promoLink: () => {
                                          window.open(`https://discord.com/billing/promotions/${i}`);
                                      },
                                  })
                                : null,
                            fullWidth: !0,
                        }),
                        (0, f.jsx)(eE.$, {
                            variant: "primary",
                            text: m.intl.string(m.t.KIpp7M),
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
function d0(e) {
    let { redesign: t = !1 } = e,
        { enabled: i } = (0, dy.c)({ location: "UserSettingsBilling" }),
        n = N.useContext(X.AnalyticsContext),
        s = (0, R.bG)([eC.A], () => eC.A.enabled);
    return (0, f.jsx)(d$, { analyticsContext: n, obscureInput: s, acceptGiftCardRedemption: i, redesign: t });
}
let d1 = (0, o.E2)(d.X.GIFT_CODE_REDEMPTION_SETTING, {
    Component: d0,
    usePredicate: () => !(0, dH.Hp)(),
    useSearchTerms: () => [m.intl.string(m.t["jcSP+g"]), m.intl.string(m.t["il+VCo"])],
});
var d2 = i(725570),
    d3 = i(707554),
    d6 = i(736653),
    d4 = i(46054);
let d5 = ry().duration(30, "days");
var d8 = i(264779),
    d7 = i(416052),
    d9 = i(961302);
function ce(e) {
    let { onClose: t, transitionState: i } = e;
    return (0, f.jsx)(lL.Modal, {
        title: "",
        size: "md",
        input: (0, f.jsx)("div", { className: d9.aR }),
        onClose: async () => await t(),
        actions: [{ text: m.intl.string(m.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: i,
        children: (0, f.jsxs)("div", {
            className: d9.t4,
            children: [
                (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", children: m.intl.string(m.t.iufib1) }),
                (0, f.jsx)(k.E, { variant: "text-md/normal", className: d9.G3, children: m.intl.string(m.t.eAn6z2) }),
            ],
        }),
    });
}
let ct = function (e) {
    let { onClose: t, onClaim: i, code: n, outboundPromotion: s, transitionState: l } = e,
        [r, a] = N.useState(null),
        o = (0, sS.GV)(),
        { analyticsLocations: u } = (0, nU.Ay)(eV.A.USER_SETTINGS_GIFT_INVENTORY);
    return (N.useEffect(() => {
        null == n &&
            (0, d8.kd)({
                promotionId: s.id,
                promotionTitle: s.outboundTitle,
                partnerId: s.partnerId,
                analyticsLocations: u,
            })
                .then((e) => i(e))
                .catch((e) => a(e?.body?.code));
    }, [n, s.id, s.outboundTitle, s.partnerId, i, u]),
    null != r)
        ? (0, f.jsx)(ce, { onClose: t, transitionState: l })
        : null == n
          ? (0, f.jsx)(u4.y, { className: d9.Lq })
          : (0, f.jsx)(lL.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, f.jsxs)("div", {
                    className: d9.N1,
                    children: [
                        (0, f.jsx)("div", { className: d9.Qw }),
                        (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", children: m.intl.string(m.t["23BfZh"]) }),
                        (0, f.jsx)(k.E, {
                            variant: "text-md/normal",
                            className: d9.G3,
                            children: s.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: m.intl.string(m.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: m.intl.string(m.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, d8.kc)(n, s);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: l,
                "aria-label": o,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(eT.c, { className: d9.M5 }),
                        (0, f.jsx)(sy.D, {
                            label: m.intl.string(m.t.s9LFQh),
                            helperText: m.intl.string(m.t["F+nFTZ"]),
                            children: (0, f.jsx)(d7.A, {
                                value: n,
                                buttonColor: aw.$n.Colors.BRAND,
                                buttonLook: aw.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
var ci = i(725807),
    cn = i(212168),
    cs = i(469778),
    cl = i(109802),
    cr = i(503787);
let ca = (e) => {
        let { children: t, className: i, splashArtURL: n } = e;
        return (0, f.jsxs)(lM.A, {
            className: eF()(cr.wx, i),
            align: lM.A.Align.CENTER,
            children: [
                (0, f.jsx)("div", { className: cr.Bn, style: null != n ? { backgroundImage: `url(${n})` } : void 0 }),
                t,
            ],
        });
    },
    co = (e) => {
        let { children: t, className: i } = e;
        return (0, f.jsx)("div", { className: eF()(cr.rf, i), children: t });
    };
class cu extends N.PureComponent {
    static Header = ca;
    static Body = co;
    render() {
        let { children: e, className: t, onMouseEnter: i, onMouseLeave: n } = this.props;
        return (0, f.jsx)("div", { className: eF()(cr.Nr, t), onMouseEnter: i, onMouseLeave: n, children: e });
    }
}
var cd = i(75825),
    cc = i(871123),
    cg = i(366523),
    cm = i(495544),
    cA = i(30793),
    ch = i(97352),
    cE = i(67480),
    cT = i(147925),
    cx = i(957565),
    cS = i(615396),
    cp = i(86629);
class cf extends N.PureComponent {
    _copyModeTimeout = new ob.Ep();
    state = { copyMode: cl.q.DEFAULT };
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case cl.q.SUCCESS:
                return m.intl.string(m.t.XVvPjU);
            case cl.q.ERROR:
                return m.intl.string(m.t.i4GM3L);
            default:
                return m.intl.string(m.t.OpuAlK);
        }
    }
    handleRevoke(e) {
        dq.A.revokeGiftCode(e);
    }
    handleCopy = (e) => {
        let { giftCode: t, sku: i } = this.props;
        (0, dJ.AK)(t, i),
            (0, cx.C)(
                e,
                () => this.setState({ copyMode: cl.q.SUCCESS }),
                () => this.setState({ copyMode: cl.q.ERROR }),
            ),
            this._copyModeTimeout.start(1e3, () => {
                this.setState({ copyMode: cl.q.DEFAULT });
            });
    };
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: i } = this.state;
        return (0, f.jsxs)(lM.A, {
            direction: lM.A.Direction.VERTICAL,
            className: cp.Gj,
            children: [
                (0, f.jsx)(cl.e, {
                    className: cp.ph,
                    value: (0, dJ.Zq)(t.code),
                    text: this.copyButtonText,
                    mode: i,
                    supportsCopy: cx.p5,
                    hideMessage: e ? m.intl.string(m.t["0RLn47"]) : null,
                    onCopy: this.handleCopy,
                    buttonColor: aw.XD.BRAND,
                    buttonLook: aw.pR.FILLED,
                }),
                (0, f.jsxs)("div", {
                    className: cp.KB,
                    children: [
                        null != t.expiresAt
                            ? (0, f.jsxs)(N.Fragment, {
                                  children: [
                                      m.intl.format(m.t.ltVZcJ, { hours: t.expiresAt.diff(ry()(), "h") }),
                                      " \u2014\xa0",
                                  ],
                              })
                            : null,
                        (0, f.jsx)(V.D, {
                            tag: "a",
                            onClick: () => this.handleRevoke(t.code),
                            children: m.intl.string(m.t.v6Yazx),
                        }),
                    ],
                }),
            ],
        });
    }
}
class cN extends N.PureComponent {
    _loadedAt = null;
    state = { isOpen: !1, isCreating: !1, isHovered: !1 };
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    handleGenerateGiftCode = async (e) => {
        e.stopPropagation();
        let { skuId: t, subscriptionPlanId: i, giftStyle: n } = this.props;
        this.setState({ isCreating: !0 }),
            await dq.A.createGiftCode(t, i, n),
            this.setState({ isCreating: !1, isOpen: !0 });
    };
    handleToggleOpen = () => {
        let { skuId: e, subscriptionPlanId: t, loadedAt: i } = this.props,
            n = !this.state.isOpen;
        (null == i || null == this._loadedAt || i < this._loadedAt) && n && dq.A.fetchUserGiftCodesForSKU(e, t),
            this.setState({ isOpen: !this.state.isOpen });
    };
    renderGiftIcon() {
        let { sku: e, giftStyle: t, application: i } = this.props;
        return (0, cc.bF)(e)
            ? (0, f.jsx)(cg.e, { shape: "square", sku: e, containerClassName: cp.ez })
            : null != t
              ? (0, f.jsx)(cd.A, { giftStyle: t, className: cp.ez, shouldAnimate: this.state.isHovered })
              : (0, f.jsx)(e7.A, { game: i, size: e7.M.MEDIUM, skuId: e.id });
    }
    renderSubtitle() {
        let { sku: e, entitlements: t, application: i } = this.props;
        return (0, cc.bF)(e)
            ? (0, f.jsxs)("div", {
                  className: eF()(cp.Oc, cp.ic),
                  children: [
                      (0, f.jsx)(e7.A, { game: i, size: e7.M.XSMALL, skuId: e.id, className: cp._u }),
                      m.intl.format(m.t["6plpZi"], { applicationName: i.name, copies: t.length }),
                  ],
              })
            : (0, f.jsx)("div", { className: cp.Oc, children: m.intl.format(m.t.zMcvcA, { copies: t.length }) });
    }
    renderTitle() {
        let e,
            { sku: t, subscriptionPlan: i, giftCodeBatchId: n } = this.props;
        return (
            (e =
                n === sf.FB
                    ? m.intl.string(m.t.odsU6W)
                    : n === sf.Bu && null != i
                      ? m.intl.formatToPlainString(i.interval === sf.WT.MONTH ? m.t.uZjpiJ : m.t.bJW1EA, {
                            skuName: t.name,
                            intervalCount: i.intervalCount,
                        })
                      : null == i
                        ? t.name
                        : m.intl.formatToPlainString(i.interval === sf.WT.MONTH ? m.t.rCJvqo : m.t.Vd3Iu8, {
                              skuName: t.name,
                              intervalCount: i.intervalCount,
                          })),
            (0, f.jsx)("div", { className: cp.mO, children: e })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, f.jsxs)(lM.A, {
            justify: lM.A.Justify.BETWEEN,
            align: lM.A.Align.CENTER,
            className: cp.pe,
            children: [
                (0, f.jsx)(k.E, { variant: "text-md/normal", children: m.intl.string(m.t.lELyPj) }),
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.Q3Qguo),
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
        return (0, f.jsxs)(cu, {
            className: n,
            children: [
                (0, f.jsx)(V.D, {
                    onClick: this.handleToggleOpen,
                    className: cp.Nr,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, f.jsx)(cu.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, f.jsxs)("div", {
                            className: cp.MY,
                            children: [
                                (0, f.jsxs)(lM.A, {
                                    align: lM.A.Align.CENTER,
                                    children: [
                                        this.renderGiftIcon(),
                                        (0, f.jsxs)("div", {
                                            className: cp.TK,
                                            children: [this.renderTitle(), this.renderSubtitle()],
                                        }),
                                    ],
                                }),
                                (0, f.jsx)(cT.A, {
                                    direction: a ? cT.A.Directions.UP : cT.A.Directions.DOWN,
                                    className: cp.eO,
                                }),
                            ],
                        }),
                    }),
                }),
                a
                    ? (0, f.jsx)(cu.Body, {
                          children: l
                              ? (0, f.jsx)(u4.y, { className: cp.u1 })
                              : (0, f.jsxs)(N.Fragment, {
                                    children: [
                                        i.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        i.map((e) => (0, f.jsx)(cf, { giftCode: e, sku: s, hideCode: r }, e.code)),
                                    ],
                                }),
                      })
                    : null,
            ],
        });
    }
}
let c_ = R.Ay.connectStores([cE.A, eC.A, cA.A, eZ.A, ch.A, cm.default], (e) => {
    let { skuId: t, subscriptionPlanId: i, giftStyle: n } = e,
        s = cE.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = cA.A.getForGifterSKUAndPlan(cm.default.getId(), t, i)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: s,
        hideCodes: eC.A.enabled,
        isFetching: cA.A.getUserGiftCodesFetchingForSKUAndPlan(t, i),
        loadedAt: cA.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, i),
        application: eZ.A.getApplication(s.applicationId),
        subscriptionPlan: null != i ? (0, cS.c9)(i) : null,
        giftCodes: l,
    };
})(cN);
var cC = i(928661);
function cI(e) {
    let { redesign: t = !1 } = e,
        i = (0, R.yK)([cs.A], () => cs.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null != t;
        }),
        n = (0, R.bG)([t6.default], () => o6.Ay.isPremiumExactly(t6.default.getCurrentUser(), sf.PremiumTypes.TIER_2)),
        s = (0, R.bG)([t6.default], () => !o6.Ay.isPremium(t6.default.getCurrentUser())),
        {
            activeOutboundPromotions: l,
            claimedEndedOutboundPromotions: r,
            claimedOutboundPromotionCodeMap: a,
        } = (0, dX.y7)(),
        o = i.find((e) => e.giftCodeBatchId === sf.FB && !e.consumed),
        u = i.filter((e) => e.giftCodeBatchId === sf.Bu && !e.consumed) ?? [],
        [d, c] = eL().partition(u, (e) => {
            let { subscriptionPlanId: t } = e;
            return t === sf.gD.PREMIUM_YEAR_TIER_2;
        }),
        g = l.length + r.length > 0,
        A =
            t || !g
                ? null
                : (0, f.jsxs)("div", {
                      className: cC.N1,
                      children: [
                          (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: m.intl.string(m.t.wFsj3B) }),
                          (0, f.jsx)(eT.c, { className: cC.yF }),
                      ],
                  }),
        h =
            s && g
                ? (0, f.jsxs)("div", {
                      className: cC.uo,
                      children: [
                          (0, f.jsx)(oZ.t, {
                              size: "md",
                              color: F.A.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2,
                              className: cC.PC,
                          }),
                          (0, f.jsx)(k.E, {
                              variant: "text-md/normal",
                              className: cC.Qw,
                              children: m.intl.format(m.t.G4fwxK, {
                                  onClick: () => {
                                      (0, sE.default)(), (0, sO.pX)(Q.BVt.APPLICATION_STORE);
                                  },
                              }),
                          }),
                          (0, f.jsx)(ci.A, {
                              showGradient: !0,
                              className: cC.aA,
                              subscriptionTier: sf.pe.TIER_2,
                              textOptions: { textOverride: m.intl.string(m.t.mr4K7D) },
                          }),
                      ],
                  })
                : null;
    return (0, f.jsxs)("div", {
        children: [
            A,
            (0, f.jsx)(cn.A, {
                className: cC.Yj,
                isShown: s && g,
                type: cn.i.PREMIUM,
                hasBackground: !0,
                children: (0, f.jsxs)("div", {
                    className: cC.DE,
                    children: [
                        h,
                        r.map((e) => {
                            let { code: t, promotion: i } = e;
                            return (0, f.jsx)(cj, { outboundPromotion: i, code: t, disabled: !n }, i.id);
                        }),
                        l.map((e) => (0, f.jsx)(cj, { outboundPromotion: e, code: a[e.id], disabled: !n }, e.id)),
                        null != o
                            ? (0, f.jsx)(
                                  c_,
                                  {
                                      skuId: o.skuId,
                                      subscriptionPlanId: o.subscriptionPlanId,
                                      entitlements: [o],
                                      giftCodeBatchId: sf.FB,
                                  },
                                  (0, dJ.Kx)(o.skuId, o.subscriptionPlanId),
                              )
                            : null,
                        d.length > 0
                            ? (0, f.jsx)(
                                  c_,
                                  {
                                      skuId: d[0].skuId,
                                      subscriptionPlanId: d[0].subscriptionPlanId,
                                      entitlements: d,
                                      giftCodeBatchId: sf.Bu,
                                  },
                                  (0, dJ.Kx)(d[0].skuId, d[0].subscriptionPlanId),
                              )
                            : null,
                        c.length > 0
                            ? (0, f.jsx)(
                                  c_,
                                  {
                                      skuId: c[0].skuId,
                                      subscriptionPlanId: c[0].subscriptionPlanId,
                                      entitlements: c,
                                      giftCodeBatchId: sf.Bu,
                                  },
                                  (0, dJ.Kx)(c[0].skuId, c[0].subscriptionPlanId),
                              )
                            : null,
                    ],
                }),
            }),
        ],
    });
}
var cb = i(339048);
function cv() {
    let e = (0, R.yK)([cs.A], () => cs.A.getGiftable()).filter((e) => {
            let { giftCodeBatchId: t } = e;
            return null == t;
        }),
        t = eL().groupBy(e, (e) => (0, dJ.Kx)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [i, n] = N.useState(!1);
    if (
        (N.useEffect(() => {
            n6.h.wait(() => {
                (0, cb.XJ)().then(() => n(!0));
            });
        }, []),
        !i)
    )
        return (0, f.jsx)(u4.y, { className: cC.Lq });
    if (0 === Object.keys(t).length)
        return (0, f.jsxs)("div", {
            className: cC.p$,
            children: [
                (0, f.jsx)("div", { className: cC.QT }),
                (0, f.jsx)(d3.H, { className: cC.ks, children: m.intl.string(m.t.B1qgZn) }),
                (0, f.jsx)("p", {
                    className: cC.WO,
                    children: m.intl.format(m.t.HezvJ8, {
                        onClick: function () {
                            (0, ey.openUserSettings)(d.X.NITRO_PANEL);
                        },
                    }),
                }),
            ],
        });
    let s = eL()
        .keys(t)
        .map((e) => {
            let { skuId: i, subscriptionPlanId: n, giftStyle: s } = (0, dJ.X6)(e);
            return (0, f.jsx)(c_, { skuId: i, subscriptionPlanId: n, entitlements: t[e], giftStyle: s }, e);
        });
    return (0, f.jsx)(L.B, { gap: "lg", children: s });
}
function cj(e) {
    let t,
        { outboundPromotion: i, code: n, disabled: s } = e,
        [l, r] = N.useState(!1),
        [a, o] = N.useState(!1),
        u = () => r((e) => !e),
        d = (0, d6.Ay)(),
        c = (0, d8.WD)(i.id, d),
        g = null != n,
        A = N.useMemo(
            () =>
                (0, rO.i$)(
                    g
                        ? null != i.outboundRedemptionEndDate
                            ? ry()(i.outboundRedemptionEndDate)
                            : ry()(i.endDate).add(d5)
                        : ry()(i.endDate),
                    "LL",
                ),
            [i, g],
        );
    g && l
        ? (t = m.intl.format(m.t.pkxVx6, { endDate: A, onClickDetails: u }))
        : g && !l
          ? (t = m.intl.format(m.t["4sFeob"], { endDate: A, onClickDetails: u }))
          : !g && l
            ? (t = m.intl.format(m.t["RBnE+l"], { endDate: A, onClickDetails: u }))
            : g || l || (t = m.intl.format(m.t["57+7Qn"], { endDate: A, onClickDetails: u }));
    let h = g ? m.intl.string(m.t["2cHUti"]) : m.intl.string(m.t.O13yhz),
        E = N.useCallback(() => o(!1), []),
        { outboundTitle: T, outboundTermsAndConditions: x } = i;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)("div", {
                className: cC.AX,
                children: [
                    (0, f.jsxs)("div", {
                        className: cC.gE,
                        children: [
                            (0, f.jsxs)("div", {
                                className: cC.At,
                                children: [
                                    (0, f.jsx)("div", {
                                        className: cC.$G,
                                        children: (0, f.jsx)("img", { alt: "", src: c, className: cC.IJ }),
                                    }),
                                    (0, f.jsxs)("div", {
                                        children: [
                                            (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: T }),
                                            (0, f.jsx)(k.E, {
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !s && (0, f.jsx)(eE.$, { text: h, onClick: () => o(!0), disabled: s, size: "sm" }),
                        ],
                    }),
                    l &&
                        (0, f.jsx)(k.E, {
                            className: cC.GL,
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: d4.A.parse(x, !1, { allowLinks: !0 }),
                        }),
                ],
            }),
            a &&
                (0, f.jsx)(d2.aF, {
                    renderModal: (e) =>
                        (0, f.jsx)(ct, {
                            ...e,
                            onClose: E,
                            onClaim: dY.Ay.addClaimedOutboundPromotionCode,
                            code: n,
                            outboundPromotion: i,
                        }),
                    onCloseRequest: E,
                }),
        ],
    });
}
let cy = (0, o.E2)(d.X.GIFT_INVENTORY_LIST_SETTING, {
    Component: function () {
        return (0, f.jsxs)(L.B, {
            gap: "md",
            children: [
                (0, f.jsx)(cI, {}),
                (0, f.jsx)("div", {
                    className: cC.N1,
                    children: (0, f.jsxs)(d3.F, {
                        component: (0, f.jsx)(eh.D, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["9KeUbY"]),
                        }),
                        children: [(0, f.jsx)(eT.c, { className: cC.yF }), (0, f.jsx)(cv, {})],
                    }),
                }),
            ],
        });
    },
    usePredicate: () => !(0, dH.Hp)(),
    useSearchTerms: () => [m.intl.string(m.t["jcSP+g"]), m.intl.string(m.t["9KeUbY"])],
});
var cO = i(89366),
    cR = i(881489),
    cL = i(374200),
    cD = i(354670);
let cP = (0, o.zZ)(d.X.MY_GIFTS_CATEGORY, {
        useTitle: cU,
        buildLayout: () => [cG],
        usePredicate: () => {
            let e = (0, cO.QQ)(),
                t = (0, R.bG)([cD.A], () => cD.A.hasAnyUnexpiredOffer()),
                i = (0, cR.ds)(),
                { claimedOutboundPromotionCodes: n, claimedOutboundPromotionCodesLoaded: s } = (0, R.cf)(
                    [cL.A],
                    () => ({
                        claimedOutboundPromotionCodes: cL.A.claimedOutboundPromotionCodes,
                        claimedOutboundPromotionCodesLoaded: cL.A.claimedOutboundPromotionCodesLoaded,
                    }),
                ),
                l = (0, d8.eN)(n),
                r = (0, dX.T1)(e, t, i, l),
                a = (0, d8.Wl)(n, r).length;
            return s && r.length + a > 0;
        },
    }),
    cG = (0, o.E2)(d.X.MY_GIFTS_CONTENT, {
        useSearchTerms: () => [cU()],
        Component: () => (0, f.jsx)(cI, { redesign: !0 }),
    });
function cU() {
    return (0, u.ri)("MyGifts") ? m.intl.string(m.t.YzjdWJ) : m.intl.string(m.t.wFsj3B);
}
let cM = (0, o.zZ)(d.X.PURCHASED_GIFTS_CATEGORY, { useTitle: ck, buildLayout: () => [cV] }),
    cV = (0, o.E2)(d.X.PURCHASED_GIFTS_CONTENT, { useSearchTerms: () => [ck()], Component: () => (0, f.jsx)(cv, {}) });
function ck() {
    return (0, u.ri)("PurchasedGifts") ? m.intl.string(m.t.FWe6CP) : m.intl.string(m.t["9KeUbY"]);
}
let cw = (0, o.zZ)(d.X.REDEEM_GIFT_CATEGORY, {
        useTitle: () => m.intl.string(m.t["il+VCo"]),
        buildLayout: () => [cF],
        usePredicate: () => !(0, dH.Hp)(),
    }),
    cF = (0, o.E2)(d.X.REDEEM_CODE_INPUT, {
        Component: () => (0, f.jsx)(d0, { redesign: !0 }),
        useSearchTerms: () => [m.intl.string(m.t["jcSP+g"]), m.intl.string(m.t["il+VCo"])],
    }),
    cB = (0, o.zZ)(d.X.GIFT_INVENTORY_LEGACY_CATEGORY, { buildLayout: () => [d1, cy, dK] }),
    cz = (0, o.t_)(d.X.GIFT_PANEL, {
        useTitle: cX,
        buildLayout: () => ((0, u.SB)("GiftPanel") ? [cw, cP, cM, dW] : [cB]),
        initialize: () => {
            (0, u.SB)("GiftPanel") && dY.Ay.fetchClaimedOutboundPromotionCodes();
        },
    }),
    cY = (0, o.i4)(d.X.GIFT_SIDEBAR_ITEM, {
        useTitle: cX,
        icon: dz.o,
        usePersistentBadge: function () {
            return N.useMemo(() => ({ badgeType: e_.Xi.COUNT, useCount: () => (0, dX.IO)().length }), []);
        },
        buildLayout: () => [cz],
    });
function cX() {
    return (0, u.ri)("GiftPanel") ? m.intl.string(m.t.QvIFi0) : m.intl.string(m.t["jcSP+g"]);
}
var cH = i(659758),
    cK = i(102581),
    cW = i(815846);
let cZ = (0, o.E2)(d.X.NITRO_SETTING, {
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return (0, o6.YE)(e, sf.PremiumTypes.TIER_2) ? (0, f.jsx)(cW.A, {}) : (0, f.jsx)(cK.A, {});
        },
        useSearchTerms: () => [m.intl.string(m.t.Ipxkog)],
    }),
    cq = (0, o.zZ)(d.X.NITRO_CATEGORY, { buildLayout: () => [cZ] }),
    cQ = (0, o.t_)(d.X.NITRO_PANEL, {
        useTitle: () => m.intl.string(m.t.Ipxkog),
        useObscuredNotice: u2.L,
        buildLayout: () => [cq],
    }),
    cJ = (0, o.i4)(d.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.Ipxkog),
        icon: oZ.t,
        usePersistentBadge: function (e) {
            return N.useMemo(
                () => ({ badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, cH.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [cQ],
    });
var c$ = i(104510),
    c0 = i(820739),
    c1 = i(73825),
    c2 = i(160946);
let c3 = (0, i(240921).Ay)({
    name: "2026-03-boosting-settings-refresh",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var c6 = i(859241),
    c4 = i(531260),
    c5 = i(369163),
    c8 = i(957485),
    c7 = i(926268),
    c9 = i(106529),
    ge = i(93364);
function gt(e) {
    let { className: t, icon: i, children: n } = e;
    return (0, f.jsxs)("li", {
        className: eF()(c9.Nr, t),
        children: [
            (0, f.jsx)(i, { className: c9.Kk }),
            (0, f.jsx)(k.E, { className: c9.__invalid_description, variant: "text-sm/medium", children: n }),
        ],
    });
}
let gi = function (e) {
    let { cardClassName: t } = e;
    return (0, f.jsxs)("div", {
        className: c9.iE,
        children: [
            (0, f.jsxs)("div", {
                className: c9.Qs,
                children: [
                    (0, f.jsx)(eh.D, {
                        className: c9.R_,
                        color: "always-white",
                        variant: "heading-xxl/bold",
                        children: m.intl.string(m.t.IzKs3o),
                    }),
                    (0, f.jsxs)("ul", {
                        className: c9.kR,
                        children: [
                            (0, f.jsx)(gt, { className: t, icon: c5.v, children: m.intl.string(m.t.TZigSO) }),
                            (0, f.jsx)(gt, {
                                className: t,
                                icon: (e) =>
                                    (0, f.jsx)("img", { className: eF()(e.className, c9.Dp), src: ge, alt: "" }),
                                children: m.intl.string(m.t.hjQuV2),
                            }),
                            (0, f.jsx)(gt, { className: t, icon: c8.i, children: m.intl.string(m.t["2RUcaM"]) }),
                            (0, f.jsx)(gt, { className: t, icon: c7.C, children: m.intl.string(m.t.bJoZKV) }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: c9.JP }),
        ],
    });
};
var gn = i(834040),
    gs = i(811227);
let gl = [
        { getQuestion: () => m.intl.string(m.t.C4J8UB), getAnswer: () => m.intl.string(m.t.nhkk6k) },
        {
            getQuestion: () => m.intl.string(m.t.ai4ym2),
            getAnswer: () =>
                m.intl.format(m.t["8zlqlD"], { helpCenterUrl: to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => m.intl.string(m.t.kMVGsC), getAnswer: () => m.intl.string(m.t["Vz/SCQ"]) },
        { getQuestion: () => m.intl.string(m.t.kYmXWF), getAnswer: () => m.intl.string(m.t["+OURPp"]) },
        { getQuestion: () => m.intl.string(m.t["LsX/vb"]), getAnswer: () => m.intl.string(m.t["3TeauK"]) },
        { getQuestion: () => m.intl.string(m.t.fRlnXU), getAnswer: () => m.intl.string(m.t.bTRacj) },
        { getQuestion: () => m.intl.string(m.t["8Mu5Q9"]), getAnswer: () => m.intl.string(m.t["2T5iPo"]) },
        { getQuestion: () => m.intl.string(m.t["6EN+TZ"]), getAnswer: () => m.intl.string(m.t.NZax1u) },
        { getQuestion: () => m.intl.string(m.t.f5B4EW), getAnswer: () => m.intl.string(m.t.Aje8Pb) },
    ],
    gr = function (e) {
        let { className: t } = e,
            [i, n] = N.useState(null);
        return (0, f.jsxs)("div", {
            className: eF()(gs.iE, t),
            children: [
                (0, f.jsx)(eh.D, {
                    className: gs.R_,
                    variant: "heading-xxl/bold",
                    children: m.intl.string(m.t.HPJ6Nj),
                }),
                (0, f.jsx)("ul", {
                    className: gs.p_,
                    children: gl.map((e, t) => {
                        let s = i === t;
                        return (0, f.jsxs)(
                            "div",
                            {
                                className: gs.Aw,
                                children: [
                                    (0, f.jsxs)(V.D, {
                                        className: eF()(gs.k7, { [gs.lo]: s }),
                                        onClick: () => n((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, f.jsx)(k.E, {
                                                className: gs.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, f.jsx)(gn.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gs.q4,
                                                  })
                                                : (0, f.jsx)(r8.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: gs.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, f.jsx)(k.E, {
                                            className: gs.ZF,
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
var ga = i(462887),
    go = i(933832),
    gu = i(789645),
    gd = i(116891),
    gc = i(416676);
let gg = [
    {
        getPerkHeading: () => m.intl.string(m.t.tIiwuj),
        getPerkPreviewLightTheme: () => i(604203),
        getPerkPreviewDarkTheme: () => i(878515),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.emoji,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.emoji,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.emoji,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkHeading: () => m.intl.string(m.t["3iccet"]),
        getPerkPreviewLightTheme: () => i(105732),
        getPerkPreviewDarkTheme: () => i(857020),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.stickers,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.stickers,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.stickers,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkHeading: () => m.intl.string(m.t["+smCv9"]),
        getPerkPreviewLightTheme: () => i(597890),
        getPerkPreviewDarkTheme: () => i(297642),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.SMYauD),
        getPerkPreviewLightTheme: () => i(323091),
        getPerkPreviewDarkTheme: () => i(261835),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: sf.TG[Q.TVA.NONE].limits.screenShareQualityResolution,
                framerate: sf.TG[Q.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: sf.TG[Q.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: sf.TG[Q.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: (0, gd.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[Q.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.zZ6Rdi, {
                resolution: (0, gd.eT)("GuildBoostingMarketingTierComparisonTable"),
                framerate: sf.TG[Q.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkHeading: () => m.intl.string(m.t["/79IDj"]),
        getPerkPreviewLightTheme: () => i(913997),
        getPerkPreviewDarkTheme: () => i(95781),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.w1gmLt, { bitrate: sf.TG[Q.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkHeading: () => m.intl.string(m.t.R1U2xC),
        getPerkPreviewLightTheme: () => i(389833),
        getPerkPreviewDarkTheme: () => i(754561),
        getTier0Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            m.intl.formatToPlainString(m.t.pIn7Af, { size: sf.TG[Q.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkHeading: () => m.intl.string(m.t.f6vfso),
        getPerkPreviewLightTheme: () => i(735669),
        getPerkPreviewDarkTheme: () => i(283517),
        getTier0Value: () => sf.TG[Q.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => sf.TG[Q.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => sf.TG[Q.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => sf.TG[Q.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.qDqUME),
        getPerkPreviewLightTheme: () => i(970770),
        getPerkPreviewDarkTheme: () => i(416378),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.uwqgbu),
        getPerkPreviewLightTheme: () => i(243580),
        getPerkPreviewDarkTheme: () => i(975940),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.zxsDxc),
        getPerkPreviewLightTheme: () => i(435748),
        getPerkPreviewDarkTheme: () => i(978380),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => m.intl.string(m.t["2TNS3n"]),
        getTier3Value: () => m.intl.string(m.t["l+S46U"]),
    },
    {
        getPerkHeading: () => m.intl.string(m.t["bHa+Ee"]),
        getPerkPreviewLightTheme: () => i(329312),
        getPerkPreviewDarkTheme: () => i(800120),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkHeading: () => m.intl.string(m.t.QV6MZQ),
        getPerkPreviewLightTheme: () => i(463384),
        getPerkPreviewDarkTheme: () => i(481344),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function gm(e) {
    let { children: t, className: i, tier: n } = e,
        s = n === Q.TVA.NONE ? "text-muted" : "text-strong",
        l = n === Q.TVA.NONE || null == n ? "heading-xl/normal" : "heading-xl/bold";
    return (0, f.jsxs)("th", {
        className: eF()(gc.PG, i),
        scope: "col",
        children: [
            (0, f.jsx)(eh.D, { color: s, variant: l, children: t }),
            null != n &&
                (0, f.jsx)(k.E, {
                    color: s,
                    variant: "text-md/normal",
                    children: m.intl.format(m.t["pob/cL"], { subscriptions: Q.M2T[n] }),
                }),
        ],
    });
}
function gA(e) {
    let t,
        { className: i, textVariant: n = "text-md/bold", value: s } = e;
    if ("boolean" == typeof s) {
        let e = eF()(gc.Jk, { [gc.I$]: s });
        t = s
            ? (0, f.jsx)(go.A, { size: "md", color: "currentColor", className: e })
            : (0, f.jsx)(gu.P, { size: "md", color: "currentColor", className: e });
    } else t = (0, f.jsx)(k.E, { color: "interactive-text-active", variant: n, children: s });
    return (0, f.jsx)("td", { className: eF()(gc.xR, i), children: t });
}
function gh(e) {
    let { currentTier: t } = e,
        i = (function (e) {
            switch (e) {
                case Q.TVA.NONE:
                case Q.TVA.TIER_1:
                    return Q.TVA.TIER_2;
                case Q.TVA.TIER_2:
                case Q.TVA.TIER_3:
                    return Q.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == i
        ? null
        : (0, f.jsx)("div", {
              className: eF()(gc.ER, { [gc.GH]: i === Q.TVA.TIER_2, [gc.z5]: i === Q.TVA.TIER_3 }),
              children: (0, f.jsx)(k.E, {
                  className: gc.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === Q.TVA.TIER_3 ? m.intl.string(m.t.d849Up) : m.intl.string(m.t.dZeX1z),
              }),
          });
}
function gE(e) {
    let { isFocused: t, handleFocus: i, handleRowBlur: n, theme: s, row: l, hideTier0: r } = e,
        a = N.useRef(null);
    return (0, f.jsxs)("tr", {
        className: gc.__invalid_tableRow,
        children: [
            (0, f.jsx)("th", {
                className: eF()(gc.xR, gc.uB),
                scope: "row",
                children: (0, f.jsx)(V.D, {
                    className: eF()(gc.VC, gc.xR, gc.Rk),
                    onFocus: i,
                    onBlur: n,
                    onMouseEnter: i,
                    onMouseLeave: n,
                    children: (0, f.jsx)(G.Y, {
                        targetElementRef: a,
                        align: "center",
                        disablePointerEvents: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "bottom",
                        renderPopout: () =>
                            (0, f.jsx)("img", {
                                className: gc.Mz,
                                src: (0, ga.M)(s) ? l.getPerkPreviewDarkTheme() : l.getPerkPreviewLightTheme(),
                                alt: "",
                            }),
                        shouldShow: t,
                        spacing: 16,
                        children: () =>
                            (0, f.jsx)(k.E, { variant: "text-md/normal", ref: a, children: l.getPerkHeading() }),
                    }),
                }),
            }),
            !r && (0, f.jsx)(gA, { textVariant: "text-md/normal", value: l.getTier0Value() }),
            (0, f.jsx)(gA, { value: l.getTier1Value() }),
            (0, f.jsx)(gA, { value: l.getTier2Value() }),
            (0, f.jsx)(gA, { value: l.getTier3Value() }),
        ],
    });
}
let gT = function (e) {
    let t = (0, d6.Ay)(),
        [i, n] = N.useState(null),
        { className: s, guild: l, hideHeading: r, hideTier0: a } = e;
    function o() {
        n(null);
    }
    return (0, f.jsxs)("div", {
        className: s,
        children: [
            !r &&
                (0, f.jsx)(eh.D, {
                    className: gc.R_,
                    variant: "heading-xxl/extrabold",
                    children: m.intl.string(m.t["9GGb9k"]),
                }),
            (0, f.jsxs)("div", {
                className: gc.wY,
                children: [
                    null != l && (0, f.jsx)(gh, { currentTier: l.premiumTier }),
                    (0, f.jsxs)("table", {
                        className: gc.tp,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, f.jsx)("thead", {
                                children: (0, f.jsxs)("tr", {
                                    className: gc.__invalid_tableRow,
                                    children: [
                                        (0, f.jsx)(gm, { className: gc.VC, children: m.intl.string(m.t.F5MY0k) }),
                                        !a && (0, f.jsx)(gm, { tier: Q.TVA.NONE, children: m.intl.string(m.t.mx8j2m) }),
                                        (0, f.jsx)(gm, { tier: Q.TVA.TIER_1, children: m.intl.string(m.t.nzXtaS) }),
                                        (0, f.jsx)(gm, { tier: Q.TVA.TIER_2, children: m.intl.string(m.t["h33/uW"]) }),
                                        (0, f.jsx)(gm, { tier: Q.TVA.TIER_3, children: m.intl.string(m.t.BfF6ED) }),
                                    ],
                                }),
                            }),
                            (0, f.jsx)("tbody", {
                                className: gc.__invalid_tableBody,
                                children: gg.map((e, s) => {
                                    let l = i === s;
                                    return void 0 === e.predicate
                                        ? (0, f.jsx)(
                                              gE,
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
var gx = i(338548),
    gS = i(776096),
    gp = i(178368),
    gf = i(873174),
    gN = i(866323),
    g_ = i(530005),
    gC = i(443865),
    gI = i(473145);
function gb(e) {
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
                label: null != t.premiumGuildSubscription ? m.intl.string(m.t["PR0n//"]) : m.intl.string(m.t["+fmEYG"]),
                subtext: t.isOnCooldown() ? m.intl.string(m.t.XnB8M0) : null,
                disabled: t.isOnCooldown(),
            },
            cancel: { label: m.intl.string(m.t.twFU3R), subtext: s ? null : m.intl.string(m.t.oQ9lOh), disabled: !s },
            uncancel: { label: m.intl.string(m.t["2glQNp"]), subtext: null, disabled: !1 },
        };
    switch (l.status) {
        case Q.Dmq.PAST_DUE:
            (o.cancel.disabled = !0), (o.cancel.subtext = m.intl.string(m.t.WnL6DV)), (o.uncancel.disabled = !0);
            break;
        case Q.Dmq.PAUSE_PENDING:
        case Q.Dmq.PAUSED:
            a === sf.xc.NONE &&
                ((o.transfer.disabled = !0),
                (o.transfer.subtext = m.intl.string(m.t.LiLRRT)),
                (o.cancel.subtext = m.intl.string(m.t["1ywaWL"])),
                (o.cancel.disabled = !0),
                (o.uncancel.disabled = !0));
    }
    let u = N.useMemo(
        () =>
            l.isPausedOrPausePending && a === sf.xc.NONE
                ? (0, f.jsx)(M.Dr, {
                      id: "manage-subscription",
                      label: m.intl.string(m.t.obRG6Y),
                      action: () => (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                      iconLeft: gC.x,
                      leadingAccessory: { type: "icon", icon: gC.x },
                  })
                : null,
        [a, l],
    );
    return (0, f.jsxs)(U.W, {
        "data-menu-migrated-auto": !0,
        onSelect: r,
        navId: "subscription-context",
        variant: "fixed",
        "aria-label": m.intl.string(m.t.ogxXGq),
        onClose: n,
        children: [
            (0, f.jsx)(M.Dr, {
                id: "apply",
                label: o.transfer.label,
                subtext: o.transfer.subtext,
                action: function () {
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 724624));
                        return (i) =>
                            (0, f.jsx)(e, { ...i, guildBoostSlots: [t], locationSection: Q.JJy.SETTINGS_PREMIUM });
                    });
                },
                disabled: o.transfer.disabled,
            }),
            (0, gI.I5)(t)
                ? (0, f.jsx)(M.Dr, {
                      id: "uncancel",
                      label: o.uncancel.label,
                      subtext: o.uncancel.subtext,
                      action: function () {
                          (0, C.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 342744));
                              return (i) => (0, f.jsx)(e, { ...i, guildBoostSlotId: t.id });
                          });
                      },
                      disabled: o.uncancel.disabled,
                  })
                : (0, f.jsx)(M.Dr, {
                      id: "cancel",
                      label: o.cancel.label,
                      subtext: o.cancel.subtext,
                      action: function () {
                          (0, C.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(i.bind(i, 983511));
                              return (i) => (0, f.jsx)(e, { ...i, guildBoostSlot: t });
                          });
                      },
                      disabled: o.cancel.disabled,
                      color: "danger",
                  }),
            u,
        ],
    });
}
var gv = i(545934),
    gj = i(496431);
let gy = function (e) {
    let { className: t, cooldown: i } = e,
        n = (0, gj.A)(i);
    return (0, f.jsx)(k.E, {
        className: t,
        variant: "text-sm/medium",
        color: "text-muted",
        children: (0, rO.uN)(n, { days: m.t.WUTPDc, hours: m.t.c1qodV, minutes: m.t["2+A3dv"] }),
    });
};
var gO = i(482900);
let gR = function (e) {
    let { className: t, imageClassName: n, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, f.jsx)("div", {
        className: eF()(gO.h4, t, { [gO.K2]: s }),
        children: (0, f.jsx)("img", {
            className: eF()(gO.Sl, n, { [gO.x8]: s }),
            src: s
                ? i(650442)
                : l
                  ? i(742885)
                  : "https://cdn.discordapp.com/assets/content/86fd98fc22283647a8be93d0c503646b53c84e3cb25ca6562a38cecb84327e58.gif",
            alt: "",
        }),
    });
};
var gL = i(583032);
let gD = function (e) {
    let { className: t, hasCooldown: n, isCanceled: s, useReducedMotion: l } = e;
    return (0, f.jsxs)("div", {
        className: eF()(gL.sn, t),
        children: [
            s
                ? (0, f.jsx)("img", { className: eF()(gL.$J, gL.qX), src: i(728707), alt: "" })
                : (0, f.jsx)(gR, { className: gL.$J, boostInCooldown: n, useReducedMotion: l }),
            !s && n && (0, f.jsx)("img", { className: gL.De, src: i(438807), alt: "" }),
        ],
    });
};
var gP = i(548118),
    gG = i(509536),
    gU = i(944304),
    gM = i(864310),
    gV = i(245390);
let gk = function (e) {
    let { className: t, guildId: i, boostingVariant: n } = e,
        s = (0, uw.bG)([K.A], () => K.A.getGuild(i), [i]),
        l = (0, gM.A)(s?.id).total;
    return null == s
        ? (0, f.jsx)("div", {
              className: eF()(t, gV.bo),
              children: (0, f.jsx)("div", {
                  className: gV.$g,
                  children: (0, f.jsx)(k.E, { variant: "text-lg/bold", children: m.intl.string(m.t["6Kwwuo"]) }),
              }),
          })
        : (0, f.jsxs)("div", {
              className: eF()(t, gV.bo),
              children: [
                  (0, f.jsx)(gP.Ay, { className: gV.__invalid_guildIcon, guild: s, size: gP.Ay.Sizes.LARGER }),
                  (0, f.jsxs)("div", {
                      className: gV.$g,
                      children: [
                          (0, f.jsx)(k.E, { variant: "text-lg/bold", children: s.name }),
                          (0, f.jsxs)("div", {
                              className: gV.TZ,
                              children: [
                                  (0, f.jsx)(c$._, {
                                      color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                      className: gV.Me,
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: m.intl.format(m.t["pob/cL"], { subscriptions: l }),
                                  }),
                                  (0, f.jsx)("div", { className: gV.me }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/bold",
                                      color: "text-muted",
                                      children: (0, gI.gb)(s.premiumTier, { useLevels: !1 }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n
                      ? (0, f.jsx)(gU.A, {
                            guild: s,
                            analyticsLocation: {
                                page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                object: Q.ZSU.BUTTON_CTA,
                                objectType: Q.AnalyticsObjectTypes.BUY,
                            },
                            pauseAnimation: !0,
                            size: aw.$n.Sizes.MEDIUM,
                            color: aw.$n.Colors.PRIMARY,
                            buttonText: m.intl.string(m.t.aBHecF),
                        })
                      : (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            text: m.intl.string(m.t.KLOhbO),
                            onClick: () => {
                                (0, sE.default)(),
                                    (0, gG.K4)({
                                        guildId: s.id,
                                        location: { section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA },
                                    });
                            },
                        }),
              ],
          });
};
var gw = i(85566);
function gF(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            showAltText: n,
            isCanceled: s,
            premiumSubscription: l,
            fractionalPremiumInfo: r,
        } = e,
        a = N.useMemo(() => {
            if (s) {
                let e = l.currentPeriodEnd;
                return (
                    l.isPausedForFractionalPremium && (e = r.endsAt.toDate()), m.intl.format(m.t.Z4ULRD, { date: e })
                );
            }
            let e = null != i.premiumGuildSubscription ? dl.default.extractTimestamp(i.premiumGuildSubscription.id) : 0;
            return m.intl.formatToPlainString(m.t.lY2Bur, { date: new Date(e) });
        }, [i, s, l, r]),
        o = N.useMemo(
            () =>
                (function (e) {
                    if (null == e || e === Q.TVA.NONE) return "";
                    let t = [
                        m.intl.formatToPlainString(m.t["dLlKX/"], { numEmojiSlots: sf.TG[e].limits.emoji }),
                        m.intl.formatToPlainString(m.t["+ANIfv"], { numStickerSlots: sf.TG[e].limits.stickers }),
                        m.intl.formatToPlainString(m.t["4gt60b"], {
                            numSoundboardSlots: sf.TG[e].limits.soundboardSounds,
                        }),
                        m.intl.formatToPlainString(m.t.XahSjZ, {
                            resolution: sf.TG[e].limits.screenShareQualityResolution,
                            framerate: sf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        m.intl.formatToPlainString(m.t.NbNs7S, { bitrate: sf.TG[e].limits.bitrate / 1e3 }),
                        m.intl.formatToPlainString(m.t.VVKcpn, { filesize: sf.TG[e].limits.fileSize / 1024 / 1024 }),
                        m.intl.formatToPlainString(m.t.TbpCvv, { numVideoStageSeats: sf.TG[e].limits.stageVideoUsers }),
                        m.intl.string(m.t.LDyX3i),
                        m.intl.string(m.t.YtGlPW),
                    ];
                    e >= Q.TVA.TIER_2 && (t.push(m.intl.string(m.t.SztbtN)), t.push(m.intl.string(m.t["3GK91n"]))),
                        e >= Q.TVA.TIER_3 && t.push(m.intl.string(m.t["XUUJd+"]));
                    let i = t[Math.floor(Math.random() * t.length)];
                    return m.intl.format(m.t["/dOAmQ"], { perk: i });
                })(t),
            [t],
        ),
        u = (0, gN.p)(n, { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 } }, "animate-always");
    return s || t === Q.TVA.NONE
        ? (0, f.jsx)("div", {
              className: gw.xm,
              children: (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
          })
        : u((e, t) =>
              (0, f.jsx)(gf.animated.div, {
                  style: e,
                  className: gw.xm,
                  children: (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-muted", children: t ? o : a }),
              }),
          );
}
function gB(e) {
    let {
            guildTier: t,
            guildBoostSlot: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
            isLastGuildBoostSlot: r,
        } = e,
        a = (0, uw.bG)([iW.A], () => iW.A.useReducedMotion),
        o = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i]),
        u = N.useMemo(() => null != o && o > new Date(), [o]),
        d = (0, gI.I5)(i),
        c = (0, c4.A)(),
        g = N.useRef(null);
    return (0, f.jsxs)("div", {
        className: gw.PW,
        children: [
            (0, f.jsxs)("div", {
                className: gw.$U,
                children: [
                    (0, f.jsx)(gD, { isCanceled: d, hasCooldown: u, useReducedMotion: a }),
                    (0, f.jsx)("div", {
                        className: gw.vh,
                        children:
                            null != o && u && !d
                                ? (0, f.jsx)(gy, { className: gw.xm, cooldown: o.getTime() })
                                : (0, f.jsx)(gF, {
                                      guildTier: t,
                                      guildBoostSlot: i,
                                      showAltText: l,
                                      isCanceled: d,
                                      premiumSubscription: n,
                                      fractionalPremiumInfo: c,
                                  }),
                    }),
                    (0, f.jsx)(G.Y, {
                        targetElementRef: g,
                        renderPopout: function (e) {
                            let { closePopout: t } = e;
                            return (0, f.jsx)(gb, {
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
                            (0, f.jsx)(V.D, {
                                ...e,
                                innerRef: g,
                                "aria-label": m.intl.string(m.t.PdRCRg),
                                className: gw.oU,
                                children: (0, f.jsx)(g_.F, { size: "md", color: "currentColor" }),
                            }),
                    }),
                ],
            }),
            !r && (0, f.jsx)("div", { className: gw.eX }),
        ],
    });
}
function gz(e) {
    let {
            guildId: t,
            guildBoostSlotRecords: i,
            premiumSubscription: n,
            hasCancelableGuildBoostSlot: s,
            showAltText: l,
        } = e,
        r = (0, uw.bG)([K.A], () => K.A.getGuild(t), [t]);
    return (0, f.jsxs)("div", {
        className: gw.ag,
        children: [
            (0, f.jsx)(gk, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, f.jsx)(
                    gB,
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
function gY(e) {
    let { guildId: t, appliedGuildBoosts: i, premiumSubscription: n } = e,
        s = (0, uw.bG)([K.A], () => K.A.getGuild(t), [t]),
        l = dl.default.fromTimestamp(Date.now());
    if (
        (i.forEach((e) => {
            (null == l || 0 > dl.default.compare(e.id, l)) && (l = e.id);
        }),
        null == l)
    )
        return null;
    let r = gv.A.createFromServer(
        {
            id: dl.default.fromTimestamp(Date.now()),
            subscription_id: n.id,
            canceled: !1,
            premium_guild_subscription: { id: l, guild_id: t },
            cooldown_ends_at: null,
        },
        n,
    );
    return (0, f.jsxs)("div", {
        className: gw.ag,
        children: [
            (0, f.jsx)(gk, { guildId: t, boostingVariant: !1 }),
            i.map((e, t) =>
                (0, f.jsx)(
                    gB,
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
function gX(e) {
    let { appliedGuildBoosts: t, premiumSubscription: i } = e,
        n = N.useMemo(() => {
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
        : (0, f.jsxs)("div", {
              className: gw.iE,
              children: [
                  (0, f.jsx)("div", {
                      className: gw.kL,
                      children: dl.default
                          .keys(n)
                          .map((e) =>
                              (0, f.jsx)(gY, { guildId: e, premiumSubscription: i, appliedGuildBoosts: n[e] }, e),
                          ),
                  }),
                  (0, f.jsx)("div", { className: gw.vK }),
              ],
          });
}
function gH(e) {
    let { guildBoostSlots: t, premiumSubscription: i } = e,
        [n, s] = N.useState(!1);
    N.useEffect(() => {
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
    let { boostsByGuildId: l, numActiveGuildBoostSlots: r } = N.useMemo(() => {
        let e = 0,
            i = {};
        return (
            Object.keys(t).forEach((n) => {
                let s = t[n];
                if ((!(0, gI.I5)(s) && e++, null != s.premiumGuildSubscription)) {
                    let e = s.premiumGuildSubscription.guildId;
                    e in i || (i[e] = []), i[e].push(s);
                }
            }),
            { boostsByGuildId: i, numActiveGuildBoostSlots: e }
        );
    }, [t]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > o6.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, f.jsxs)("div", {
        className: gw.iE,
        children: [
            (0, f.jsx)("div", {
                className: gw.kL,
                children: dl.default
                    .keys(l)
                    .map((e) =>
                        (0, f.jsx)(
                            gz,
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
            (0, f.jsx)("div", { className: gw.vK }),
        ],
    });
}
var gK = i(520610);
let gW = function (e) {
    let { hasGuildBoostSlots: t, hasAppliedGuildBoosts: n, hasBoostPerk: s, canAddBoosts: l } = e;
    return (0, f.jsxs)("div", {
        className: gK.iE,
        children: [
            (0, f.jsx)("div", {
                className: gK.bj,
                children: (0, f.jsx)("img", { alt: "", className: gK.KV, src: i(742885) }),
            }),
            (0, f.jsxs)("div", {
                className: gK.D7,
                children: [
                    (0, f.jsx)(eh.D, {
                        variant: "display-md",
                        className: gK.R_,
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
                                        ? m.intl.format(m.t.s9zQyG, {})
                                        : m.intl.format(m.t.Rb8Jhs, {})
                                    : m.intl.string(m.t["2rh0by"])
                                : m.intl.format(m.t.Rb8Jhs, {});
                        })({ hasGuildBoostSlots: t, hasBoostPerk: s, hasAppliedGuildBoosts: n, canAddBoosts: l }),
                    }),
                    (0, f.jsx)("svg", {
                        viewBox: "0 0 660 210",
                        className: gK.Mz,
                        children: (0, f.jsx)("path", {
                            d: "M101.3,45.5C57.5,45.9,15.9,82.2,0,99.5V210h660V53.5c-164-137-265.2,32.4-385.8,33.6  C177.7,88.1,158.1,45,101.3,45.5z",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var gZ = i(20218),
    gq = i(168482);
function gQ() {
    return (0, f.jsxs)("div", {
        className: gZ.iE,
        children: [
            (0, f.jsx)("img", { className: gZ.Kk, alt: "", src: gq }),
            (0, f.jsxs)("div", {
                className: gZ.pq,
                children: [
                    (0, f.jsx)(k.E, { variant: "text-lg/bold", children: m.intl.string(m.t.ZHNSYf) }),
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: m.intl.string(m.t.kCj5ps),
                    }),
                ],
            }),
            (0, f.jsx)(eE.$, {
                variant: "secondary",
                text: m.intl.string(m.t.JFlifp),
                onClick: () => {
                    (0, sO.pX)(Q.BVt.GUILD_DISCOVERY), (0, sE.default)();
                },
            }),
        ],
    });
}
var gJ = i(502572),
    g$ = i(614820),
    g0 = i(987144),
    g1 = i(805319);
let g2 = function () {
    let e = N.useRef(null),
        { analyticsLocations: t } = (0, nU.Ay)(),
        { fractionalState: n } = (0, c4.A)();
    function s(i) {
        null != e.current && (0, C.closeModal)(e.current),
            (0, g0.g)({
                analyticsLocation: {
                    page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: Q.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: Q.ZSU.BUTTON_CTA,
                    objectType: Q.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: i,
            });
    }
    async function l() {
        e.current = await (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                return (t) => (0, f.jsx)(e, { ...t, onSelectGuild: s });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, C.closeModal)(e.current);
                },
            },
        );
    }
    let r = (0, gI.Nc)({ fractionalState: n });
    return (0, f.jsxs)("div", {
        className: g1.iE,
        children: [
            (0, f.jsx)(c$._, { color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: g1.$J }),
            (0, f.jsx)(k.E, {
                className: g1.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: m.intl.format(m.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let i = null != r,
                            n = (0, g$.O)(e),
                            s = (0, f.jsx)("div", {
                                className: g1.lO,
                                children: (0, f.jsx)(
                                    B.Q,
                                    { variant: "primary", onClick: i ? void 0 : l, text: n, disabled: i },
                                    t,
                                ),
                            });
                        return i
                            ? (0, f.jsx)(
                                  gJ.A,
                                  {
                                      text: r,
                                      "aria-label": r.toString(),
                                      children: (e) => (0, f.jsx)("span", { ...e, children: s }),
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
var g3 = i(279574);
let g6 = function (e) {
    let { canAddBoosts: t, canApplyBoosts: i } = e,
        n = (0, R.bG)([gS.A], () => gS.A.affinities),
        s = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        l = N.useMemo(() => {
            let e = n.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < s.length && !(e.length >= 3); t++) {
                let i = s[t];
                e.includes(i) || e.push(i);
            }
            return e;
        }, [n, s]);
    return 0 === l.length
        ? null
        : (0, f.jsxs)("div", {
              className: g3.iE,
              children: [
                  t &&
                      (0, f.jsx)(eh.D, {
                          variant: "heading-lg/semibold",
                          className: g3.wx,
                          children: m.intl.string(m.t.r90Wgo),
                      }),
                  l.map((e) => (0, f.jsx)(gk, { className: g3.ZS, guildId: e, boostingVariant: !0 }, e)),
                  s.length > 3 && i && (0, f.jsx)(g2, {}),
              ],
          });
};
var g4 = i(649327);
let g5 = function (e) {
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
                    flavor: m.intl.format(m.t.doslJu, {
                        onClick: () => (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL),
                    }),
                };
            if (!n) return { subtitle: m.intl.string(m.t.oiWYAc) };
            if (t)
                return {
                    subtitle: m.intl.string(m.t.W5rDjW),
                    flavor: m.intl.format(m.t.cUHcaQ, {
                        helpdeskArticle: to.A.getArticleURL(Q.MVz.GUILD_SUBSCRIPTIONS),
                    }),
                };
            let l = sf.hd[sf.gD.PREMIUM_MONTH_GUILD],
                r = o6.Ay.getDefaultPrice(l.id, i),
                a = (0, dn.CE)((0, dn.$g)(r.amount, r.currency), l.interval, l.intervalCount);
            return {
                subtitle: i ? m.intl.string(m.t.bhPzXR) : m.intl.string(m.t.Zs9h9Z),
                flavor: m.intl.formatToPlainString(m.t.PGgTdA, { monthlyGuildBoostPrice: a }),
            };
        })({
            hasAppliedGuildBoosts: t,
            hasBoostPerk: i,
            hasGuildAffinitiesOrInGuild: n,
            subscriptionIsPausedOrPausePending: s,
        });
    return (0, f.jsxs)("div", {
        className: g4.i,
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-lg/bold", className: g4.V, children: l }),
            null != r && (0, f.jsx)(k.E, { variant: "text-sm/normal", children: r }),
        ],
    });
};
var g8 = i(724624),
    g7 = i(983511),
    g9 = i(342744),
    me = i(87719),
    mt = i(354888);
function mi(e) {
    let {
            guildBoostSlot: t,
            isCancellable: i,
            onCancel: n,
            onUncancel: s,
            premiumSubscription: l,
            useReducedMotion: r,
            fractionalState: a,
        } = e,
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t]),
        u = (0, gI.I5)(t),
        d = l?.isPaused === !0 && a === sf.xc.NONE,
        c = m.intl.string(m.t.mOWsF1);
    return (0, f.jsxs)(
        "li",
        {
            className: mt.Hp,
            children: [
                (0, f.jsxs)("div", {
                    className: mt.YL,
                    children: [
                        (0, f.jsx)(gD, {
                            className: mt.W6,
                            hasCooldown: t.isOnCooldown(),
                            isCanceled: u,
                            useReducedMotion: r,
                        }),
                        u && null != l
                            ? (0, f.jsx)(k.E, {
                                  color: "text-muted",
                                  variant: "text-sm/medium",
                                  children: m.intl.format(m.t.Z4ULRD, { date: l.currentPeriodEnd }),
                              })
                            : t.isOnCooldown() && null != o
                              ? (0, f.jsx)(gy, { cooldown: o.getTime() })
                              : (0, f.jsx)(k.E, {
                                    className: mt.__invalid_unappliedGuildBoostSlotDescription,
                                    color: "text-muted",
                                    variant: "text-sm/medium",
                                    children: m.intl.string(m.t["2mcafz"]),
                                }),
                    ],
                }),
                (0, f.jsxs)("div", {
                    className: mt.E7,
                    children: [
                        i &&
                            !u &&
                            (0, f.jsx)(gJ.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, f.jsx)("div", {
                                        className: mt.LB,
                                        children: (0, f.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: m.intl.string(m.t.twFU3R),
                                            onClick: () => n(t),
                                            disabled: d,
                                            size: "sm",
                                        }),
                                    }),
                            }),
                        u &&
                            (0, f.jsx)(gJ.A, {
                                shouldShow: d,
                                text: c,
                                "aria-label": c.toString(),
                                children: (e) =>
                                    (0, f.jsx)("div", {
                                        className: mt.LB,
                                        children: (0, f.jsx)(B.Q, {
                                            ...e,
                                            variant: "primary",
                                            text: m.intl.string(m.t["2glQNp"]),
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
function mn(e) {
    (0, C.openModalLazy)(async () => (t) => (0, f.jsx)(g7.default, { ...t, guildBoostSlot: e }));
}
function ms(e) {
    (0, C.openModalLazy)(async () => (t) => (0, f.jsx)(g9.default, { ...t, guildBoostSlotId: e.id }));
}
let ml = function (e) {
    let t,
        i,
        n,
        { guildBoostSlots: s } = e,
        l = (0, R.bG)([dR.A], () => dR.A.getPremiumTypeSubscription()),
        r = l?.isPausedOrPausePending === !0,
        { fractionalState: a } = (0, c4.A)(),
        o = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        u = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        d = a === sf.xc.FP_SUB_PAUSED,
        c = r && !d,
        {
            appliedGuildBoostSlots: g,
            unappliedGuildBoostSlots: A,
            numActiveGuildBoostSlots: h,
            hasCooldownBoosts: E,
            allGuildBoostsAreOnCooldown: T,
        } = N.useMemo(() => {
            let e = [],
                t = [],
                i = 0,
                n = !1,
                l = !0;
            return (
                s.forEach((s) => {
                    !(0, gI.I5)(s) && i++,
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
        x = null != l ? o6.Ay.getNumIncludedPremiumGuildSubscriptionSlots(l.planId) : 0,
        S = Math.max(0, x - g.length),
        p = h > x,
        _ = x === s.length,
        I = _ ? S : 1,
        b = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) e.push((0, f.jsx)(gR, { className: mt.YA, useReducedMotion: o }, t));
            return e;
        }, [I, o]),
        v = N.useMemo(() => A.find((e) => e.isAvailable()), [A]);
    if (0 === A.length) return null;
    let j = A.length;
    if (
        ((t = _
            ? m.intl.formatToPlainString(T ? m.t["3DW6Dc"] : m.t["/u15Qc"], { numUnappliedGuildBoostSlots: j })
            : m.intl.formatToPlainString(T ? m.t["3DW6Dc"] : m.t.BPadnO, { numUnappliedGuildBoostSlots: j })),
        o6.Ay.isPremium(u))
    ) {
        let e = (e, t) =>
            (0, f.jsx)(
                V.D,
                {
                    className: mt.nw,
                    tag: "span",
                    onClick: () => {
                        (0, me.e)();
                    },
                    children: e,
                },
                t,
            );
        i = T
            ? m.intl.format(m.t.omcpSE, { learnMoreHook: e })
            : m.intl.format(m.t["5mAkVi"], { numUnappliedGuildBoostSlots: j, learnMoreHook: e });
    } else
        i = T
            ? m.intl.string(m.t["8pcUZi"])
            : m.intl.formatToPlainString(m.t.Kaw82o, { numUnappliedGuildBoostSlots: j });
    return (
        (n = r && a === sf.xc.NONE ? m.intl.string(m.t.mOWsF1) : m.intl.string(m.t.xr4m5B)),
        (0, f.jsx)("div", {
            className: mt.iE,
            children: (0, f.jsxs)("div", {
                className: eF()(mt.Qs, [mt.Yq]),
                children: [
                    (0, f.jsxs)("div", {
                        className: mt.wx,
                        children: [
                            (0, f.jsxs)("div", {
                                className: mt.RW,
                                children: [
                                    (0, f.jsx)("div", { className: mt.PS, children: b }),
                                    (0, f.jsxs)("div", {
                                        className: mt.__invalid_headerCopy,
                                        children: [
                                            (0, f.jsx)(eh.D, {
                                                className: mt.gg,
                                                variant: "heading-lg/bold",
                                                children: t,
                                            }),
                                            (0, f.jsx)(k.E, {
                                                className: mt.__invalid_headerSubheading,
                                                color: "text-strong",
                                                variant: "text-sm/normal",
                                                children: i,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, f.jsx)("div", {
                                className: mt.di,
                                children: (0, f.jsx)(gJ.A, {
                                    shouldShow: null == v || c,
                                    text: n,
                                    "aria-label": n.toString(),
                                    children: (e) =>
                                        (0, f.jsx)(eE.$, {
                                            variant: "primary",
                                            text: m.intl.string(m.t.BMx1iy),
                                            ...e,
                                            disabled: null == v || c,
                                            onClick:
                                                null != v
                                                    ? () => {
                                                          (0, C.openModalLazy)(
                                                              async () => (e) =>
                                                                  (0, f.jsx)(g8.default, {
                                                                      ...e,
                                                                      guildBoostSlots: [v],
                                                                      locationSection: Q.JJy.SETTINGS_PREMIUM,
                                                                  }),
                                                          );
                                                      }
                                                    : void 0,
                                        }),
                                }),
                            }),
                        ],
                    }),
                    (!_ || E) &&
                        (0, f.jsx)("ul", {
                            className: mt.LU,
                            children: A.map((e) =>
                                (0, f.jsx)(
                                    mi,
                                    {
                                        guildBoostSlot: e,
                                        isCancellable: p,
                                        onCancel: mn,
                                        onUncancel: ms,
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
var mr = i(616659);
function ma(e) {
    let { premiumSubscription: t } = e,
        i = (0, R.bG)([gp.A], () => gp.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        l = o6.Ay.isPremium(s, sf.PremiumTypes.TIER_2),
        r = (0, R.bG)([gS.A], () => gS.A.affinities),
        a = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        o = r.length > 0 || a.length > 0,
        u = n.length > 0,
        d = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]),
        c = d.length > 0,
        g = n.length > d.length,
        m = (0, R.bG)([c6.A], () => c6.A.getCurrentUserAppliedBoosts()),
        { fractionalState: A } = (0, c4.A)({ forceFetch: !0 }),
        h = s?.isPremiumGroupMember(),
        E = t?.isPausedOrPausePending === !0 && A === sf.xc.NONE,
        T = t?.isPausedOrPausePending !== !0 && A === sf.xc.NONE && !h,
        x = l && A === sf.xc.FP_SUB_PAUSED,
        S = A === sf.xc.NONE && !h;
    return (0, f.jsxs)("div", {
        className: mr.GO,
        children: [
            (0, f.jsx)(dV.kb, { className: mr.ek }),
            (0, f.jsx)(gW, { hasGuildBoostSlots: u, hasAppliedGuildBoosts: c, hasBoostPerk: x, canAddBoosts: T }),
            S &&
                (0, f.jsx)(g5, {
                    hasAppliedGuildBoosts: c,
                    hasBoostPerk: x,
                    hasGuildAffinitiesOrInGuild: o,
                    subscriptionIsPausedOrPausePending: E,
                }),
            h && (0, f.jsx)(gx.A, {}),
            !o && (0, f.jsx)(gQ, {}),
            t?.isPaused && A !== sf.xc.FP_SUB_PAUSED
                ? (0, f.jsx)(gX, { appliedGuildBoosts: m, premiumSubscription: t })
                : (0, f.jsx)(gH, { guildBoostSlots: i, premiumSubscription: t }),
            (0, f.jsx)(ml, { guildBoostSlots: n, fractionalPremiumState: A }),
            (0, f.jsx)(g6, { canAddBoosts: c && T, canApplyBoosts: g }),
            (0, f.jsx)(gT, { className: mr.e4, hideHeading: !0, hideTier0: !0 }),
            (0, f.jsx)(gi, { cardClassName: mr.KW }),
            (0, f.jsx)(gr, { className: mr.JL }),
        ],
    });
}
var mo = i(527113),
    mu = i(365199),
    md = i(162286);
function mc(e) {
    let { guild: t, className: i } = e,
        { total: n } = (0, gM.A)(t.id);
    return (0, f.jsxs)("div", {
        className: i ?? md.OA,
        children: [
            (0, f.jsx)(gP.Ay, { className: md.$f, guild: t, size: gP.Ay.Sizes.MEDIUM }),
            (0, f.jsxs)("div", {
                className: md.gI,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        tag: "span",
                        children: t.name,
                    }),
                    (0, f.jsxs)("div", {
                        className: md.ew,
                        children: [
                            (0, f.jsxs)("div", {
                                className: md.QW,
                                children: [
                                    (0, f.jsx)(c$._, {
                                        className: md.Wz,
                                        color: F.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH,
                                    }),
                                    (0, f.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["pob/cL"], { subscriptions: n }),
                                    }),
                                ],
                            }),
                            t.premiumTier !== Q.TVA.NONE &&
                                (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)("div", { className: md.zk }),
                                        (0, f.jsx)(k.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-subtle",
                                            children: (0, gI.gb)(t.premiumTier, { useLevels: !1 }),
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
function mg(e) {
    let { guildId: t } = e,
        i = (0, R.bG)([K.A], () => K.A.getGuild(t), [t]);
    return null == i
        ? null
        : (0, f.jsxs)("div", {
              className: md.Nr,
              children: [
                  (0, f.jsx)(mc, { guild: i }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      icon: c$._,
                      text: m.intl.string(m.t.aBHecF),
                      onClick: () => {
                          (0, g0.g)({
                              analyticsLocations: [],
                              analyticsLocation: {
                                  page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                  section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
                                  object: Q.ZSU.BUTTON_CTA,
                                  objectType: Q.AnalyticsObjectTypes.BUY,
                              },
                              guild: i,
                          });
                      },
                  }),
              ],
          });
}
var mm = i(225334);
let mA =
    "https://cdn.discordapp.com/assets/content/272d3fa6496aedb9dee76f2d555913bfd56c9e9aacd6de3c18449644d9749657.png";
function mh(e) {
    let { slot: t, guildTier: i, premiumSubscription: n, hasCancelableSlots: s, isLast: l } = e,
        r = N.useRef(null),
        a = (0, gI.I5)(t),
        o = N.useMemo(() => (null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null), [t.cooldownEndsAt]),
        u = null != o && o > new Date(),
        d = (0, c4.A)(),
        c = N.useMemo(
            () =>
                (function (e, t) {
                    if (null == e || e === Q.TVA.NONE) return "";
                    let i = [
                        m.intl.formatToPlainString(m.t["dLlKX/"], { numEmojiSlots: sf.TG[e].limits.emoji }),
                        m.intl.formatToPlainString(m.t["+ANIfv"], { numStickerSlots: sf.TG[e].limits.stickers }),
                        m.intl.formatToPlainString(m.t["4gt60b"], {
                            numSoundboardSlots: sf.TG[e].limits.soundboardSounds,
                        }),
                        m.intl.formatToPlainString(m.t.XahSjZ, {
                            resolution: sf.TG[e].limits.screenShareQualityResolution,
                            framerate: sf.TG[e].limits.screenShareQualityFramerate,
                        }),
                        m.intl.formatToPlainString(m.t.NbNs7S, { bitrate: sf.TG[e].limits.bitrate / 1e3 }),
                        m.intl.formatToPlainString(m.t.VVKcpn, { filesize: sf.TG[e].limits.fileSize / 1024 / 1024 }),
                        m.intl.formatToPlainString(m.t.TbpCvv, { numVideoStageSeats: sf.TG[e].limits.stageVideoUsers }),
                        m.intl.string(m.t.LDyX3i),
                        m.intl.string(m.t.YtGlPW),
                    ];
                    e >= Q.TVA.TIER_2 && (i.push(m.intl.string(m.t.SztbtN)), i.push(m.intl.string(m.t["3GK91n"]))),
                        e >= Q.TVA.TIER_3 && i.push(m.intl.string(m.t["XUUJd+"]));
                    let n = 0;
                    for (let e = 0; e < t.length; e++) n = (31 * n + t.charCodeAt(e)) | 0;
                    let s = i[Math.abs(n) % i.length];
                    return m.intl.formatToPlainString(m.t["/dOAmQ"], { perk: s });
                })(i, t.id),
            [i, t.id],
        ),
        g = N.useMemo(() => {
            if ("" !== c) return c;
            let e = null != t.premiumGuildSubscription ? dl.default.extractTimestamp(t.premiumGuildSubscription.id) : 0;
            return m.intl.formatToPlainString(m.t.lY2Bur, { date: new Date(e) });
        }, [c, t.premiumGuildSubscription]),
        A = N.useMemo(
            () => (a ? (n.isPausedForFractionalPremium ? d.endsAt.toDate() : n.currentPeriodEnd) : null),
            [a, n, d],
        );
    return (0, f.jsxs)("div", {
        className: eF()(mm.iq, { [mm.Mt]: l }),
        children: [
            (0, f.jsxs)("div", {
                className: mm.kd,
                children: [
                    (0, f.jsx)("img", { alt: "", className: mm.bB, src: mA }),
                    a && null != A
                        ? (0, f.jsx)(k.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: m.intl.format(m.t.Z4ULRD, { date: A }),
                          })
                        : (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-subtle", children: g }),
                                  u &&
                                      null != o &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)("div", { className: mm.zk }),
                                              (0, f.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-info",
                                                  children: m.intl.formatToPlainString(m.t.YJlswH, {
                                                      date: o.toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  !u &&
                                      null != n.trialEndsAt &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)("div", { className: mm.zk }),
                                              (0, f.jsx)(k.E, {
                                                  variant: "text-sm/medium",
                                                  color: "text-feedback-warning",
                                                  children: m.intl.formatToPlainString(m.t.OdPSpk, {
                                                      date: new Date(n.trialEndsAt).toLocaleDateString(),
                                                  }),
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            }),
            (0, f.jsx)(G.Y, {
                targetElementRef: r,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, f.jsx)(gb, {
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
                    (0, f.jsx)(V.D, {
                        innerRef: r,
                        "aria-label": m.intl.string(m.t.PdRCRg),
                        className: mm.Mj,
                        ...e,
                        children: (0, f.jsx)(mu.j, { size: "xs", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                    }),
            }),
        ],
    });
}
function mE(e) {
    let { guildId: t, slots: i, premiumSubscription: n, hasCancelableSlots: s } = e,
        l = (0, R.bG)([K.A], () => K.A.getGuild(t), [t]);
    return (0, f.jsxs)("div", {
        className: mm.Nr,
        children: [
            (0, f.jsx)("div", {
                className: mm.MY,
                children:
                    null != l
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(mc, { guild: l, className: mm.OA }),
                                  (0, f.jsx)(eE.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: m.intl.string(m.t.KLOhbO),
                                      onClick: () => {
                                          (0, sE.default)(),
                                              (0, gG.K4)({
                                                  guildId: l.id,
                                                  location: {
                                                      section: Q.JJy.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA,
                                                  },
                                              });
                                      },
                                  }),
                              ],
                          })
                        : (0, f.jsx)("div", {
                              className: mm.OA,
                              children: (0, f.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  color: "text-default",
                                  children: m.intl.string(m.t["6Kwwuo"]),
                              }),
                          }),
            }),
            i.map((e, t) =>
                (0, f.jsx)(
                    mh,
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
function mT(e) {
    let { guildBoostSlots: t, premiumSubscription: i, pausedAppliedGuildBoosts: n, isPaused: s } = e,
        { boostsByGuildId: l, numActiveSlots: r } = N.useMemo(() => {
            if (s && null != i)
                return {
                    boostsByGuildId: (function (e, t) {
                        let i = {};
                        for (let t of e) t.guildId in i || (i[t.guildId] = []), i[t.guildId].push(t);
                        let n = {};
                        for (let e of Object.keys(i)) {
                            let s = i[e];
                            n[e] = s.map((i) =>
                                gv.A.createFromServer(
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
                if ((!(0, gI.I5)(n) && e++, null != n.premiumGuildSubscription)) {
                    let e = n.premiumGuildSubscription.guildId;
                    e in l || (l[e] = []), l[e].push(n);
                }
            }
            return { boostsByGuildId: l, numActiveSlots: e };
        }, [t, s, n, i]);
    if (null == i || 0 === Object.keys(l).length) return null;
    let a = r > o6.Ay.getNumIncludedPremiumGuildSubscriptionSlots(i.planId);
    return (0, f.jsx)("div", {
        className: mm.kR,
        children: dl.default
            .keys(l)
            .map((e) => (0, f.jsx)(mE, { guildId: e, slots: l[e], premiumSubscription: i, hasCancelableSlots: a }, e)),
    });
}
var mx = i(68179);
function mS(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        s = (0, R.bG)([dR.A], () => dR.A.getPremiumTypeSubscription()),
        { unappliedSlots: l, numActiveSlots: r } = N.useMemo(() => {
            let e = [],
                i = 0;
            for (let n of t) !(0, gI.I5)(n) && i++, null == n.premiumGuildSubscription && e.push(n);
            return { unappliedSlots: e, numActiveSlots: i };
        }, [t]),
        a = r > (null != s ? o6.Ay.getNumIncludedPremiumGuildSubscriptionSlots(s.planId) : 0),
        o = s?.isPausedOrPausePending === !0 && n === sf.xc.NONE;
    return 0 === l.length
        ? null
        : (0, f.jsxs)("div", {
              className: mx.Nr,
              children: [
                  (0, f.jsxs)("div", {
                      className: mx.MY,
                      children: [
                          (0, f.jsxs)("div", {
                              className: mx._L,
                              children: [
                                  (0, f.jsxs)("div", {
                                      className: mx.MD,
                                      children: [
                                          (0, f.jsx)("img", { alt: "", className: mx.F8, src: mA }),
                                          (0, f.jsx)("div", {
                                              className: eF()(mx.qS, "theme-dark"),
                                              children: (0, f.jsx)("span", { className: mx.Vv, children: l.length }),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsxs)("div", {
                                      className: mx.Qp,
                                      children: [
                                          (0, f.jsx)(k.E, {
                                              variant: "heading-md/semibold",
                                              color: "text-default",
                                              tag: "span",
                                              children: m.intl.format(m.t.BPadnO, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                          (0, f.jsx)(k.E, {
                                              variant: "text-xs/semibold",
                                              color: "text-subtle",
                                              children: m.intl.format(m.t.Kaw82o, {
                                                  numUnappliedGuildBoostSlots: l.length,
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, f.jsx)(gJ.A, {
                              shouldShow: o,
                              text: m.intl.string(m.t.mOWsF1),
                              "aria-label": m.intl.string(m.t.mOWsF1),
                              children: (e) =>
                                  (0, f.jsx)(eE.$, {
                                      ...e,
                                      variant: "primary",
                                      size: "sm",
                                      icon: c$._,
                                      text: m.intl.string(m.t.BMx1iy),
                                      disabled: o,
                                      onClick: () => {
                                          (0, C.openModalLazy)(async () => {
                                              let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                              return (t) =>
                                                  (0, f.jsx)(e, {
                                                      ...t,
                                                      onSelectGuild: (e) => {
                                                          t.onClose(),
                                                              (0, g0.g)({
                                                                  analyticsLocations: [],
                                                                  analyticsLocation: {
                                                                      page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                                      section: Q.JJy.SETTINGS_PREMIUM,
                                                                      object: Q.ZSU.BUTTON_CTA,
                                                                      objectType: Q.AnalyticsObjectTypes.BUY,
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
                      (0, f.jsx)(
                          mp,
                          {
                              slot: e,
                              isLast: t === l.length - 1,
                              isCancelable: a && !(0, gI.I5)(e),
                              isCanceled: (0, gI.I5)(e),
                              premiumSubscription: s,
                              modificationsDisabled: o,
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function mp(e) {
    let t,
        { slot: i, isLast: n, isCancelable: s, isCanceled: l, premiumSubscription: r, modificationsDisabled: a } = e,
        o = N.useRef(null),
        u = N.useMemo(() => (null != i.cooldownEndsAt ? new Date(i.cooldownEndsAt) : null), [i.cooldownEndsAt]);
    t =
        l && null != r
            ? (0, f.jsx)(k.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  children: m.intl.format(m.t.Z4ULRD, { date: r.currentPeriodEnd }),
              })
            : i.isOnCooldown() && null != u
              ? (0, f.jsx)(gy, { cooldown: u.getTime() })
              : (0, f.jsx)(k.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: m.intl.string(m.t["2mcafz"]),
                });
    let d = s || l;
    return (0, f.jsxs)("div", {
        className: eF()(mx.iq, { [mx.Mt]: n }),
        children: [
            (0, f.jsxs)("div", {
                className: mx.kd,
                children: [(0, f.jsx)("img", { alt: "", className: mx.bB, src: mA }), t],
            }),
            d &&
                (0, f.jsx)(G.Y, {
                    targetElementRef: o,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, f.jsxs)(U.W, {
                            navId: "unapplied-boost-actions",
                            "aria-label": m.intl.string(m.t.ogxXGq),
                            onSelect: void 0,
                            onClose: t,
                            children: [
                                s &&
                                    (0, f.jsx)(M.Dr, {
                                        id: "cancel-boost",
                                        label: m.intl.string(m.t.twFU3R),
                                        color: "danger",
                                        disabled: a,
                                        subtext: a ? m.intl.string(m.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, C.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, f.jsx)(g7.default, { ...e, guildBoostSlot: i }),
                                                );
                                        },
                                    }),
                                l &&
                                    (0, f.jsx)(M.Dr, {
                                        id: "uncancel-boost",
                                        label: m.intl.string(m.t["2glQNp"]),
                                        disabled: a,
                                        subtext: a ? m.intl.string(m.t.mOWsF1) : void 0,
                                        action: () => {
                                            t(),
                                                (0, C.openModalLazy)(
                                                    async () => (e) =>
                                                        (0, f.jsx)(g9.default, { ...e, guildBoostSlotId: i.id }),
                                                );
                                        },
                                    }),
                            ],
                        });
                    },
                    align: "right",
                    position: "bottom",
                    children: (e) =>
                        (0, f.jsx)(V.D, {
                            innerRef: o,
                            "aria-label": m.intl.string(m.t["UKOtz+"]),
                            className: mx.Mj,
                            ...e,
                            children: (0, f.jsx)(mu.j, { size: "xs", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                        }),
                }),
        ],
    });
}
var mf = i(185949);
function mN(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: i,
            premiumSubscription: n,
            pausedAppliedGuildBoosts: s,
            fractionalPremiumState: l,
        } = e,
        r = to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ),
        a = n?.isPaused === !0 && l !== sf.xc.FP_SUB_PAUSED,
        o = t.some((e) => null == e.premiumGuildSubscription),
        u = a && s.length > 0,
        d = a ? u : t.some((e) => null != e.premiumGuildSubscription);
    return o || d
        ? (0, f.jsxs)("div", {
              className: mf.i,
              children: [
                  (0, f.jsxs)("div", {
                      className: mf.b,
                      children: [
                          (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: m.intl.string(m.t.W5rDjW) }),
                          (0, f.jsx)(k.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: m.intl.format(m.t.SpDz1x, { helpdeskArticle: r }),
                          }),
                      ],
                  }),
                  (0, f.jsx)(mT, {
                      guildBoostSlots: i,
                      premiumSubscription: n,
                      pausedAppliedGuildBoosts: s,
                      isPaused: a,
                  }),
                  (0, f.jsx)(mS, { guildBoostSlots: t, fractionalPremiumState: l }),
              ],
          })
        : null;
}
var m_ = i(917064),
    mC = i(438929);
function mI() {
    return (0, f.jsxs)("div", {
        className: mC.iE,
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-xl/normal", children: m.intl.string(m.t.IzKs3o) }),
            (0, f.jsx)("div", {
                className: mC.kR,
                children: m_.s.map((e, t) => {
                    let i = e.icon;
                    return (0, f.jsxs)(
                        "div",
                        {
                            className: mC.Nr,
                            children: [
                                (0, f.jsx)(i, { className: mC.Kk }),
                                (0, f.jsx)(k.E, {
                                    className: mC.h_,
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
var mb = i(232122),
    mv = i(539915);
function mj() {
    let [e, t] = N.useState(null),
        [i, n] = N.useState(null);
    return (0, f.jsxs)("div", {
        className: mv.iE,
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-xl/normal", children: m.intl.string(m.t.HPJ6Nj) }),
            (0, f.jsx)("ul", {
                className: mv.p_,
                children: mb.m.map((s, l) => {
                    let r = e === l,
                        a = i === l,
                        o = r || a ? "text-strong" : "text-muted";
                    return (0, f.jsxs)(
                        V.D,
                        {
                            tag: "li",
                            className: eF()(mv.Aw, { [mv.$K]: r }),
                            onClick: () => t((e) => (e === l ? null : l)),
                            onMouseEnter: () => n(l),
                            onMouseLeave: () => n(null),
                            children: [
                                (0, f.jsxs)("div", {
                                    className: mv.k7,
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            className: mv.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: s.getQuestion(),
                                        }),
                                        (0, f.jsx)(w.a, {
                                            size: "sm",
                                            color: F.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: mv.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, f.jsx)(k.E, {
                                        className: mv.ZF,
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
var my = i(182859),
    mO = i(853513),
    mR = i(560378);
function mL() {
    let e = to.A.getArticleURL(Q.MVz.GUILD_SUBSCRIPTIONS);
    return (0, f.jsxs)("div", {
        className: mR.wx,
        children: [
            (0, f.jsxs)("div", {
                className: mR.Qs,
                children: [
                    (0, f.jsxs)("div", {
                        className: mR.B5,
                        children: [
                            (0, f.jsx)("img", { alt: "", className: mR.F8, src: "/assets/263e4cc9043cab70.svg" }),
                            (0, f.jsx)(eh.D, {
                                variant: "heading-xl/normal",
                                children: m.intl.string(mO.default.hjvcLO),
                            }),
                        ],
                    }),
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: m.intl.format(m.t.TUHyoA, { helpdeskArticle: e }),
                    }),
                ],
            }),
            (0, f.jsx)(my.A, {
                variant: "member",
                className: mR.iO,
                analyticsLocation: {
                    page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: Q.JJy.HERO,
                    object: Q.ZSU.CARD,
                },
                videoPlacement: "settings_header",
            }),
        ],
    });
}
var mD = i(315629),
    mP = i(780082);
function mG() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    if (null == e || o6.Ay.hasFreeBoosts(e)) return null;
    let t = to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ);
    return (0, f.jsxs)(mD.h, {
        color: "nitro-pink",
        className: mP.vK,
        children: [
            (0, f.jsxs)("div", {
                className: mP.nw,
                children: [
                    (0, f.jsx)("img", { alt: "", className: mP.q3, src: mA }),
                    (0, f.jsxs)("div", {
                        className: mP.Tm,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: m.intl.format(m.t.Idh1Vs, { count: sf.M4, boostCount: sf.M4 }),
                            }),
                            (0, f.jsxs)("div", {
                                className: mP.xv,
                                children: [
                                    (0, f.jsx)(oZ.t, { className: mP.nE }),
                                    (0, f.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["6UAu+f"], {
                                            count: sf.M4,
                                            boostCount: sf.M4,
                                            helpdeskArticle: t,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)(eE.$, {
                variant: "expressive",
                size: "sm",
                icon: oZ.t,
                text: m.intl.string(m.t["8x0jKT"]),
                onClick: me.e,
            }),
        ],
    });
}
var mU = i(894206);
function mM() {
    let e = (0, R.bG)([gS.A], () => gS.A.affinities),
        t = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        i = N.useMemo(() => {
            let i = e.slice(0, 3).map((e) => e.guildId);
            for (let e = 0; e < t.length && i.length < 3; e++) {
                let n = t[e];
                i.includes(n) || i.push(n);
            }
            return i;
        }, [e, t]);
    return 0 === i.length
        ? null
        : (0, f.jsxs)("div", {
              className: mU.i,
              children: [
                  (0, f.jsx)(eh.D, { variant: "heading-md/semibold", children: m.intl.string(m.t.r90Wgo) }),
                  (0, f.jsx)("div", { className: mU.k, children: i.map((e) => (0, f.jsx)(mg, { guildId: e }, e)) }),
              ],
          });
}
var mV = i(140909);
function mk(e) {
    let { count: t, disabledReason: n } = e,
        s = to.A.getArticleURL(Q.MVz.GUILD_BOOSTING_FAQ);
    return (0, f.jsxs)(mD.h, {
        color: "nitro-pink",
        className: mV.vK,
        children: [
            (0, f.jsxs)("div", {
                className: mV.nw,
                children: [
                    (0, f.jsxs)("div", {
                        className: mV.MD,
                        children: [
                            (0, f.jsx)("img", { alt: "", className: mV.F8, src: mA }),
                            (0, f.jsx)("div", {
                                className: eF()(mV.qS, "theme-dark"),
                                children: (0, f.jsx)("span", { className: mV.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, f.jsxs)("div", {
                        className: mV.Tm,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: m.intl.format(m.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, f.jsxs)("div", {
                                className: mV.xv,
                                children: [
                                    (0, f.jsx)(oZ.t, { className: mV.nE }),
                                    (0, f.jsx)(k.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["6UAu+f"], {
                                            count: sf.M4,
                                            boostCount: sf.M4,
                                            helpdeskArticle: s,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)(gJ.A, {
                shouldShow: null != n,
                text: n ?? "",
                "aria-label": n,
                children: (e) =>
                    (0, f.jsx)(eE.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: c$._,
                        text: m.intl.string(m.t.BMx1iy),
                        disabled: null != n,
                        onClick: () => {
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(i.bind(i, 770101));
                                return (t) =>
                                    (0, f.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, g0.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: Q.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: Q.JJy.SETTINGS_PREMIUM,
                                                        object: Q.ZSU.BUTTON_CTA,
                                                        objectType: Q.AnalyticsObjectTypes.BUY,
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
function mw(e) {
    let { premiumSubscription: t } = e,
        i = (0, R.bG)([gp.A], () => gp.A.boostSlots),
        n = N.useMemo(() => Object.values(i), [i]),
        s = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        l = (0, R.bG)([gS.A], () => gS.A.affinities),
        r = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
        a = l.length > 0 || r.length > 0,
        o = N.useMemo(() => n.filter((e) => null != e.premiumGuildSubscription), [n]).length,
        u = (0, R.bG)([c6.A], () => c6.A.getCurrentUserAppliedBoosts()),
        { fractionalState: d } = (0, c4.A)({ forceFetch: !0 }),
        c = s?.isPremiumGroupMember(),
        g = t?.isPausedOrPausePending === !0 && d === sf.xc.NONE,
        A = N.useMemo(() => n.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [n]),
        h = g ? m.intl.string(m.t.mOWsF1) : A ? void 0 : m.intl.string(m.t.xr4m5B),
        E = N.useMemo(() => {
            if (null == t) return 0;
            let e = o6.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== n.length ? 0 : Math.max(0, e - o);
        }, [t, n.length, o]);
    return (0, f.jsxs)("div", {
        className: mr.GO,
        children: [
            (0, f.jsx)(dV.kb, { className: mr.ek }),
            (0, f.jsx)(mL, {}),
            (0, f.jsx)(mG, {}),
            E > 0 && (0, f.jsx)(mk, { count: E, disabledReason: h }),
            c && (0, f.jsx)(gx.A, {}),
            !a && (0, f.jsx)(gQ, {}),
            (0, f.jsxs)("div", {
                className: mr.C_,
                children: [
                    (0, f.jsx)(mN, {
                        guildBoostSlots: n,
                        guildBoostSlotsByGuildId: i,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: u,
                        fractionalPremiumState: d,
                    }),
                    (0, f.jsx)(mM, {}),
                    (0, f.jsx)(mo.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, f.jsx)(mI, {}),
                    (0, f.jsx)(mj, {}),
                ],
            }),
        ],
    });
}
var mF = i(65188);
let mB = (0, o.E2)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SETTING, {
        Component: function () {
            let e = c3.useConfig({ location: "UserSettingsPremiumGuildSubscriptions" }).enabled;
            N.useEffect(() => {
                n6.h.wait(() => {
                    u9.hP(), u9.$o(), (0, c0.CD)(), (0, c1.zS)(null, null, Q.tF5.DISCOVERY), (0, c0.tO)(!0);
                });
            }, []);
            let { hasFetchedSubscriptions: t, premiumSubscription: i } = (0, R.cf)([dR.A], () => ({
                    hasFetchedSubscriptions: dR.A.hasFetchedSubscriptions(),
                    premiumSubscription: dR.A.getPremiumTypeSubscription(),
                })),
                n = (0, c2.Y)(),
                s = (0, R.bG)([dO.A], () => dO.A.hasFetchedPaymentSources),
                l = (0, R.bG)([c6.A], () => c6.A.isFetchingCurrentUserAppliedBoosts),
                r = !t || !n || !s || l,
                [a, o] = N.useState(!1);
            return (r || a || o(!0), r && !a)
                ? (0, f.jsx)("div", { className: eF()(mF.kL, mF.Lq), children: (0, f.jsx)(u4.y, {}) })
                : (0, f.jsxs)("div", {
                      className: mF.kL,
                      children: [
                          (0, f.jsx)("div", { className: mF.Tp }),
                          (0, f.jsx)("div", {
                              className: mF.Qs,
                              children: e
                                  ? (0, f.jsx)(mw, { premiumSubscription: i })
                                  : (0, f.jsx)(ma, { premiumSubscription: i }),
                          }),
                      ],
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t["+CbP2v"]), m.intl.string(m.t.Nn1lJy)],
    }),
    mz = (0, o.zZ)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_CATEGORY, { buildLayout: () => [mB] }),
    mY = (0, o.t_)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
        useTitle: () => m.intl.string(m.t["+CbP2v"]),
        buildLayout: () => [mz],
    }),
    mX = (0, o.i4)(d.X.PREMIUM_GUILD_SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+CbP2v"]),
        icon: c$._,
        buildLayout: () => [mY],
    });
var mH = i(153659),
    mK = i(155984),
    mW = i(357758),
    mZ = i(262077),
    mq = i(696986),
    mQ = i(819411);
function mJ(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-md/bold", children: m.intl.string(m.t["KzCF/6"]) }),
            (0, f.jsx)(mq.h, { size: 4 }),
            (0, f.jsx)(k.E, { variant: "text-md/normal", className: mQ.yV, children: m.intl.string(m.t["3D7qCu"]) }),
            (0, f.jsx)(mq.h, { size: 24 }),
            (0, f.jsxs)("div", {
                className: mQ.Nr,
                children: [
                    (0, f.jsx)("img", { src: "/assets/5a420feed295b595.svg", alt: "", className: mQ.RI }),
                    (0, f.jsxs)("div", {
                        className: mQ.FS,
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: mQ.wx,
                                children: m.intl.string(m.t["KzCF/6"]),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-md/normal",
                                className: mQ.h_,
                                children: m.intl.format(m.t["m+pcOO"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(eE.$, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: m.intl.string(m.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}
var m$ = i(872351),
    m0 = i(9113),
    m1 = i(599941),
    m2 = i(384684),
    m3 = i(2242);
let m6 = [];
var m4 = i(912851),
    m5 = i(146795);
let m8 = (e) => {
    let { label: t, onClick: i, submitting: n } = e;
    return (0, f.jsx)(V.D, {
        onClick: n ? void 0 : i,
        className: m5.x6,
        children: (0, f.jsxs)("div", {
            className: m5.hQ,
            children: [
                n
                    ? (0, f.jsx)(u4.y, { type: u4.y.Type.PULSING_ELLIPSIS, className: m5.__invalid_spinner })
                    : (0, f.jsx)(k.E, { variant: "text-md/medium", className: m5.Pf, children: t }),
                (0, f.jsx)(w.a, { size: "md", color: "currentColor", className: m5.UE }),
            ],
        }),
    });
};
var m7 = i(465932),
    m9 = i(543767),
    Ae = i(420139),
    At = i(790284),
    Ai = i(636194),
    An = i(624456),
    As = i(710144),
    Al = i(815332),
    Ar = i(817649),
    Aa = i(969389);
let Ao = (e) => {
    let { transitionState: t, groupListing: i, listing: n, subscription: s, onClose: l } = e,
        r = (0, sS.GV)(),
        { analyticsLocations: a } = (0, nU.Ay)(eV.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: o,
            error: u,
            submitting: d,
        } = ((e) => {
            let [t, i] = N.useState(!1),
                [n, s] = N.useState(null);
            return {
                cancelSubscription: async (t) => {
                    try {
                        return i(!0), await u9.M2(t, e), !0;
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
        g = n.role_benefits.benefits.filter((e) => e.ref_type === m3.bN.CHANNEL),
        A = n.role_benefits.benefits.filter((e) => e.ref_type === m3.bN.INTANGIBLE),
        h = ry()(s.currentPeriodEnd).format("MMMM Do, YYYY"),
        E = m.intl.formatToPlainString(m.t.KsMRP5, {
            numChannels: g.length,
            numAdditionalBenefits: A.length,
            subscriptionEndDate: h,
        });
    return (0, f.jsx)(lL.Modal, {
        transitionState: t,
        "aria-labelledby": r,
        actions: [
            { text: m.intl.string(m.t.EP6EPb), variant: "secondary", onClick: l },
            { variant: "critical-primary", text: m.intl.string(m.t.F6lUDF), onClick: c, loading: d },
        ],
        title: m.intl.string(m.t.O6l5tM),
        subtitle: E,
        onClose: l,
        children: (0, f.jsxs)(L.B, {
            gap: 8,
            children: [
                null != u ? (0, f.jsx)(O.w, { type: "critical", children: u.message }) : null,
                (0, f.jsx)(Ar.x, { listingId: n.id, guildId: i.guild_id, className: Aa.P }),
            ],
        }),
    });
};
var Au = i(319225),
    Ad = i(746080),
    Ac = i(47685);
let Ag = (e) => {
        let { label: t, value: i, showInfoIcon: n, infoIconTooltipText: s } = e;
        return (0, f.jsxs)("div", {
            className: Ac.L0,
            children: [
                (0, f.jsxs)("div", {
                    className: Ac.a5,
                    children: [
                        (0, f.jsx)(eh.D, { variant: "heading-deprecated-12/semibold", className: Ac.HU, children: t }),
                        n &&
                            (0, f.jsx)(e1.m, {
                                text: s,
                                children: (0, f.jsx)(lN.m, { size: "xs", color: "currentColor", className: Ac.Mo }),
                            }),
                    ],
                }),
                (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", className: Ac.sx, children: i }),
            ],
        });
    },
    Am = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: i } = (0, nU.Ay)(),
            [n] = (0, m9.YV)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: i,
                analyticsLocation: eV.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            s = (0, R.bG)([dO.A], () => dO.A.hasFetchedPaymentSources);
        return null != n && s
            ? (0, f.jsx)(Ae.A, { subscription: t, currentInvoicePreview: n, dropdownClassName: Ac.Nw })
            : (0, f.jsx)(u4.y, {});
    },
    AA = (e) => {
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
            : (0, f.jsx)(sy.D, {
                  label: m.intl.string(m.t["4neDM+"]),
                  children: (0, f.jsx)("div", {
                      className: Ac.__invalid_rowButtons,
                      children: i
                          ? (0, f.jsx)(eE.$, {
                                variant: "primary",
                                text: m.intl.string(m.t.y3mAE4),
                                onClick: r,
                                loading: n,
                            })
                          : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    !t && !s && (0, f.jsx)(m8, { label: m.intl.string(m.t.FRbWR8), onClick: a }),
                                    (0, f.jsx)(m8, { label: m.intl.string(m.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    Ah = (e) => {
        let { subscription: t } = e,
            {
                listing: i,
                groupListing: n,
                guild: s,
                expanded: l,
                handleToggleExpanded: r,
                subscriptionInfo: a,
            } = (function (e) {
                let t = (0, An.M)(e),
                    i = (0, R.bG)([Ai.A], () => Ai.A.getSubscriptionListingForPlan(t)),
                    n = (0, R.bG)([Ai.A], () =>
                        null != i ? Ai.A.getSubscriptionGroupListingForSubscriptionListing(i.id) : null,
                    ),
                    s = (0, R.bG)([K.A], () => K.A.getGuild(n?.guild_id)),
                    [l, r] = N.useState(!1),
                    { fetchSubscriptionsSettings: a } = (0, m1.XE)();
                N.useEffect(() => {
                    l && null != s && null == Ai.A.getSubscriptionSettings(s.id) && a(s.id);
                }, [l, s, a]);
                let o =
                    null == i
                        ? void 0
                        : (function (e) {
                              let { subscription: t } = e,
                                  i = ry()(t.currentPeriodEnd).format("M/D/YY"),
                                  n = null != t.price ? (0, dn.$g)(t.price, t.currency) : "",
                                  s = ry()(t.createdAt).format("M/D/YY"),
                                  l = t.status === Q.Dmq.CANCELED,
                                  r = t.status === Q.Dmq.PAST_DUE,
                                  a = t.hasActiveTrial;
                              return {
                                  memberSince: s,
                                  nextRenewalDate: i,
                                  nextRenewalLabel: l ? m.intl.string(m.t.UAfot2) : m.intl.string(m.t.CVjLcM),
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
            [o, u] = N.useState(!1),
            c = (0, sS.GV)(),
            { analyticsLocations: g } = (0, nU.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: A } = (0, m7.MH)(s?.id),
            h = t?.isPurchasedViaAppleGeneric;
        if (null == n || null == i || null == a) return null;
        let E = async () => {
                try {
                    u(!0),
                        await u9.QP(t, g),
                        (0, Au.E)({ title: m.intl.string(m.t.oPV2cy), body: m.intl.string(m.t.DdRizV) });
                } finally {
                    u(!1);
                }
            },
            {
                isCancelled: T,
                isPastDue: x,
                subscriptionPrice: S,
                memberSince: p,
                nextRenewalDate: _,
                nextRenewalLabel: I,
                isTrial: b,
            } = a,
            v = i.soft_deleted || null == s || h;
        return (0, f.jsxs)("div", {
            className: Ac.kL,
            children: [
                (0, f.jsx)(As.A, {
                    onClick: r,
                    className: Ac.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: n } = e;
                        return (0, f.jsxs)(f.Fragment, {
                            children: [
                                null != s && (0, f.jsx)(gP.Ay, { guild: s, active: !0, size: gP.Ay.Sizes.MEDIUM }),
                                (0, f.jsxs)("div", {
                                    className: Ac.if,
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            variant: "text-md/medium",
                                            className: Ac.J5,
                                            children: null != s ? s.name : m.intl.string(m.t["He+cmd"]),
                                        }),
                                        (0, f.jsxs)("div", {
                                            className: Ac.xp,
                                            children: [
                                                (0, f.jsx)(k.E, {
                                                    variant: "text-sm/normal",
                                                    className: Ac.KR,
                                                    children: i.name,
                                                }),
                                                T
                                                    ? (0, f.jsx)(n7.Lp, { text: m.intl.string(m.t["7uFZGt"]) })
                                                    : b
                                                      ? (0, f.jsx)(n7.Lp, {
                                                            text: m.intl.string(m.t["6anton"]),
                                                            color: F.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : x
                                                        ? (0, f.jsx)(e1.m, {
                                                              text: m.intl.string(m.t.eSuJE2),
                                                              children: (0, f.jsx)("div", {
                                                                  children: (0, f.jsx)(n7.Lp, {
                                                                      className: Ac.qc,
                                                                      text: m.intl.string(m.t.NrRwIl),
                                                                      color: F.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                h
                                                    ? (0, f.jsx)(e1.m, {
                                                          text: m.intl.string(m.t.nv1IqK),
                                                          children: (0, f.jsx)("div", {
                                                              children: (0, f.jsx)(n7.Lp, {
                                                                  text: m.intl.string(m.t["sBl3X/"]),
                                                                  color: F.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, f.jsx)(V.D, {
                                    onClick: n(r),
                                    "aria-label": m.intl.string(m.t.e5eQOy),
                                    "aria-controls": c,
                                    "aria-expanded": l,
                                    focusProps: { ringTarget: t },
                                    children: (0, f.jsx)(w.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eF()(Ac.D6, { [Ac.S7]: l }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                l
                    ? (0, f.jsxs)("div", {
                          id: c,
                          children: [
                              (0, f.jsx)("div", { className: Ac.yF }),
                              (0, f.jsx)(Al.A, { groupListingId: n.id, subscription: t, className: Ac.kE }),
                              (0, f.jsxs)("div", {
                                  className: Ac.Zx,
                                  children: [
                                      (0, f.jsx)(Ag, { label: I, value: _ }),
                                      (0, f.jsx)(Ag, {
                                          label: m.intl.string(m.t.dltUMH),
                                          value: S,
                                          showInfoIcon: b,
                                          infoIconTooltipText: b ? m.intl.string(m.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, f.jsx)(Ag, { label: m.intl.string(m.t.AOcwWB), value: p }),
                                  ],
                              }),
                              (0, f.jsx)(mq.h, { size: 16 }),
                              !T &&
                                  !h &&
                                  (0, f.jsx)(sy.D, {
                                      label: m.intl.string(m.t.wmMFvA),
                                      children: (0, f.jsx)(Am, { subscription: t }),
                                  }),
                              !v &&
                                  (0, f.jsx)(AA, {
                                      isTrial: b,
                                      isCancelled: T,
                                      isResubscribing: o,
                                      shouldHideRoleSubscriptionEntryPoints: A,
                                      onCancelSubscriptionClick: () => {
                                          if (null != s) {
                                              var e;
                                              (e = { groupListing: n, listing: i, subscription: t }),
                                                  (0, C.openModal)((t) => (0, f.jsx)(Ao, { ...t, ...e }));
                                          }
                                      },
                                      onChangePlanClick: () => {
                                          null != s &&
                                              ((0, sO.pX)(Q.BVt.CHANNEL(s.id, Ad.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, sE.default)(),
                                              m4.A.show(
                                                  Q.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  m.intl.string(m.t.DvbaM4),
                                                  () => {
                                                      At.A.setState({ subsection: nv.nR }),
                                                          (0, ey.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL);
                                                  },
                                              ));
                                      },
                                      onResubscribeClick: E,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
var AE = i(170272);
let AT = (e) => {
    let { onGoBack: t } = e,
        i = (function () {
            let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t =
                    (0, R.bG)([m2.A], () =>
                        (function () {
                            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m2.A],
                                t = e.getGuildIdsWithPurchasableRoles(),
                                i = !1;
                            return (t.forEach((t) => {
                                e.getUserSubscriptionRoles(t).size > 0 && (i = !0);
                            }),
                            i)
                                ? m3.M_.SUBSCRIBED
                                : 0 === t.size
                                  ? m3.M_.NONE
                                  : m3.M_.IN_SUBSCRIPTION_SERVER;
                        })([m2.A]),
                    ) === m3.M_.SUBSCRIBED,
                i = (0, R.bG)([dR.A], () => dR.A.getActiveGuildSubscriptions()),
                n = N.useRef(!1);
            return (
                N.useEffect(() => {
                    (function (e) {
                        let { ensureFresh: t, hasFetched: i, hasRoleSubscriptions: n } = e,
                            s = dR.A.getActiveGuildSubscriptions();
                        return (
                            ((s?.length ?? 0) === 0 && !!n) || (!!t && !i) || (!i && !dR.A.hasFetchedSubscriptions())
                        );
                    })({ ensureFresh: e, hasRoleSubscriptions: t, hasFetched: n.current }) &&
                        ((n.current = !0), u9.hP());
                }, [e, t]),
                i ?? m6
            );
        })(),
        { loading: n } = (0, m1.eb)(i);
    return ((0, m0.A)(dr.Fr ? "role-subscriptions-user-setting" : void 0), n)
        ? (0, f.jsx)(u4.y, {})
        : 0 === i.length
          ? null
          : (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(eE.$, { text: m.intl.string(m.t.hqyhKQ), icon: m$.z, variant: "secondary", onClick: t }),
                    (0, f.jsx)(mq.h, { size: 10 }),
                    (0, f.jsx)(io.n, {
                        label: m.intl.string(m.t["KzCF/6"]),
                        description: m.intl.string(m.t["Y+ucR7"]),
                        children: (0, f.jsx)("div", {
                            className: AE.A,
                            children: i.map((e) => (0, f.jsx)(Ah, { subscription: e }, e.id)),
                        }),
                    }),
                ],
            });
};
var Ax = i(327479),
    AS = i(334335);
function Ap(e) {
    let { onClickManageSubscription: t, count: i } = e;
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)(eh.D, { variant: "heading-md/bold", children: m.intl.string(m.t["48ywCu"]) }),
            (0, f.jsx)(mq.h, { size: 4 }),
            (0, f.jsx)(k.E, { variant: "text-md/normal", className: AS.yV, children: m.intl.string(m.t.VWxmSo) }),
            (0, f.jsx)(mq.h, { size: 24 }),
            (0, f.jsxs)("div", {
                className: AS.Nr,
                children: [
                    (0, f.jsx)("img", { src: "/assets/d6bcd13fb6c85425.svg", alt: "", className: AS._e }),
                    (0, f.jsxs)("div", {
                        className: AS.FS,
                        children: [
                            (0, f.jsx)(eh.D, {
                                variant: "heading-xl/semibold",
                                className: AS.wx,
                                children: m.intl.string(m.t["48ywCu"]),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-md/normal",
                                className: AS.h_,
                                children: m.intl.format(m.t["/esXLj"], { numSubscriptions: i }),
                            }),
                        ],
                    }),
                    (0, f.jsx)(Ax.A, { onClick: t, text: m.intl.string(m.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}
var Af = i(548411),
    AN = i(417098),
    A_ = i(143582),
    AC = i(915043),
    AI = i(920087);
function Ab(e) {
    let { className: t, header: i, headerClassName: n, children: s } = e,
        l = N.useMemo(() => {
            let e = !1;
            return (
                N.Children.forEach(s, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [s]);
    return (0, f.jsxs)("div", {
        className: eF()(AI.iE, t),
        children: [
            (0, f.jsx)("div", { className: eF()(AI.wx, n), children: i }),
            l && (0, f.jsx)("div", { className: AI.Qs, children: s }),
        ],
    });
}
var Av = i(885996),
    Aj = i(144165),
    Ay = i(664121),
    AO = i(950305),
    AR = i(943775),
    AL = i(123791),
    AD = i(900797),
    AP = i(632510);
let AG = N.createContext({ isOpen: !1, toggleOpen: () => {} });
function AU(e) {
    let { children: t } = e,
        [i, n] = N.useReducer((e) => !e, !1),
        s = N.useMemo(() => ({ isOpen: i, toggleOpen: n }), [i]);
    return (0, f.jsx)(AG.Provider, { value: s, children: t(i) });
}
AU.Toggle = function (e) {
    let { className: t, text: i } = e,
        { isOpen: n, toggleOpen: s } = N.useContext(AG),
        l = n ? AD.t : w.a,
        r = null != i ? i : n ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.XJuakA);
    return (0, f.jsxs)(V.D, {
        className: eF()(AP.L, t),
        onClick: s,
        children: [
            (0, f.jsx)(k.E, { variant: "heading-sm/semibold", tag: "div", color: "currentColor", children: r }),
            (0, f.jsx)(l, { size: "sm", color: "currentColor" }),
        ],
    });
};
var AM = i(627363),
    AV = i(243217),
    Ak = i(328968),
    Aw = i(163437),
    AF = i(3432);
function AB(e) {
    return e.toLocaleDateString(void 0, { dateStyle: "long" });
}
var Az = i(184451),
    AY = (((s = {})[(s.LOADING = 0)] = "LOADING"), (s[(s.DONE = 1)] = "DONE"), (s[(s.ERROR = 2)] = "ERROR"), s);
function AX(e) {
    let { subscription: t, navigateToSwitchPlan: i, loadingState: n } = e,
        s = t.metadata?.application_subscription_guild_id,
        { renewalMutations: l, planId: r } = t,
        {
            appId: a,
            plan: o,
            storeListing: u,
            isGuildSubscription: d,
            subscriptionForGuild: c,
            sku: g,
            isCancelled: A,
            isOrphanedGuildSubscription: h,
            renewalPlan: E,
        } = (0, R.cf)([ch.A, cE.A, Ak.A, K.A], () => {
            let e,
                i = ch.A.get(r),
                n = null != i ? cE.A.get(i.skuId) : void 0,
                a = n?.applicationId,
                o = null != i ? Ak.A.getForSKU(i.skuId) : null,
                u = null != o && (0, Aw.PJ)(o.skuFlags),
                d = u && null != s ? K.A.getGuild(s) : void 0,
                c = (0, Aw.Uo)(t, n),
                g = u && null != s && null == d;
            if (!1 === c && null != l && l.items.length > 0) {
                let t = l.items[0];
                e = ch.A.get(t.planId) ?? void 0;
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
        { data: T } = (0, AM.YY)(a),
        x = N.useMemo(() => (null != T ? (0, AR.A)(T, 100) : null), [T]),
        S = g?.deleted ?? !1,
        p = null != g && (0, Aw.Se)(g),
        _ = t.status === Q.Dmq.PAST_DUE,
        { analyticsLocations: C } = (0, nU.Ay)(),
        [I] = (0, m9.YV)({
            subscriptionId: t.id,
            renewal: !0,
            analyticsLocations: C,
            analyticsLocation: eV.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        b = AB(t.currentPeriodEnd),
        v = 0 === n;
    return (0, f.jsxs)(Ab, {
        headerClassName: Az.dL,
        header:
            !1 === v
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsxs)("div", {
                              className: Az.VW,
                              children: [
                                  null != x &&
                                      (0, f.jsx)(Aj._, { src: x.href, imageClassName: Az.Z2, width: 40, height: 40 }),
                                  (0, f.jsxs)("div", {
                                      className: Az.aF,
                                      children: [
                                          (0, f.jsx)(eh.D, {
                                              variant: "heading-md/semibold",
                                              lineClamp: 1,
                                              children: T?.name ?? m.intl.string(m.t["7kqy7W"]),
                                          }),
                                          (0, f.jsx)(k.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              lineClamp: 1,
                                              children: o?.name ?? m.intl.string(m.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, f.jsx)("div", {
                              className: Az.Pz,
                              children:
                                  null != T &&
                                  null != u &&
                                  null != g &&
                                  (0, f.jsx)(Aq, {
                                      subscription: t,
                                      app: T,
                                      guild: c,
                                      sku: g,
                                      storeListing: u,
                                      isCancelled: A,
                                      isOrphanedGuildSubscription: h,
                                      navigateToSwitchPlan: i,
                                      renewalSkuId: E?.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, f.jsx)(u4.y, { type: u4.t.PULSING_ELLIPSIS }),
        children: [
            A &&
                (0, f.jsx)(AZ, {
                    type: "warning",
                    title: p
                        ? m.intl.formatToPlainString(m.t.QOnM1y, { subscriptionPeriodEnd: b })
                        : m.intl.formatToPlainString(m.t.HOaZu8, { subscriptionPeriodEnd: b }),
                }),
            !A && h && (0, f.jsx)(AZ, { type: "warning", title: m.intl.string(m.t.SmSP8Q) }),
            _ && (0, f.jsx)(AZ, { type: "danger", title: m.intl.string(m.t.fvOqBo) }),
            (0, f.jsxs)("div", {
                className: Az.zH,
                children: [
                    (0, f.jsx)(AW, {
                        title: m.intl.string(m.t["5D/KEH"]),
                        content: d
                            ? (0, f.jsxs)(f.Fragment, {
                                  children: [
                                      (0, f.jsxs)("span", {
                                          className: Az.yW,
                                          children: [(0, f.jsx)(Ay.R, { size: "xs" }), m.intl.string(m.t.QjL3vn)],
                                      }),
                                      null != c &&
                                          (0, f.jsxs)("span", {
                                              className: Az._t,
                                              children: [
                                                  (0, f.jsx)(k.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: m.intl.format(m.t["7ZD8p1"], { guildName: c.name }),
                                                  }),
                                                  (0, f.jsx)(gP.Ay, { guild: c, size: gP.Ay.Sizes.MINI }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, f.jsxs)("span", {
                                  className: Az.yW,
                                  children: [(0, f.jsx)(AO.n, { size: "xs" }), m.intl.string(m.t["6anEVv"])],
                              }),
                    }),
                    (0, f.jsx)(AH, { invoicePreview: I, subscriptionPlan: o }),
                    (0, f.jsx)(AW, {
                        title: m.intl.string(m.t.dnUzb6),
                        content: AB(t.createdAt ?? t.currentPeriodStart),
                    }),
                    (0, f.jsx)(AK, { isCancelled: A, subscriptionPeriodEnd: b, renewalPlan: E }),
                ],
            }),
            (0, f.jsx)(AJ, {
                subscription: t,
                currentInvoicePreview: I,
                loadingState: n,
                isDeleted: S,
                isCancelled: A,
            }),
            null != T &&
                u?.benefits != null &&
                u.benefits.length > 0 &&
                (0, f.jsx)(AQ, { appId: T.id, listingBenefits: u.benefits }),
        ],
    });
}
function AH(e) {
    let { subscriptionPlan: t, invoicePreview: i } = e;
    if (null == t) return (0, f.jsx)(AW, { title: m.intl.string(m.t.KI7ERx), content: "" });
    let n = (0, dn.CE)((0, dn.$g)(t.price, t.currency), t.interval, t.intervalCount),
        s = i?.findInvoiceItemByPlanId(t.id);
    if (null == s) return (0, f.jsx)(AW, { title: m.intl.string(m.t.KI7ERx), content: n });
    let l = (0, dn.CE)((0, dn.$g)(s.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, f.jsx)(AW, {
        title: m.intl.string(m.t.KI7ERx),
        content: (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(k.E, { variant: "text-sm/semibold", children: l }),
                l !== n &&
                    (0, f.jsx)(e1.m, {
                        text: m.intl.format(m.t["6DoE57"], { listPrice: n }),
                        position: "bottom",
                        children: (0, f.jsx)(k.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, f.jsx)("s", { children: n }),
                        }),
                    }),
            ],
        }),
    });
}
function AK(e) {
    let { isCancelled: t, subscriptionPeriodEnd: i, renewalPlan: n } = e;
    if (null != n) {
        let e = (0, dn.CE)((0, dn.$g)(n.price, n.currency), n.interval, n.intervalCount);
        return (0, f.jsx)(AW, {
            title: m.intl.string(m.t.hIhAM3),
            content: (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(k.E, { variant: "text-sm/medium", children: i }),
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/normal",
                        children: m.intl.format(m.t.MCLbvj, { planName: n.name, price: e }),
                    }),
                ],
            }),
        });
    }
    return (0, f.jsx)(AW, { title: t ? m.intl.string(m.t.enxcAl) : m.intl.string(m.t["Ms+6Zq"]), content: i });
}
function AW(e) {
    let { title: t, content: i } = e;
    return (0, f.jsxs)("div", {
        className: Az.nM,
        children: [
            (0, f.jsx)(k.E, { variant: "text-sm/medium", children: t }),
            (0, f.jsx)(k.E, { variant: "text-sm/medium", className: Az.u4, children: i }),
        ],
    });
}
function AZ(e) {
    let { type: t, title: i } = e;
    return (0, f.jsx)(ta.p, {
        messageType: "warning" === t ? ta.Y.WARNING : ta.Y.ERROR,
        className: Az.Xm,
        children: (0, f.jsx)(k.E, { variant: "text-sm/normal", children: i }),
    });
}
function Aq(e) {
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
        c = (0, Aw.Se)(s),
        { analyticsLocations: g } = (0, nU.Ay)(),
        [A, h] = N.useState(!1),
        E = (0, AL.C)(t.id),
        T = (0, R.bG)([cE.A], () => cE.A.getParentSKU(n.skuId), [n.skuId]),
        x = N.useMemo(() => {
            var e, t;
            let i;
            return null == T
                ? []
                : ((e = n.id),
                  (t = E.subscriptions),
                  (i = new Set(T.bundledSkuIds)),
                  t.filter((t) => t.id !== e && i.has(t.skuId)));
        }, [n.id, E, T]),
        S = 0 !== x.length,
        p = async () => {
            try {
                h(!0);
                let { subscription: e } = await (0, u9.QP)(l, g);
                if (null == e) return;
                (0, C.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([i.e("47869"), i.e("52396")]).then(i.bind(i, 115623));
                    return (i) => (0, f.jsx)(t, { ...i, storeListing: n, subscription: AV.A.createFromServer(e) });
                });
            } finally {
                h(!1);
            }
        };
    return (0, f.jsxs)("div", {
        className: Az.fw,
        children: [
            c || (r && a)
                ? null
                : r
                  ? (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.QtMnkW),
                        onClick: p,
                        loading: A,
                    })
                  : (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t["E8G/tr"]),
                        onClick: () => {
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("1426"), i.e("22800")]).then(
                                    i.bind(i, 301139),
                                );
                                return (i) =>
                                    (0, f.jsx)(e, { ...i, application: t, storeListing: n, subscription: l, guild: o });
                            });
                        },
                    }),
            S &&
                null != T &&
                !1 === r &&
                !1 === a &&
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.R74ZBR),
                    onClick: () => {
                        d({
                            currentSubscription: l,
                            alternativeListings: x,
                            app: t,
                            subscriptionGroup: T,
                            currentListing: n,
                            renewalSkuId: u,
                        });
                    },
                }),
        ],
    });
}
function AQ(e) {
    let { appId: t, listingBenefits: i } = e;
    return (0, f.jsx)(AU, {
        children: (e) =>
            (0, f.jsxs)("div", {
                className: Az.PX,
                children: [
                    (0, f.jsxs)("div", {
                        className: Az.wV,
                        children: [
                            e && (0, f.jsx)(k.E, { variant: "text-sm/semibold", children: m.intl.string(m.t.mORL67) }),
                            (0, f.jsx)(AU.Toggle, {
                                className: Az.Bh,
                                text: e ? m.intl.string(m.t.gsbFAw) : m.intl.string(m.t.IwjfxV),
                            }),
                        ],
                    }),
                    e
                        ? i.map((e) => {
                              let { id: i, name: n, description: s, icon: l } = e;
                              return (0, f.jsx)(Av.FY, { header: n, icon: (0, AF.N)(t, l), description: s }, i);
                          })
                        : null,
                ],
            }),
    });
}
function AJ(e) {
    let { subscription: t, currentInvoicePreview: i, loadingState: n, isDeleted: s, isCancelled: l } = e;
    return null == i
        ? null
        : 0 === n
          ? (0, f.jsx)("div", {
                className: Az.Ji,
                children: (0, f.jsx)(sy.D, {
                    label: m.intl.string(m.t.azZaZa),
                    children: (0, f.jsx)(u4.y, { type: u4.t.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === n
            ? (0, f.jsx)("div", {
                  className: Az.Ji,
                  children: (0, f.jsxs)(AN.$T, {
                      color: AN.Hv.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          m.intl.format(m.t.IIHUUF, { subscriptionId: t.id }),
                          (0, f.jsx)("br", {}),
                          m.intl.format(m.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                      ],
                  }),
              })
            : (0, f.jsx)("div", {
                  className: Az.Ji,
                  children: (0, f.jsx)(sy.D, {
                      label: m.intl.string(m.t.azZaZa),
                      children: (0, f.jsx)(Ae.A, { subscription: t, currentInvoicePreview: i, disabled: s || l }),
                  }),
              });
}
var A$ = (((l = {}).HOME = "HOME"), (l.SWITCH_APP_PLANS = "SWITCH_APP_PLANS"), l);
i(938796);
var A0 = i(38405);
let A1 = (0, R.UT)(ch.A, {
    getQueryId: Q.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = ch.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && A0.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, c1.ur)(e).then(() => {}) : Promise.reject()
    ),
});
var A2 = i(240248),
    A3 = i(237218),
    A6 = i(988325);
function A4(e) {
    let { children: t, lineClamp: i = 2, ...n } = e,
        [s, l] = N.useState(!1),
        [r, a] = N.useState(null),
        o =
            null != r &&
            (0, f.jsx)("button", {
                className: A6.x6,
                onClick: () => l((e) => !e),
                children: (0, f.jsxs)(k.E, {
                    className: A6.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        s ? m.intl.string(m.t["JQX/Pb"]) : m.intl.string(m.t.Fbrd8J),
                        s
                            ? (0, f.jsx)(AD.t, { color: F.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, f.jsx)(w.a, { color: F.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [u, d] = N.useState(null),
        c = N.useCallback(() => {
            if (null == u) return;
            let { scrollHeight: e, clientHeight: t } = u;
            e > t && a({ truncatedHeight: t, expandedHeight: e });
        }, [u]);
    N.useEffect(() => {
        requestAnimationFrame(c);
    }, [c, t, i]);
    let g = "auto";
    return (
        null != r && (g = s ? `${r.expandedHeight}px` : `${r.truncatedHeight}px`),
        (0, f.jsxs)("div", {
            children: [
                (0, f.jsx)(k.E, {
                    ...n,
                    className: A6.Qs,
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
var A5 = i(827991);
function A8(e) {
    let { cta: t, storeListing: i, className: n } = e,
        { applicationId: s, benefits: l, description: r } = i,
        a = N.useMemo(() => (null == i.thumbnail ? null : (0, A3.t)(s, i.thumbnail, 256)), [s, i.thumbnail]),
        { data: o } = A1(i.skuId),
        u = N.useMemo(() => {
            if (null == o || 0 === o.length) return null;
            let e = o[0];
            return (0, dn._J)(e);
        }, [o]);
    return null == u
        ? null
        : (0, f.jsxs)(Ab, {
              className: eF()(A5.iE, n),
              header: (0, f.jsxs)(f.Fragment, {
                  children: [
                      (0, f.jsxs)("div", {
                          className: A5.qd,
                          children: [
                              null != a &&
                                  (0, f.jsx)(Aj._, { src: a.href, imageClassName: A5.rW, width: 48, height: 48 }),
                              (0, f.jsxs)("div", {
                                  children: [
                                      (0, f.jsx)(eh.D, { variant: "heading-md/bold", children: i.summary }),
                                      (0, f.jsx)(k.E, { variant: "text-md/medium", children: u }),
                                  ],
                              }),
                          ],
                      }),
                      t,
                  ],
              }),
              children: [
                  !(0, A2.uJ)(r) &&
                      (0, f.jsx)("div", {
                          className: A5.h_,
                          children: (0, f.jsx)(A4, { variant: "text-sm/medium", children: r }),
                      }),
                  null != l &&
                      l.length > 0 &&
                      (0, f.jsx)("div", {
                          className: A5.PX,
                          children: l.map((e) => {
                              let { id: t, name: i, description: n, icon: l } = e;
                              return (0, f.jsx)(Av.FY, { header: i, icon: (0, AF.N)(s, l), description: n }, t);
                          }),
                      }),
              ],
          });
}
var A7 = i(185438),
    A9 = i(386011);
function he(e) {
    let {
            app: t,
            currentSubscription: i,
            currentListing: n,
            alternativeListings: s,
            navigateToHome: l,
            subscriptionGroup: r,
            renewalSkuId: a,
        } = e,
        o = (0, AR.A)(t, 100),
        u = (0, Aw.PJ)(r.flags),
        d = u ? Ay.R : AO.n,
        c = u ? m.intl.string(m.t["46YF2D"]) : m.intl.string(m.t.fFyGiA),
        g = i.metadata?.application_subscription_guild_id,
        A = (0, R.bG)([K.A], () => (u && null != g ? K.A.getGuild(g) : void 0), [g, u]),
        h = (0, R.bG)([cE.A], () => {
            if (null != a) return cE.A.get(a);
        }, [a]),
        E = AB(i.currentPeriodEnd);
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsxs)("div", {
                className: A9.wx,
                children: [
                    null != o && (0, f.jsx)(Aj._, { src: o.href, imageClassName: A9.Z2, width: 48, height: 48 }),
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)(eh.D, { variant: "heading-xl/semibold", children: t.name }),
                            (0, f.jsxs)("div", {
                                className: A9.p4,
                                children: [
                                    (0, f.jsxs)(eh.D, {
                                        variant: "heading-md/normal",
                                        className: A9.N4,
                                        children: [(0, f.jsx)(d, { size: "xs", color: "currentColor" }), " ", c],
                                    }),
                                    null != A &&
                                        (0, f.jsxs)(f.Fragment, {
                                            children: [
                                                (0, f.jsx)(k.E, { variant: "text-md/normal", children: "\u2022" }),
                                                (0, f.jsxs)("span", {
                                                    className: A9.vP,
                                                    children: [
                                                        (0, f.jsx)(gP.Ay, { guild: A, size: gP.Ay.Sizes.SMOL }),
                                                        (0, f.jsx)(eh.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-muted",
                                                            children: m.intl.format(m.t["7ZD8p1"], {
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
            (0, f.jsx)(AU, {
                children: (e) =>
                    (0, f.jsxs)("div", {
                        className: A9._B,
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/normal", children: m.intl.string(m.t["goe+hk"]) }),
                            e &&
                                (0, f.jsxs)(f.Fragment, {
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: m.intl.format(m.t["Q8qJ+5"], {}),
                                        }),
                                        (0, f.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            children: m.intl.format(m.t.sqowYz, {}),
                                        }),
                                    ],
                                }),
                            (0, f.jsx)(AU.Toggle, {
                                text: e ? m.intl.string(m.t["1Rkq/E"]) : m.intl.string(m.t.WsTHkY),
                            }),
                        ],
                    }),
            }),
            (0, f.jsxs)("div", {
                className: A9.x0,
                children: [
                    (0, f.jsx)(A8, {
                        storeListing: n,
                        className: A9.o3,
                        cta: (0, f.jsxs)("div", {
                            className: A9.cJ,
                            children: [
                                (0, f.jsx)(k.E, {
                                    variant: "eyebrow",
                                    color: "text-brand",
                                    children: m.intl.string(m.t.fHIpOY),
                                }),
                                null != h &&
                                    (0, f.jsx)(k.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["OQk+jr"], { endDate: E }),
                                    }),
                            ],
                        }),
                    }),
                    s.map((e) =>
                        e.skuId === a
                            ? (0, f.jsx)(
                                  A8,
                                  {
                                      storeListing: e,
                                      cta: (0, f.jsx)(k.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: m.intl.format(m.t.nn88hB, { startDate: E }),
                                      }),
                                  },
                                  e.id,
                              )
                            : (0, f.jsx)(ht, { storeListing: e, guildId: g, navigateToHome: l }, e.id),
                    ),
                ],
            }),
        ],
    });
}
function ht(e) {
    let { storeListing: t, guildId: i, navigateToHome: n } = e,
        { openModal: s } = (0, A7.A)({
            analyticsLocation: Q.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId,
            initialSubscribeForGuild: i,
            disableGuildSelector: !0,
            onComplete: n,
        });
    return (0, f.jsx)(A8, {
        storeListing: t,
        cta: (0, f.jsx)(eE.$, { variant: "primary", size: "sm", text: m.intl.string(m.t["+KwmBt"]), onClick: s }),
    });
}
class hi extends N.PureComponent {
    state = { hasError: !1 };
    static getDerivedStateFromError(e) {
        return { hasError: !0 };
    }
    render() {
        return this.state.hasError
            ? (0, f.jsxs)(AN.$T, {
                  color: AN.Hv.DANGER,
                  style: { borderRadius: 0 },
                  children: [
                      m.intl.format(m.t.IIHUUF, { subscriptionId: this.props.subscription.id }),
                      " ",
                      m.intl.format(m.t.fh65ES, { helpLink: "https://support.discord.com/hc/en-us" }),
                  ],
              })
            : this.props.children;
    }
}
function hn(e) {
    let { subscriptions: t, updateHeader: i } = e,
        [n, s] = N.useState({ route: A$.HOME }),
        { route: l } = n,
        r = () => {
            s({ route: A$.HOME });
        },
        a = (e) => {
            s({ route: A$.SWITCH_APP_PLANS, ...e }), i(m.intl.string(m.t.VFqtkP), r);
        },
        [o, u] = N.useState({});
    N.useEffect(() => {
        for (let e of t) {
            let t = e.items[0]?.planId;
            null != t &&
                (u((t) => ({ ...t, [e.id]: AY.LOADING })),
                (0, A_._R)(t)
                    .then(() => {
                        u((t) => ({ ...t, [e.id]: AY.DONE }));
                    })
                    .catch(() => {
                        u((t) => ({ ...t, [e.id]: AY.ERROR }));
                    }));
        }
    }, [t]);
    let { loadState: d } = (0, AC.E)(),
        c = d !== AC.mJ.LOADED;
    switch (l) {
        case A$.HOME:
            return (0, f.jsx)(f.Fragment, {
                children: t.map((e) =>
                    (0, f.jsx)(
                        hi,
                        {
                            subscription: e,
                            children: (0, f.jsx)(AX, {
                                subscription: e,
                                navigateToSwitchPlan: a,
                                loadingState: c ? AY.LOADING : (o[e.id] ?? AY.LOADING),
                            }),
                        },
                        e.id,
                    ),
                ),
            });
        case A$.SWITCH_APP_PLANS:
            let { route: g, ...A } = n;
            return (0, f.jsx)(he, { ...A, navigateToHome: r });
        default:
            (0, t4.xb)(l);
    }
}
var hs = i(470464);
function hl(e) {
    let { onGoBack: t } = e,
        i = (0, R.yK)(
            [dR.A],
            () =>
                dR.A.getActiveApplicationSubscriptions()
                    ?.slice()
                    .sort(
                        (e, t) =>
                            (e.createdAt?.getTime() ?? e.currentPeriodStart.getTime()) -
                            (t.createdAt?.getTime() ?? t.currentPeriodStart.getTime()),
                    ) ?? [],
        ),
        [n, s] = N.useState();
    return (
        null == n && (n = (0, f.jsx)(hr, { onBack: t, title: m.intl.string(m.t["DB/m9a"]) })),
        (0, f.jsxs)("div", {
            children: [
                n,
                (0, f.jsx)("div", {
                    className: hs.A,
                    children: (0, f.jsx)(hn, {
                        subscriptions: i,
                        updateHeader: (e, t) => {
                            s(
                                (0, f.jsx)(hr, {
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
function hr(e) {
    let { onBack: t, title: i } = e;
    return (0, f.jsxs)("div", {
        className: hs.D,
        children: [
            (0, f.jsx)(lp.K, {
                "aria-label": m.intl.string(m.t["13/7kX"]),
                icon: () => (0, f.jsx)(Af.Z, { size: "sm" }),
                onClick: t,
                variant: "icon-only",
            }),
            (0, f.jsx)(eh.D, { variant: "heading-lg/semibold", children: i }),
        ],
    });
}
var ha = i(366999),
    ho = i(466919),
    hu = i(441924);
function hd(e) {
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
        ? ((t = m.intl.string(ho.default["/S02sx"])), (i = m.intl.string(ho.default.OPJNST)))
        : n
          ? ((t = m.intl.string(m.t["hT6i/0"])),
            (i = null != a ? m.intl.format(m.t["0Vwb/l"], { activateDate: a }) : null))
          : ((t = m.intl.string(m.t["3G0CTC"])),
            (i = r === sf.xc.FP_SUB_PAUSED ? m.intl.format(m.t.MMvaIG, { resumeDate: l.toDate() }) : null));
    let u = eF()({ [hu.Hs]: n, [hu.mT]: !n }),
        d = eF()({ [hu.CQ]: n, [hu.ZM]: !n }),
        c = eF()({ [hu.EM]: !n });
    return (0, f.jsxs)("div", {
        className: hu.r6,
        children: [
            (0, f.jsxs)("div", {
                className: hu.Nv,
                children: [
                    (0, f.jsx)(eh.D, { variant: "heading-md/semibold", className: c, children: t }),
                    null !== i && (0, f.jsx)(k.E, { variant: "text-sm/normal", children: i }),
                ],
            }),
            !o &&
                (0, f.jsx)("div", {
                    className: hu.ZS,
                    children: (0, f.jsx)("div", {
                        className: u,
                        children: (0, f.jsx)(k.E, { variant: "text-sm/semibold", className: d, children: s }),
                    }),
                }),
        ],
    });
}
let hc = function (e) {
    let { fractionalPremiumInfo: t, className: i, activationDate: n, hasPremiumGroup: s } = e,
        l = (0, o6.kX)(t),
        r = l.length > 0,
        a = (0, ha.Ay)(t.endsAt, ha.yE.SHORT_TIME),
        o = r ? l : a;
    return (0, f.jsx)("div", {
        children: (0, f.jsxs)("div", {
            className: eF()(i, hu.f8),
            children: [
                (0, f.jsx)("div", {
                    className: hu.J_,
                    children: (0, f.jsxs)("div", {
                        className: hu.Bh,
                        children: [
                            (0, f.jsx)("div", {
                                className: hu.xt,
                                children: (0, f.jsx)(oZ.t, { size: "md", color: "white", className: hu.T8 }),
                            }),
                            (0, f.jsx)("div", {
                                className: hu.pt,
                                children: (0, f.jsx)(eh.D, {
                                    variant: "heading-md/semibold",
                                    children: m.intl.string(m.t.DFMPWS),
                                }),
                            }),
                            (0, f.jsx)(k.E, {
                                className: hu.PJ,
                                variant: "text-md/semibold",
                                children: l.length > 0 ? l : m.intl.string(m.t["B66Z+f"]),
                            }),
                        ],
                    }),
                }),
                (0, f.jsx)(hd, {
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
var hg = i(868942);
function hm(e) {
    let t,
        {
            user: i,
            planId: n,
            count: s,
            userPremiumSubscription: l,
            unconsumedFractionalPremiumUnits: r = [],
            hasPremiumGroup: a,
        } = e,
        [o, u] = (0, R.yK)([ch.A], () => [ch.A.get(n), null != l ? ch.A.get(l.planId) : null]);
    if (null == o || o6.Ay.getInterval(n).intervalType !== sf.WT.MONTH) return null;
    let d = null != u ? u.skuId : null,
        c = o.skuId === d,
        g = o6.Ay.getDisplayName(n);
    if (a) t = m.intl.string(ho.default["5asczk"]);
    else if (c && null != l) {
        let e;
        e = new Date(l.status === Q.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd);
        let i = (0, o6._e)(e, r);
        t = m.intl.formatToPlainString(m.t["5CNRRA"], { date: i ?? 0 });
    } else t = m.intl.formatToPlainString(m.t.eNXZ5O, { planName: g });
    let A = i.hasFreePremium() || (null != l && l.isPurchasedExternally);
    return (0, f.jsxs)("div", {
        className: hu.Bh,
        children: [
            (0, f.jsx)("div", {
                className: eF()({
                    [hu.sr]: o.skuId === sf.pe.TIER_0,
                    [hu.lP]: o.skuId === sf.pe.TIER_1,
                    [hu.eb]: o.skuId === sf.pe.TIER_2,
                }),
                children: (0, f.jsx)(oZ.t, { size: "md", color: "currentColor", className: hu.Kk }),
            }),
            (0, f.jsxs)("div", {
                className: hu.pt,
                children: [
                    (0, f.jsx)(eh.D, {
                        variant: "heading-md/semibold",
                        children: m.intl.format(m.t.LzobT9, { planName: g }),
                    }),
                    !A &&
                        (0, f.jsx)(eh.D, {
                            className: hu.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, f.jsx)(k.E, {
                className: hu.PJ,
                variant: "text-md/semibold",
                children: m.intl.format(m.t["ess/xl"], { count: s }),
            }),
        ],
    });
}
let hA = function (e) {
    let { className: t, entitlements: i } = e,
        n = eL()(Array.from(i))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: i, consumed: n } = e;
                return null != t && null != i && !n;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, R.yK)([cs.A], () => cs.A.getUnactivatedFractionalPremiumUnits()),
        l = (0, R.bG)([dR.A], () => dR.A.getPremiumSubscription()),
        r = (0, R.bG)([dR.A], () => null == dR.A.getPremiumTypeSubscription()),
        a = Object.keys(n).some((e) => e === sf.gD.PREMIUM_MONTH_TIER_1),
        o = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    if (null == o) return null;
    let u = o.isPremiumWithPremiumGroup();
    return (0, f.jsxs)("div", {
        children: [
            (0, f.jsx)("div", {
                className: eF()(t, hu.xF, hu.J_),
                children: Object.keys(n).map((e) =>
                    (0, f.jsx)(
                        hm,
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
                (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(k.E, {
                            className: hu.eT,
                            variant: "text-md/normal",
                            children: m.intl.string(m.t["VNr4+O"]),
                        }),
                        (0, f.jsx)(hg.i, {}),
                    ],
                }),
        ],
    });
};
var hh = i(50919);
function hE(e) {
    let t,
        { subscription: i, withOverheadSeparator: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        [l] = (0, m9.YV)({
            subscriptionId: i.id,
            renewal: !0,
            analyticsLocations: s,
            analyticsLocation: eV.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT,
        });
    if (null == l) return null;
    let r = n ? hh.r : hh.a,
        a = l.invoiceItems.find((e) => {
            let { subscriptionPlanId: t } = e;
            return (0, o6.xq)(t);
        });
    if (null == a) return null;
    let o = a.subscriptionPlanId,
        u = ch.A.get(o);
    tO()(null != u, "Missing plan");
    let d = (0, dn.$g)(l.total, l.currency);
    return (
        u.interval === sf.WT.YEAR
            ? (t = m.intl.format(m.t["jPz/39"], {
                  price: d,
                  termsUrl: Q.X7G.TERMS,
                  paidURL: Q.X7G.PAID_TERMS,
                  privacyUrl: Q.X7G.PRIVACY,
              }))
            : u.interval === sf.WT.MONTH &&
              (t =
                  1 === u.intervalCount
                      ? m.intl.format(m.t.m27GpI, {
                            price: d,
                            termsUrl: Q.X7G.TERMS,
                            paidURL: Q.X7G.PAID_TERMS,
                            privacyUrl: Q.X7G.PRIVACY,
                        })
                      : m.intl.format(m.t["9xf5Vx"], {
                            price: d,
                            termsUrl: Q.X7G.TERMS,
                            paidURL: Q.X7G.PAID_TERMS,
                            privacyUrl: Q.X7G.PRIVACY,
                            intervalCount: u.intervalCount,
                        })),
        (0, f.jsx)(k.E, { color: "text-muted", className: r, variant: "text-xs/normal", children: t })
    );
}
function hT(e) {
    let { subscription: t, withOverheadSeparator: i } = e;
    return t.status === Q.Dmq.CANCELED || t.isPurchasedExternally
        ? null
        : (0, f.jsx)(hE, { subscription: t, withOverheadSeparator: i });
}
var hx = i(735912),
    hS = i(558808);
let hp = { [nv.nR]: "role_subscriptions_panel", [nv.PZ]: "application_subscriptions_panel" };
function hf() {
    return (0, f.jsx)(ea.Z, {
        className: hS.wb,
        type: ea.Z.Types.CUSTOM,
        children: (0, f.jsxs)(lM.A, {
            align: lM.A.Align.CENTER,
            children: [
                (0, f.jsx)(e7.A, { game: null, size: e7.M.SMALL, className: hS.pV }),
                (0, f.jsx)("span", { className: hS.O, children: m.intl.string(m.t["jy/hyj"]) }),
            ],
        }),
    });
}
function hN(e, t) {
    return e === t || (null == e && null == t) || (null != e && null != t && (0, mW._)(e, t));
}
function h_() {
    let e = (0, R.bG)([cs.A], () => cs.A.getForApplication(sf.tv), [], hN);
    return (
        N.useEffect(() => {
            (0, cb.LM)(sf.tv);
        }, []),
        (0, f.jsx)(io.n, {
            label: m.intl.string(m.t["2GKrvn"]),
            description: m.intl.string(m.t.kNEjGm),
            children:
                null != e && o6.Ay.hasAccountCredit(e)
                    ? (0, f.jsx)(hA, { className: hS.fX, entitlements: e })
                    : (0, f.jsx)(hf, {}),
        })
    );
}
function hC() {
    return (0, f.jsx)("hr", { className: hS.hr });
}
let hI = function () {
        var e;
        let t = (0, R.bG)([dR.A], () => dR.A.getPremiumTypeSubscription()),
            i = (0, mZ.A)({ subscriptionFilter: (e) => hx.Hy.has(e.status) }),
            n = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            s = i.length > 1,
            l = (0, R.bG)(
                [dO.A],
                () => (null != t && null != t.paymentSourceId ? dO.A.getPaymentSource(t.paymentSourceId) : null),
                [t],
            ),
            r = (0, R.bG)([dR.A], () => dR.A.hasFetchedSubscriptions()),
            a = (0, R.bG)([di.A], () => di.A.isBusy),
            o = (0, c2.Y)(),
            u = At.A.useField("subsection");
        N.useEffect(() => {
            (0, rf._)(null != u ? hp[u] : d.X.SUBSCRIPTIONS_PANEL);
        }, [u]);
        let c = (0, R.bG)([dR.A], () => dR.A.getActiveApplicationSubscriptions()?.length ?? 0),
            g = (0, R.bG)(
                [dR.A],
                () =>
                    Object.values(dR.A.getSubscriptions() ?? {})
                        .filter((e) => e.type === Q.rzx.GUILD)
                        .filter((e) => e.status !== Q.Dmq.ENDED).length,
            ),
            A = (0, c4.A)({ forceFetch: !0 }),
            h = (0, cR.ds)(),
            E = null !== t ? t.currentPeriodEnd : void 0,
            T =
                !(h && !(A.unactivatedUnits.length > 0)) &&
                (A.fractionalState !== sf.xc.NONE || A.unactivatedUnits.length > 0);
        return (N.useEffect(
            () => (
                n6.h.wait(() => {
                    (0, c1.zS)(), u9.hP(), (0, c0.CD)(), u9.$o();
                }),
                function () {
                    At.A.resetState();
                }
            ),
            [],
        ),
        eC.A.enabled)
            ? (0, f.jsx)(u2.A, {})
            : r && o
              ? u === nv.nR
                  ? (0, f.jsx)(AT, { onGoBack: () => At.A.setState({ subsection: null }) })
                  : u === nv.PZ
                    ? (0, f.jsx)(hl, { onGoBack: () => At.A.setState({ subsection: null }) })
                    : (0, f.jsx)("div", {
                          className: hS.kL,
                          children: (0, f.jsxs)("div", {
                              className: hS.Qs,
                              children: [
                                  s ? (0, f.jsx)(hx.Sb, {}) : null,
                                  null != t
                                      ? (0, f.jsx)(hx.Ay, {
                                            subscription: t,
                                            paymentSource: l,
                                            busy: a,
                                            subscriptions: i,
                                        })
                                      : (0, f.jsx)(hx.TC, {}),
                                  T &&
                                      ((e = !!n?.isPremiumWithPremiumGroup()),
                                      (0, f.jsxs)("section", {
                                          children: [
                                              (0, f.jsx)(eh.D, {
                                                  variant: "heading-md/bold",
                                                  className: hS.HL,
                                                  children: m.intl.string(m.t.Obre8v),
                                              }),
                                              (0, f.jsx)(k.E, {
                                                  variant: "text-md/normal",
                                                  className: hS.JU,
                                                  children: m.intl.format(m.t["7Zi06b"], {
                                                      helpCenterLink: to.A.getArticleURL(
                                                          Q.MVz.FRACTIONAL_PREMIUM_ABOUT,
                                                      ),
                                                  }),
                                              }),
                                              (0, f.jsx)(hc, {
                                                  className: hS.fX,
                                                  fractionalPremiumInfo: A,
                                                  activationDate: E,
                                                  hasPremiumGroup: e,
                                              }),
                                          ],
                                      })),
                                  (0, f.jsx)(h_, {}),
                                  g > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(hC, {}),
                                              (0, f.jsx)(mJ, {
                                                  count: g,
                                                  onClickManageSubscription: () => At.A.setState({ subsection: nv.nR }),
                                              }),
                                          ],
                                      }),
                                  c > 0 &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(hC, {}),
                                              (0, f.jsx)(Ap, {
                                                  count: c,
                                                  onClickManageSubscription: () => {
                                                      At.A.setState({ subsection: nv.PZ }),
                                                          X.default.track(
                                                              Q.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED,
                                                          );
                                                  },
                                              }),
                                          ],
                                      }),
                                  (0, f.jsx)(hC, {}),
                                  null != t ? (0, f.jsx)(hT, { subscription: t, withOverheadSeparator: !1 }) : null,
                              ],
                          }),
                      })
              : (0, f.jsx)("div", { className: eF()(hS.kL, hS.Lq), children: (0, f.jsx)(u4.y, {}) });
    },
    hb = (0, o.E2)(d.X.SUBSCRIPTIONS_SETTINGS, {
        useSearchTerms: () => [m.intl.string(m.t.trSpHX), m.intl.string(m.t["2GKrvn"])],
        Component: () => (0, f.jsx)(hI, {}),
    }),
    hv = (0, o.zZ)(d.X.SUBSCRIPTIONS_CATEGORY, {
        useSearchTerms: () => [m.intl.string(m.t.trSpHX), m.intl.string(m.t["2GKrvn"])],
        buildLayout: () => [hb],
    }),
    hj = (0, o.t_)(d.X.SUBSCRIPTIONS_PANEL, { useTitle: () => m.intl.string(m.t.trSpHX), buildLayout: () => [hv] }),
    hy = (0, o.i4)(d.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.trSpHX),
        icon: mH.L,
        usePersistentBadge: function () {
            return N.useMemo(
                () => ({
                    badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
                    useCustomBadge: () =>
                        (0, mK.l)() ? (0, f.jsx)(lb.E, { size: "xs", color: F.A.unsafe_rawColors.YELLOW_300 }) : null,
                }),
                [],
            );
        },
        buildLayout: () => [hj],
    }),
    hO = (0, o.WI)(d.X.BILLING_SECTION, {
        useTitle: () => m.intl.string(m.t.oeUm2s),
        buildLayout: () => [cJ, mX, hy, cY, dB],
    });
var hR = i(540999),
    hL = i(306471),
    hD = i(964355),
    hP = i(172272);
let hG = (0, o.zD)(d.X.AXE_AUDITING, {
        useTitle: () => "Enable Accessibility Auditing",
        useSubtitle: () =>
            "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development.",
        usePredicate: () => !1,
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isAxeEnabled),
        setValue: (e) => (0, a3.x)({ axeEnabled: e }),
    }),
    hU = (0, o.zD)(d.X.CSS_DEBUGGING, {
        useTitle: () => "Enable CSS Debugging",
        useSubtitle: () => "Display raw colors as pink. Toggling this will refresh the browser.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.cssDebuggingEnabled),
        setValue: (e) => {
            (0, a3.x)({ cssDebuggingEnabled: e }).then(() => {
                setTimeout(() => location.reload(), 500);
            });
        },
    });
var hM = i(276086),
    hV = i(354328);
let hk = (0, o.zD)(d.X.HIGHLIGHT_MANA_COMPONENTS, {
        useTitle: () => "Highlight Mana Components",
        useSubtitle: () => "Highlights all Mana design system components for easier debugging.",
        useValue: () => (0, hV.A)("highlight_mana_components"),
        setValue: (e) => {
            (0, hM.L)("highlight_mana_components", e);
        },
    }),
    hw = (0, o.zD)(d.X.HIGHLIGHT_VOID_COMPONENTS, {
        useTitle: () => "Highlight Deprecated Void Components",
        useSubtitle: () =>
            "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue).",
        useValue: () => (0, hV.A)("highlight_void_toggleables"),
        setValue: (e) => {
            (0, hM.L)("highlight_void_toggleables", e);
        },
    }),
    hF = (0, o.sN)(d.X.LAYOUT_DEBUGGING_HORIZONTAL_SPACING, {
        useTitle: () => "Horizontal Grid Spacing",
        useSubtitle: () =>
            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
        usePredicate: () => (0, R.bG)([a6.default], () => a6.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hP.YR,
        markers: Array.from({ length: hP.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hP.Or.getState().horizontalSpacing,
        asValueChanges: (e) => {
            hP.Or.getState().setHorizontalSpacing(e);
        },
    }),
    hB = (0, o.zD)(d.X.LAYOUT_DEBUGGING, {
        useTitle: () => "Enable Layout Debugging",
        useSubtitle: () => "Renders a grid on top of the app to help debug layout alignment issues.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.layoutDebuggingEnabled),
        setValue: (e) => {
            (0, a3.x)({ layoutDebuggingEnabled: e });
        },
    }),
    hz = (0, o.sN)(d.X.LAYOUT_DEBUGGING_VERTICAL_SPACING, {
        useTitle: () => "Vertical Grid Spacing",
        useSubtitle: () => "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
        usePredicate: () => (0, R.bG)([a6.default], () => a6.default.layoutDebuggingEnabled),
        minValue: 0,
        maxValue: hP.YR,
        markers: Array.from({ length: hP.YR + 1 }, (e, t) => t),
        onValueRender: (e) => `${Math.round(e)}px`,
        onMarkerRender: (e) => (e % 4 == 0 ? `${e}` : void 0),
        getInitialValue: () => hP.Or.getState().verticalSpacing,
        asValueChanges: (e) => {
            hP.Or.getState().setVerticalSpacing(e);
        },
    }),
    hY = (0, o.zZ)(d.X.DESIGN_TOOLS, {
        useTitle: () => "Design & A11y Tools",
        useSearchTerms: () => ["accessibility tools"],
        buildLayout: () => [hU, hB, hF, hz, hk, hw, hG],
    }),
    hX = (0, o.zD)(d.X.AD_OVERRIDE, {
        useTitle: () => "Always Deliver Ads",
        useSubtitle: () => "Makes the user targetable for all active ads.",
        useValue: () => g.HZ.useSetting(),
        setValue: (e) => {
            g.HZ.updateSetting(e);
        },
    });
var hH = i(173936),
    hK = i(260598),
    hW = i(148810),
    hZ = i(380610),
    hq = i(986238),
    hQ = i(727201),
    hJ = i(274446);
let h$ = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    h0 = [
        { id: "branch", value: "branch", label: "Branch Name" },
        { id: "id", value: "id", label: "Commit SHA" },
    ];
function h1(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class h2 extends N.Component {
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
        return (0, f.jsxs)(lM.A, {
            direction: lM.A.Direction.VERTICAL,
            className: eF()(hQ.oS, iI.SX, hJ.N, hQ.nM),
            children: [
                (0, f.jsx)(ih.A, {
                    className: eF()(hQ.lL, { [hQ.zi]: n }),
                    onClick: n ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, f.jsxs)(lM.A, {
                    className: iI.QB,
                    children: [
                        (0, f.jsx)(lM.A.Child, {
                            basis: "50%",
                            children: (0, f.jsx)(lS.l, {
                                selectionMode: "single",
                                label: "Override Type",
                                options: h0,
                                onSelectionChange: this.handleOverrideTypeChanged,
                                value: t,
                                disabled: n,
                            }),
                        }),
                        (0, f.jsx)(lM.A.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, f.jsx)(lD.k, {
                                label: "branch" === t ? "Branch Name" : "Commit SHA",
                                value: i,
                                onChange: this.handleOverrideIdChanged,
                                disabled: n,
                            }),
                        }),
                    ],
                }),
                (0, f.jsxs)(lM.A.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, f.jsx)(k.E, {
                                className: hQ.AS,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: s,
                            }),
                        (0, f.jsxs)(k.E, {
                            variant: "text-sm/normal",
                            className: hQ.AS,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, f.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
class h3 extends N.Component {
    state = { loading: !0, buildOverrides: {}, loadedBuildOverrides: {}, errors: {}, saving: !1, didSave: !1 };
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, hZ.bD)();
        this.setState({ loading: !1, buildOverrides: e, loadedBuildOverrides: eL().cloneDeep(e), errors: {} });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !eL().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return eL().without(h$, ...t);
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
        this.setState({ buildOverrides: eL().cloneDeep(this.state.loadedBuildOverrides), errors: {}, didSave: !1 });
    };
    handleSaveChanges = async () => {
        let { buildOverrides: e } = this.state;
        if (null == e) return;
        this.setState({ saving: !0 });
        let t = await (0, hW.Zk)(e);
        if (200 === t.status) {
            let e = t.body;
            this.setState({
                buildOverrides: e,
                loadedBuildOverrides: eL().cloneDeep(e),
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
        (0, C.openModal)((t) => (0, f.jsx)(h6, { ...t, buildOverrides: e }));
    };
    renderEmpty() {
        return (0, f.jsx)(ia.pp, {
            theme: id.A.theme,
            className: eF()(iI.eT, iI.SX),
            children: (0, f.jsx)(ia.SG, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: i } = this.state;
        return null == e
            ? null
            : eL().map(e, (e, n) =>
                  (0, f.jsx)(
                      h2,
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
            : (0, f.jsx)(eE.$, { variant: "secondary", text: "Reload App", onClick: () => location.reload() });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, f.jsx)(e1.m, {
                  text: "Generate Public Link",
                  children: (0, f.jsx)(lp.K, {
                      variant: "secondary",
                      icon: hH.q,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(eE.$, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: h1(t ?? {}),
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
            ? (0, f.jsx)(u4.y, { className: iI.QX })
            : null != n && 0 === Object.keys(n).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !i && !t && this.getAvailableProjects().length > 0,
            l =
                h1(n ?? {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, f.jsx)(k.E, {
                          color: "text-feedback-critical",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, f.jsx)(io.n, {
            children: (0, f.jsxs)(L.B, {
                gap: 16,
                children: [
                    (0, f.jsx)(lS.l, {
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
                    (0, f.jsxs)(aB.e, {
                        justify: "end",
                        children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                    }),
                ],
            }),
        });
    }
}
class h6 extends N.Component {
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
        e.key === iT.dh.ENTER && this.handleAddAllowedVersion();
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
            t = await (0, hW.SB)(e);
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
        return h1(this.props.buildOverrides ?? {});
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
            d = hq.fL.find((t) => t.value === e),
            c = s.map((e) => ({ id: e, label: e, value: e }));
        return (0, f.jsxs)(L.B, {
            gap: 20,
            children: [
                (0, f.jsx)(lS.l, {
                    selectionMode: "single",
                    label: "Expire After",
                    value: null != d ? d.value : void 0,
                    options: hq.fL,
                    onSelectionChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, f.jsx)(lS.l, {
                          selectionMode: "single",
                          label: "Release Channel",
                          value: t,
                          options: hq.VP,
                          onSelectionChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, f.jsxs)(L.B, {
                          gap: 20,
                          children: [
                              (0, f.jsx)(lD.k, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: l,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: r,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: { icon: r8.j, onClick: this.handleAddAllowedVersion, "aria-label": "Add" },
                              }),
                              (0, f.jsx)(lS.l, {
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
                    : (0, f.jsx)(hK.f, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: i,
                          error: n,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, f.jsx)(hK.f, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: o,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, f.jsx)(D.d, { label: "Allow logged out users", checked: a, onChange: this.handleAllowLoggedOut }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, f.jsx)("div", {});
        let i = ta.Y.INFO;
        switch (t) {
            case 0:
                i = ta.Y.ERROR;
                break;
            case 1:
                i = ta.Y.WARNING;
        }
        return (0, f.jsx)(ta.p, { messageType: i, children: e });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: i } = this.state;
        return (0, f.jsx)(lL.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, f.jsx)(d7.A, { value: i }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [{ variant: "primary", text: "Generate Link", onClick: this.handleGenerateLink }],
            onClose: e,
            children: this.renderSettingsForm(),
        });
    }
}
let h4 = (0, o.E2)(d.X.BUILD_OVERRIDES, { useSearchTerms: () => ["build overrides"], Component: h3 });
var h5 = i(256311),
    h8 = i(883600);
let h7 = (0, o.E2)(d.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, R.bG)([h8.A], () => h8.A.overrideId()),
            t = async (e) => {
                let t = h8.A.getChangelog(e, "en-US");
                return null != t ? t : ((await h5.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, f.jsx)(Em, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => h5.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
var h9 = i(506774);
let Ee = new Date("2018-01-01"),
    Et = (0, o.Tf)(d.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => g.pK.useSetting() === dl.default.fromTimestamp(Ee.getTime()),
        onClick: () => (h9.w.set("lastChangeLogDate", Ee), g.pK.updateSetting(dl.default.fromTimestamp(Ee.getTime()))),
    }),
    Ei = (0, o.zD)(d.X.DISABLE_APP_COLLECTIONS_CACHE, {
        useTitle: () => "Disable Application Collections Cache",
        useSubtitle: () => "Forces application collection updates to be shown immediately.",
        useDisabled: () => (0, R.bG)([a6.default], () => a6.default.onlyShowPreviewAppCollections),
        useValue: () =>
            (0, R.bG)(
                [a6.default],
                () => a6.default.disableAppCollectionsCache || a6.default.onlyShowPreviewAppCollections,
            ),
        setValue: (e) => (0, a3.x)({ disableAppCollectionsCache: e }),
    }),
    En = (0, o.zD)(d.X.FORCE_CANARY_API, {
        useTitle: () => "Force Canary API",
        useSubtitle: () => "Routes all API requests to Canary instances.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isForcedCanary),
        setValue: (e) => {
            (0, a3.x)({ canary: e });
        },
    }),
    Es = (0, o.zD)(d.X.LOAD_SOURCE_MAPS, {
        useTitle: () => "Load Source Maps",
        useSubtitle: () => "Downloads source maps on this client. Only enable on devices you trust.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.sourceMapsEnabled),
        setValue: (e) => (0, a3.x)({ sourceMapsEnabled: e }),
    }),
    El = (0, o.zD)(d.X.ONLY_SHOW_PREVIEW_APP_COLLECTIONS, {
        useTitle: () => "Only Show Preview App Collections",
        useSubtitle: () =>
            "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.onlyShowPreviewAppCollections),
        setValue: (e) => (0, a3.x)({ onlyShowPreviewAppCollections: e }),
    });
var Er = i(10094),
    Ea = i(683760);
let Eo = [
        { id: "none", label: "Non-Nitro", value: 0 },
        { id: "tier_0", label: "Nitro Basic", value: sf.PremiumTypes.TIER_0 },
        { id: "tier_1", label: "Nitro Classic", value: sf.PremiumTypes.TIER_1 },
        { id: "tier_2", label: "Nitro Standard", value: sf.PremiumTypes.TIER_2 },
    ],
    Eu = (0, o.Hn)(d.X.PREMIUM_TYPE_OVERRIDE, {
        useTitle: () => "Premium Type Override",
        useSearchTerms: () => ["nitro override"],
        useSubtitle: () => "Overrides the client's local premium type.",
        useOptions: () => Eo,
        clearable: !0,
        useValue: () =>
            (0, R.bG)([Ea.A], () => {
                let e = Ea.A.getPremiumTypeOverride();
                return null === e ? 0 : e;
            }),
        setValue: (e) => {
            0 === e
                ? (0, Er.O)(null, void 0)
                : null === e
                  ? (0, Er.O)(void 0, void 0)
                  : (0, Er.O)(0 === e ? null : e, void 0);
        },
    });
var Ed = i(246605),
    Ec = i(274184);
let Eg = (0, o.E2)(d.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let e = (0, R.bG)([Ec.Ay], () => Ec.Ay.getSurveyOverride());
        return (0, f.jsx)(Em, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: e ?? null,
            setOverride: (e) => Ed.xr(e),
            fetchOverride: (e) => Ed.BC(e, !0) ?? null,
        });
    },
});
function Em(e) {
    let { label: t, description: i, placeholder: n, overrideId: s, setOverride: l, fetchOverride: r } = e,
        [a, o] = N.useState(s ?? ""),
        u = N.useRef(null),
        [d, c] = N.useState(0),
        g = () => {
            null != u.current && (clearTimeout(u.current), (u.current = null));
        };
    return (
        N.useEffect(() => g, []),
        (0, f.jsx)(sy.D, {
            layout: "horizontal-responsive",
            label: t,
            description: i,
            children: (0, f.jsx)(lD.k, {
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
let EA = (0, o.zZ)(d.X.DEV_OVERRIDES, {
        useTitle: () => "Overrides",
        buildLayout: () => [Eu, Eg, h7, Et, En, hX, El, Ei, Es, h4],
        useInlineNotice: () => ({
            type: e_.lT.INLINE_NOTICE,
            noticeType: "info",
            useText: () => m.intl.format(m.t.UeZJlg, { link: "https://i.dis.gd/dev-settings-changes" }),
        }),
    }),
    Eh = (0, o.zD)(d.X.ANALYTICS_LOGS, {
        useTitle: () => "Enable Logging of Analytics Events",
        useSubtitle: () => "Logs all analytics events to the developer console.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isLoggingAnalyticsEvents),
        setValue: (e) => (0, a3.x)({ logAnalyticsEvents: e }),
    }),
    EE = (0, o.zD)(d.X.GATEWAY_LOGS, {
        useTitle: () => "Log Gateway Events",
        useSubtitle: () => "Logs all gateway events to console, including content. Enable verbose logs to see them.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isLoggingGatewayEvents),
        setValue: (e) => (0, a3.x)({ logGatewayEvents: e }),
    }),
    ET = (0, o.zD)(d.X.KEEP_POPOUTS_OPEN, {
        useTitle: () => "Keep Popouts Open",
        useSubtitle: () =>
            "When enabled, popouts will not close automatically, allowing their console contents to be inspected after a crash.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.preventPopoutClose),
        setValue: (e) => (0, a3.x)({ preventPopoutClose: e }),
    }),
    Ex = (0, o.zD)(d.X.KEYBOARD_MISMATCHES, {
        useTitle: () => "Enable Logging of Keyboard Mismatches",
        useSubtitle: () => "Logs mismatches in detected keyboard codes to the console.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.logKeyboardMismatches),
        setValue: (e) => (0, a3.x)({ logKeyboardMismatches: e }),
    }),
    ES = (0, o.zD)(d.X.OVERLAY_RPC_LOGS, {
        useTitle: () => "Enable Logging of Overlay RPC Events & Commands",
        useSubtitle: () => "Logs all overlay related RPC events. Super noisy if an overlay is connected.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isLoggingOverlayEvents),
        setValue: (e) => (0, a3.x)({ logOverlayEvents: e }),
    }),
    Ep = (0, o.zD)(d.X.QUEST_LOGGING, {
        useTitle: () => "Enable Quests Debug Logging",
        useSubtitle: () => "Logs quest lifecycle events to the developer console.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isLoggingQuestEvents),
        setValue: (e) => (0, a3.x)({ logQuestEvents: e }),
    }),
    Ef = (0, o.zD)(d.X.REQUEST_TRACING, {
        useTitle: () => "Enable Tracing Requests",
        useSubtitle: () => "Force trace all client requests with APM.",
        useValue: () => (0, R.bG)([a6.default], () => a6.default.isTracingRequests),
        setValue: (e) => (0, a3.x)({ trace: e }),
    }),
    EN = (0, o.zZ)(d.X.LOGGING, { useTitle: () => "Logging", buildLayout: () => [EE, ES, Ef, Eh, Ex, ET, Ep] }),
    E_ = (0, o.t_)(d.X.DEVELOPER_OPTIONS_PANEL, {
        useTitle: () => "Developer Options",
        buildLayout: () => [EA, EN, hY],
    }),
    EC = (0, o.i4)(d.X.DEVELOPER_OPTIONS_SIDEBAR_ITEM, {
        useTitle: () => "Developer Options",
        icon: hL.V,
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
                    onlyShowPreviewAppCollections: u,
                    disableAppCollectionsCache: c,
                    isStaff: m,
                } = (0, R.cf)([a6.default, hR.A, t6.default], () => ({
                    layoutDebuggingEnabled: a6.default.layoutDebuggingEnabled,
                    isDeveloper: hR.A.isDeveloper,
                    isLoggingGatewayEvents: a6.default.isLoggingGatewayEvents,
                    isLoggingOverlayEvents: a6.default.isLoggingOverlayEvents,
                    isLoggingAnalyticsEvents: a6.default.isLoggingAnalyticsEvents,
                    isTracingRequests: a6.default.isTracingRequests,
                    isForcedCanary: a6.default.isForcedCanary,
                    isSourceMapsEnabled: a6.default.sourceMapsEnabled,
                    isAxeEnabled: a6.default.isAxeEnabled,
                    preventPopoutClose: a6.default.preventPopoutClose,
                    onlyShowPreviewAppCollections: a6.default.onlyShowPreviewAppCollections,
                    disableAppCollectionsCache: a6.default.disableAppCollectionsCache,
                    isStaff: t6.default.getCurrentUser()?.isStaff() ?? !1,
                })),
                { horizontalSpacing: A, verticalSpacing: h } = (0, hP.Or)(),
                { setHorizontalSpacing: E, setVerticalSpacing: T } = hP.Or.getState(),
                x = g.HZ.useSetting();
            return t
                ? [
                      (0, f.jsxs)(
                          M.Dr,
                          {
                              id: "overrides",
                              label: "Overrides",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.DEV_OVERRIDES);
                              },
                              children: [
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "always-deliver",
                                          label: "Always Deliver Ads",
                                          checked: x,
                                          action: () => {
                                              g.HZ.updateSetting(!x);
                                          },
                                      },
                                      "always-deliver",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "forced-canary",
                                          label: "Forced Canary",
                                          checked: r,
                                          action: () => {
                                              (0, a3.x)({ canary: !r });
                                          },
                                      },
                                      "forced-canary",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "preview-collections",
                                          label: "Preview Unpublished Collections",
                                          checked: u,
                                          action: () => {
                                              (0, a3.x)({ onlyShowPreviewAppCollections: !u });
                                          },
                                      },
                                      "preview-collections",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "disable-collections-cache",
                                          label: "Disable Collections Cache",
                                          checked: c,
                                          action: () => {
                                              (0, a3.x)({ disableAppCollectionsCache: !c });
                                          },
                                      },
                                      "disable-collections-cache",
                                  ),
                              ],
                          },
                          "overrides",
                      ),
                      (0, f.jsxs)(
                          M.Dr,
                          {
                              id: "logging",
                              label: "Logging",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.LOGGING);
                              },
                              children: [
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "gateway-events",
                                          label: "Gateway Events",
                                          checked: i,
                                          action: () => {
                                              (0, a3.x)({ logGatewayEvents: !i });
                                          },
                                      },
                                      "gateway-events",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "overlay-events",
                                          label: "Overlay RPC Events",
                                          checked: n,
                                          action: () => {
                                              (0, a3.x)({ logOverlayEvents: !n });
                                          },
                                      },
                                      "overlay-events",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "analytics-events",
                                          label: "Analytics Events",
                                          checked: s,
                                          action: () => {
                                              (0, a3.x)({ logAnalyticsEvents: !s });
                                          },
                                      },
                                      "analytics-events",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "tracing-requests",
                                          label: "Tracing Requests",
                                          checked: l,
                                          action: () => {
                                              (0, a3.x)({ trace: !l });
                                          },
                                      },
                                      "tracing-requests",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "prevent-popout-close",
                                          label: "Prevent Popouts From Closing",
                                          checked: o,
                                          action: () => {
                                              (0, a3.x)({ preventPopoutClose: !o });
                                          },
                                      },
                                      "prevent-popout-close",
                                  ),
                              ],
                          },
                          "logging",
                      ),
                      (0, f.jsxs)(
                          M.Dr,
                          {
                              id: "design-tools",
                              label: "Design/A11y Tools",
                              action: () => {
                                  (0, ey.openUserSettings)(d.X.DESIGN_TOOLS);
                              },
                              children: [
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "accessibility-auditing",
                                          label: "Accessibility Auditing",
                                          checked: a,
                                          action: () => {
                                              (0, a3.x)({ axeEnabled: !a });
                                          },
                                      },
                                      "accessibility-auditing",
                                  ),
                                  (0, f.jsx)(
                                      M.sL,
                                      {
                                          id: "layout-debugging",
                                          label: "Enable Layout Debugging",
                                          checked: e,
                                          action: () => {
                                              (0, a3.x)({ layoutDebuggingEnabled: !e });
                                          },
                                      },
                                      "layout-debugging",
                                  ),
                                  e &&
                                      (0, f.jsxs)(f.Fragment, {
                                          children: [
                                              (0, f.jsx)(
                                                  M.aK,
                                                  {
                                                      id: "horizontal-spacing",
                                                      label: "Horizontal Spacing",
                                                      control: (e, t) =>
                                                          (0, f.jsx)(hD.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: A,
                                                              minValue: 0,
                                                              maxValue: hP.YR,
                                                              onChange: (e) => E(e),
                                                              renderValue: (e) => `${Math.round(e)}px`,
                                                              "aria-label": "Horizontal Spacing",
                                                          }),
                                                  },
                                                  "horizontal-spacing",
                                              ),
                                              (0, f.jsx)(
                                                  M.aK,
                                                  {
                                                      id: "vertical-spacing",
                                                      label: "Vertical Spacing",
                                                      control: (e, t) =>
                                                          (0, f.jsx)(hD.i, {
                                                              ...e,
                                                              ref: t,
                                                              value: h,
                                                              minValue: 0,
                                                              maxValue: hP.YR,
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
                          ? (0, f.jsx)(
                                M.Dr,
                                { id: "discord-stats", label: "Discord Stats", action: () => aP() },
                                "discord-stats",
                            )
                          : null,
                  ]
                : null;
        },
        buildLayout: () => [E_],
    });
var EI = i(127062),
    Eb = i(25044),
    Ev = i(80703),
    Ej = i(691540),
    Ey = i(857250),
    EO = i(97483),
    ER = i(100392),
    EL = i(102609),
    ED = i(271478),
    EP = i(736056),
    EG = i(386976),
    EU = i(257433),
    EM = i(32523),
    EV = i(96919),
    Ek = i(688151),
    Ew = i(636566);
function EF(e) {
    let { experiment: t, experimentId: i, overrideInfo: n, defaultOpen: s } = e,
        [l, r] = N.useState(s),
        [a, o] = N.useState(!1),
        u = N.useCallback(() => {
            r((e) => !e);
        }, []),
        d = (0, R.bG)([cm.default], () => cm.default.getId()),
        c = (0, R.bG)([cm.default], () => {
            let e = cm.default.getInstallationForTracking();
            return null == e ? null : (0, Ev.v)(e);
        }),
        g = "installation" === t.kind && null != c ? c : d,
        m = (0, EU.iN)(t, g),
        A = (0, EU.Fm)(t, g),
        h = (0, R.yK)([EP.A], () =>
            eL()
                .sortBy(EP.A.getRecentExposures(Ek.Vh.USER, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        E = N.useCallback(
            (e) => {
                (0, cx.C)((0, ER.yA)(i), () => {
                    (0, Ej.P0)({
                        id: "experiment-link-copied",
                        message: "Copied experiment link",
                        type: EO.Ck.SUCCESS,
                    }),
                        e.preventDefault(),
                        e.stopPropagation();
                });
            },
            [i],
        ),
        T = (0, f.jsx)(eB.s, {
            "aria-label": "Toggle visibility",
            onClick: u,
            children: (0, f.jsxs)(k.E, {
                variant: "text-md/medium",
                className: Ew.DD,
                children: [
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsxs)(L.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    t.title,
                                    " ",
                                    cx.p5 &&
                                        (0, f.jsx)(V.D, { onClick: E, children: (0, f.jsx)(hH.q, { size: "xs" }) }),
                                ],
                            }),
                            (0, f.jsx)(k.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, f.jsx)("span", {
                        className: Ew.km,
                        children: "installation" === t.kind ? "Installation" : "User",
                    }),
                ],
            }),
        });
    if (!l) return (0, f.jsx)("div", { className: Ew.Os, children: T });
    let x = "";
    return (
        (x =
            t.system === EL.l5.LEGACY
                ? `Currently assigned to bucket ${m ?? Ek.RE.NOT_ELIGIBLE}`
                : null != m
                  ? `Currently assigned to variant ${m}`
                  : "Currently unassigned"),
        (0, f.jsxs)("div", {
            className: Ew.Os,
            children: [
                T,
                (0, f.jsx)("div", {
                    children: (0, f.jsx)(ED.g, {
                        label: t.system === EL.l5.LEGACY ? "Bucket Override" : "Variant Override",
                        description: x,
                        experiment: t,
                        experimentId: i,
                        overrideInfo: n,
                    }),
                }),
                (0, f.jsx)("div", {
                    className: Ew.h_,
                    children:
                        null == A
                            ? (0, f.jsx)(k.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children:
                                      'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                              })
                            : null,
                }),
                a
                    ? (0, f.jsxs)("div", {
                          children: [
                              (0, f.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: Ew.id,
                                  children: "Server Descriptor",
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "code",
                                  className: Ew.AS,
                                  children: null == A ? "None" : JSON.stringify(A, void 0, 2),
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: Ew.id,
                                  children: "Override Descriptor",
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "code",
                                  className: Ew.AS,
                                  children:
                                      n?.originalDescriptor == null
                                          ? "None"
                                          : JSON.stringify(n.originalDescriptor, void 0, 2),
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "text-lg/medium",
                                  className: Ew.id,
                                  children: "Recent Exposures",
                              }),
                              (0, f.jsx)(k.E, {
                                  variant: "code",
                                  className: Ew.AS,
                                  children: 0 === h.length ? "None" : h.join("\n"),
                              }),
                          ],
                      })
                    : (0, f.jsx)("div", {
                          className: Ew.id,
                          children: (0, f.jsx)(B.Q, {
                              variant: "secondary",
                              text: "More Details \xbb",
                              onClick: () => o(!0),
                          }),
                      }),
                (0, f.jsx)(eT.c, { className: Ew.yF }),
            ],
        })
    );
}
function EB(e) {
    let { experiment: t, experimentId: i, overrideInfo: n } = e,
        [s, l] = N.useState(null != n),
        [r, a] = N.useState(!1),
        o = N.useCallback(() => {
            l((e) => !e);
        }, []),
        u = (0, R.bG)([EP.A], () => EP.A.getLoadedGuildExperiment(i)),
        d = (0, R.yK)([EP.A], () =>
            eL()
                .sortBy(EP.A.getRecentExposures(Ek.Vh.GUILD, i), (e) => {
                    let [t, i] = e;
                    return -i;
                })
                .map((e) => {
                    let [t, i] = e;
                    return `${new Date(i).toLocaleString()} (${t})`;
                }),
        ),
        [c, g] = (0, R.yK)([K.A, EP.A], () => {
            let e = eL().sortBy(K.A.getGuildsArray(), (e) => e.name.toLowerCase()),
                t = {},
                n = [];
            for (let s of e) {
                let e = EP.A.getGuildExperimentDescriptor(i, s.id),
                    l = e?.bucket ?? Ek.RE.NOT_ELIGIBLE;
                l in t || (t[l] = 0), t[l]++, n.push(`${s.name}: ${l}`);
            }
            let s = eL()(t)
                .keys()
                .map(Number)
                .sort()
                .map((e) => `${t[e]} guilds in bucket ${e}`)
                .join(", ");
            return [n.join("\n"), s];
        }),
        m = (0, f.jsx)(V.D, {
            onClick: o,
            children: (0, f.jsxs)(k.E, {
                variant: "text-md/medium",
                className: Ew.DD,
                children: [
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)("span", { children: t.title }),
                            (0, f.jsx)(k.E, { color: "text-muted", variant: "text-sm/normal", children: i }),
                        ],
                    }),
                    (0, f.jsx)("span", { className: Ew.km, children: "Guild" }),
                ],
            }),
        });
    return s
        ? (0, f.jsxs)("div", {
              className: Ew.Os,
              children: [
                  m,
                  (0, f.jsx)(ED.g, {
                      label: "Bucket Override",
                      description: `Current Assignments: ${g}`,
                      experiment: t,
                      experimentId: i,
                      overrideInfo: n,
                  }),
                  (0, f.jsx)("div", {
                      className: Ew.h_,
                      children:
                          null == u
                              ? (0, f.jsx)(k.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children:
                                        'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.',
                                })
                              : null,
                  }),
                  r
                      ? (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ew.id,
                                    children: "Guild Assignments",
                                }),
                                (0, f.jsx)(k.E, { variant: "code", className: Ew.AS, children: c }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ew.id,
                                    children: "Server Descriptor",
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "code",
                                    className: Ew.AS,
                                    children: null == u ? "None" : JSON.stringify(u, void 0, 2),
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ew.id,
                                    children: "Override Descriptor",
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "code",
                                    className: Ew.AS,
                                    children:
                                        n?.originalDescriptor == null
                                            ? "None"
                                            : JSON.stringify(n.originalDescriptor, void 0, 2),
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-lg/medium",
                                    className: Ew.id,
                                    children: "Recent Exposures",
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "code",
                                    className: Ew.AS,
                                    children: 0 === d.length ? "None" : d.join("\n"),
                                }),
                            ],
                        })
                      : (0, f.jsx)("div", {
                            className: Ew.id,
                            children: (0, f.jsx)(B.Q, {
                                variant: "secondary",
                                text: "More Details \xbb",
                                onClick: () => a(!0),
                            }),
                        }),
                  (0, f.jsx)(eT.c, { className: Ew.yF }),
              ],
          })
        : (0, f.jsx)("div", { className: Ew.Os, children: m });
}
let Ez = (0, o.E2)(d.X.EXPERIMENTS_SETTING, {
        Component: function () {
            let { experiments: e, overridesInfo: t } = (0, EG.op)(),
                { experiments: i, overridesInfo: n } = (0, EM.hI)(),
                s = N.useMemo(() => ({ ...i, ...e }), [i, e]),
                l = N.useMemo(() => ({ ...n, ...t }), [n, t]),
                r = (0, R.bG)([cm.default], () => {
                    let e = cm.default.getInstallationForTracking();
                    return null == e ? null : (0, Ev.v)(e);
                }),
                [a, o] = N.useState(""),
                u = (0, EV.oC)((0, EV.R3)((0, EV.Fm)(s), l), a);
            return (0, f.jsxs)("div", {
                "data-mtctest-ignore": "true",
                children: [
                    null != r &&
                        (0, f.jsxs)(L.B, {
                            style: { gap: 8, marginBottom: 16 },
                            children: [
                                (0, f.jsxs)(k.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: ["Installation ID: ", r],
                                }),
                                cx.p5 &&
                                    (0, f.jsx)(B.Q, {
                                        size: "sm",
                                        onClick: () => {
                                            (0, cx.C)(r, () => {
                                                (0, Ej.P0)((0, Ey.o)("Installation ID copied!", EO.Ck.SUCCESS));
                                            });
                                        },
                                        text: "Copy",
                                    }),
                            ],
                        }),
                    (0, f.jsx)(P.I, { placeholder: "Search experiments", query: a, onChange: o, onClear: () => o("") }),
                    u.length > 0
                        ? u.map((e) => {
                              let t = "guild" === e.experiment.kind ? EB : EF;
                              return (0, f.jsx)(
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
                        : (0, f.jsx)("div", {
                              className: Ew.p$,
                              children: (0, f.jsx)(eh.D, {
                                  variant: "heading-md/semibold",
                                  children: "No Experiments Found",
                              }),
                          }),
                ],
            });
        },
        useSearchTerms: () => ["Experiments", "Bucket Override", "Variant Override"],
    }),
    EY = (0, o.zZ)(d.X.EXPERIMENTS_CATEGORY, { buildLayout: () => [Ez] }),
    EX = (0, o.t_)(d.X.EXPERIMENTS_PANEL, { useTitle: () => "Experiments", buildLayout: () => [EY] }),
    EH = (0, o.i4)(d.X.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: EI.c,
        useMenu: Eb.A,
        buildLayout: () => [EX],
    }),
    EK = (0, o.WI)(d.X.DEVELOPER_SECTION, {
        useTitle: () => m.intl.string(m.t["+gHUHA"]),
        usePredicate: () => hR.A.isDeveloper,
        buildLayout: () => [EH, EC],
    });
var EW = i(323384),
    EZ = i(824552),
    Eq = i(370997);
let EQ = (0, o.E2)(d.X.AUTHORIZED_APPS_LIST_SETTING, {
        Component: Eq.Ay,
        useSearchTerms: () => [m.intl.string(m.t["f6kk+r"])],
    }),
    EJ = (0, o.zZ)(d.X.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [EQ],
        initialize: () => (
            EZ.A.fetch(),
            () => {
                Eq.iU.setState({ searchQuery: "" });
            }
        ),
    }),
    E$ = (0, o.t_)(d.X.AUTHORIZED_APPS_PANEL, {
        useTitle: () => m.intl.string(m.t["f6kk+r"]),
        useObscuredNotice: u2.L,
        buildLayout: () => [EJ],
    }),
    E0 = (0, o.i4)(d.X.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["f6kk+r"]),
        icon: EW.k,
        buildLayout: () => [E$],
    });
var E1 = i(187322),
    E2 = i(77468),
    E3 = i(289498),
    E6 = i(573648),
    E4 = i(941314),
    E5 = i(874490),
    E8 = i(370480),
    E7 = i(968309);
let E9 = new Set([Q.fg2.XBOX, Q.fg2.PLAYSTATION, Q.fg2.PLAYSTATION_STAGING, Q.fg2.CRUNCHYROLL]);
var Te = i(169869),
    Tt = i(235693),
    Ti = i(757036),
    Tn = i(555837),
    Ts = i(212739),
    Tl = i(30370),
    Tr = i(968671),
    Ta = i(674567),
    To = i(237146),
    Tu = i(594387),
    Td = i(34934);
function Tc() {
    let e,
        t,
        n,
        s,
        l,
        { variant: r, showFooter: a } =
            ((e = (0, Ta.V)()),
            (t = (0, Tr.GM)("connectedAccountsBannerFooter")),
            (n = (0, Ts.O)()),
            (l = null != (s = (0, R.bG)([Tl.A], () => Tl.A.getAccount(null, Q.fg2.XBOX))) && !s.revoked),
            e === Ta.s.NONE || e === Ta.s.FREE_FRACTIONAL_NITRO || (e === Ta.s.NON_NITRO && n)
                ? { variant: Ta.s.NONE, showFooter: !1 }
                : { variant: e, showFooter: t && e === Ta.s.NON_NITRO && !l }),
        { analyticsLocations: o } = (0, nU.Ay)(eV.A.XBOX_CONNECTED_ACCOUNTS_BANNER);
    if (r === Ta.s.NONE) return null;
    let u = "",
        d = null;
    return (
        r === Ta.s.NITRO
            ? ((u = m.intl.string(To.default["+QAvQz"])),
              (d = (0, f.jsx)(eE.$, {
                  variant: "secondary",
                  size: "sm",
                  text: m.intl.string(To.default.CubeLC),
                  onClick: () => {
                      (0, C.openModalLazy)(async () => {
                          let { default: e } = await Promise.all([i.e("16848"), i.e("77632")]).then(i.bind(i, 836291));
                          return (t) => (0, f.jsx)(e, { ...t, sourceAnalyticsLocations: o });
                      });
                  },
              })))
            : (r === Ta.s.NON_NITRO || r === Ta.s.FREE_FRACTIONAL_NITRO) &&
              ((u = m.intl.string(To.default.NwkRTZ)),
              (d = (0, f.jsx)(sh.A, {
                  fullWidth: !0,
                  defaultTextOverride: m.intl.string(To.default["0vY+ie"]),
                  variantOverride: "overlay-primary",
                  size: "sm",
                  subscriptionTier: sf.pe.TIER_2,
              }))),
        (0, f.jsxs)(nU.f5, {
            value: o,
            children: [
                (0, f.jsxs)("div", {
                    className: Td.bV,
                    children: [
                        (0, f.jsx)(eh.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: m.intl.string(m.t.NG1e6l),
                        }),
                        (0, f.jsx)(oZ.t, { size: "xs", color: "var(--icon-default)" }),
                    ],
                }),
                (0, f.jsx)(tJ.N, {
                    theme: "dark",
                    children: (e) =>
                        (0, f.jsx)("div", {
                            className: e,
                            children: (0, f.jsxs)("div", {
                                className: Td.Nr,
                                style: {
                                    backgroundImage:
                                        "url(https://cdn.discordapp.com/assets/content/6f39ba0aa00a9877bcb4bc67862335d29c21749762ec29fd0248ba734bc2c4b8.png)",
                                },
                                children: [
                                    (0, f.jsx)("div", { className: Td.$h }),
                                    (0, f.jsx)("div", { className: Td.Lw }),
                                    (0, f.jsxs)("div", {
                                        className: Td.Qs,
                                        children: [
                                            (0, f.jsx)("img", {
                                                className: Td.wm,
                                                src: "https://cdn.discordapp.com/assets/content/f3a967ffa662e944346571ea7f2b30b2e40745e2edca294519fbddf971e81fb1.png",
                                                alt: "Xbox Game Pass",
                                            }),
                                            (0, f.jsx)(k.E, {
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                className: Td.DD,
                                                children: u,
                                            }),
                                            (0, f.jsx)("div", { className: Td.lO, children: d }),
                                        ],
                                    }),
                                    a &&
                                        (0, f.jsxs)("div", {
                                            className: Td.qr,
                                            children: [
                                                (0, f.jsx)("div", { className: Td.yF }),
                                                (0, f.jsxs)("div", {
                                                    className: Td.F4,
                                                    children: [
                                                        (0, f.jsx)(dz.o, { size: "lg", color: F.A.colors.ICON_STRONG }),
                                                        (0, f.jsx)(k.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-default",
                                                            children: m.intl.format(Tu.default.mXY4Rb, {
                                                                onConnect: () => {
                                                                    (0, E7.A)({
                                                                        platformType: Q.fg2.XBOX,
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
        })
    );
}
var Tg = i(201718),
    Tm = i(321078),
    TA = i(672130),
    Th = i(546183),
    TE = i(379848),
    TT = i(96734);
let Tx = (e) => {
        let { markAsDismissed: t } = e;
        return (
            N.useEffect(() => t(t9.i.UNKNOWN), [t]),
            (0, f.jsx)(n7.Lp, { className: TT.Ad, text: m.intl.string(m.t.y2b7CA) })
        );
    },
    TS = (e) => {
        let { title: t, body: i, img: n, newIndicatorDismissibleContent: s, onClick: l } = e;
        return (0, f.jsxs)("div", {
            className: TT.kL,
            children: [
                n,
                (0, f.jsxs)("div", {
                    className: TT.FS,
                    children: [
                        (0, f.jsxs)("div", {
                            className: TT.TK,
                            children: [
                                (0, f.jsx)(TE.Ay, {
                                    contentTypes: [s],
                                    children: (e) => {
                                        let { visibleContent: t, markAsDismissed: i } = e;
                                        return t === s ? (0, f.jsx)(Tx, { markAsDismissed: i }) : null;
                                    },
                                }),
                                (0, f.jsx)(k.E, { variant: "text-md/semibold", children: t }),
                            ],
                        }),
                        (0, f.jsx)(k.E, { variant: "text-xs/normal", children: i }),
                    ],
                }),
                (0, f.jsx)(eE.$, { text: m.intl.string(m.t.vD60Pv), onClick: l }),
            ],
        });
    },
    Tp = () => {
        let e = to.A.getArticleURL(Q.MVz.PS_CONNECTION);
        return (0, f.jsx)(TS, {
            title: m.intl.string(m.t.v20wwm),
            body: m.intl.format(m.t.lTZBit, { help_article: e }),
            img: (0, f.jsx)("img", { src: "/assets/88954903b6a5b9cc.svg", width: "82", height: "auto", alt: "" }),
            newIndicatorDismissibleContent: ex.M.PS_ONE_WAY_RECONNECT,
            onClick: () => (0, E7.A)({ platformType: Q.fg2.PLAYSTATION, location: "PS two way upsell" }),
        });
    },
    Tf = "/assets/9df988a227916145.png",
    TN = () =>
        (0, f.jsx)(TS, {
            title: m.intl.string(Tu.default["9cLtDI"]),
            body: m.intl.format(Tu.default["D+kUbg"], { learnMoreLink: "" }),
            img: (0, f.jsx)("img", { src: Tf, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: ex.M.XBOX_PERKS_RECONNECT_UPSELL,
            onClick: () => (0, E7.A)({ platformType: Q.fg2.XBOX, location: "Xbox perks reconnect upsell" }),
        }),
    T_ = () => {
        let e = to.A.getArticleURL(Q.MVz.XBOX_CONNECTION);
        return (0, f.jsx)(TS, {
            title: m.intl.string(m.t["2okkZV"]),
            body: m.intl.format(m.t.OnERSS, { help_article: e }),
            img: (0, f.jsx)("img", { src: Tf, width: "auto", height: "45", alt: "" }),
            newIndicatorDismissibleContent: ex.M.XBOX_ONE_WAY_RECONNECT,
            onClick: () => (0, E7.A)({ platformType: Q.fg2.XBOX, location: "Xbox two way upsell" }),
        });
    };
var TC = i(783419),
    TI = i(534952),
    Tb = i(230451),
    Tv = i(781471);
let Tj = (e) => {
    let t,
        { integration: i } = e,
        {
            isJoining: n,
            joinErrorMessage: s,
            showJoinErrorMessage: l,
        } = (0, R.cf)(
            [Tl.A],
            () => ({
                isJoining: Tl.A.isJoining(i.id),
                joinErrorMessage:
                    "" === Tl.A.joinErrorMessage(i.id) ? m.intl.string(m.t.j2d6Km) : Tl.A.joinErrorMessage(i.id),
                showJoinErrorMessage: void 0 !== Tl.A.joinErrorMessage(i.id),
            }),
            [i.id],
        );
    return (
        null != (0, R.bG)([K.A], () => K.A.getGuild(i.guild.id), [i.guild.id]) ||
            (t = (0, f.jsx)(eE.$, {
                size: "sm",
                onClick: function () {
                    E2.A.joinServer(i.id, () => {});
                },
                disabled: n,
                variant: "primary",
                text: n ? m.intl.string(m.t.RXvQQu) : m.intl.string(m.t.XpeFYr),
            })),
        (0, f.jsxs)("div", {
            className: Tv.iA,
            children: [
                (0, f.jsxs)("div", {
                    className: Tv.XX,
                    children: [
                        (0, f.jsx)(gP.Ay, { size: gP.Ay.Sizes.SMALL, guild: i.guild, className: Tv.$f }),
                        (0, f.jsxs)("div", {
                            className: Tv.Vn,
                            children: [
                                (0, f.jsx)(k.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: i.guild.name,
                                }),
                                (0, f.jsx)(uF.Anchor, {
                                    href: E6.A.get(i.type)?.getPlatformUserUrl?.(i.account),
                                    children: (0, f.jsx)(k.E, {
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
                    (0, f.jsx)(k.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: Tv.R,
                        children: s,
                    }),
            ],
        })
    );
};
function Ty(e) {
    var t;
    let i,
        n,
        { account: s } = e,
        l =
            ((t = s.id),
            (i = (0, Tn.G)({ location: "useShouldShowXboxPerksReconnectUpsell" })),
            (n = (0, Ti.L)(sf.PremiumTypes.TIER_2)),
            !i && !n && !/^\d+$/.test(t));
    return s.type === Q.fg2.XBOX && l
        ? (0, f.jsx)(TN, {})
        : s.twoWayLink
          ? null
          : s.type === Q.fg2.XBOX
            ? (0, f.jsx)(T_, {})
            : s.type === Q.fg2.PLAYSTATION
              ? (0, f.jsx)(Tp, {})
              : null;
}
function TO(e) {
    let t,
        i,
        n,
        s,
        l,
        r,
        a,
        { onDisconnect: o, account: u, theme: d, locale: c } = e,
        [g, A] = N.useState(u.friendSync),
        [h, E] = N.useState(u.visibility),
        [T, x] = N.useState(u.metadataVisibility),
        [S, p] = N.useState(u.showActivity),
        [_, I] = N.useState(null),
        [b, v] = N.useState(null),
        [j, y] = N.useState(!1),
        [O, R] = N.useState([]),
        L = (0, E5.ML)(u.type),
        P = E6.A.get(L),
        G = (0, E4.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" });
    N.useEffect(() => {
        A(u.friendSync), E(u.visibility), x(u.metadataVisibility), p(u.showActivity);
    }, [u]);
    let U = { inProgressVisibility: _, inProgressMetadataVisibility: b },
        M = N.useRef(U);
    return (
        N.useEffect(() => {
            M.current = U;
        }),
        N.useEffect(() => {
            if (!1 === u.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = M.current;
            null != e && (E(e), E2.A.setVisibility(u.type, u.id, e), I(null)),
                null != t && (x(t), E2.A.setMetadataVisibility(u.type, u.id, t), v(null));
        }, [u]),
        (0, f.jsxs)("div", {
            className: Tv.FI,
            children: [
                ((t = E6.A.get(u.type)),
                (i = E6.A.get(L)),
                (n = "1" === (u.metadata ?? {})[TC.pK.TWITTER_VERIFIED]),
                (s = null),
                t.type === Q.fg2.TWITTER &&
                    n &&
                    (s = (0, f.jsx)(e1.m, {
                        text: m.intl.string(m.t.Jebrww),
                        children: (0, f.jsx)(e9.A, {
                            color: F.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, f.jsx)(e2.U, { size: "xs", color: F.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, f.jsxs)("div", {
                    className: Tv.Il,
                    children: [
                        (0, f.jsx)("img", {
                            alt: i.name,
                            className: Tv.gj,
                            src: (0, ga.M)(d) ? i.icon.darkSVG : i.icon.lightSVG,
                        }),
                        (0, f.jsxs)("div", {
                            children: [
                                (0, f.jsxs)("div", {
                                    className: Tv.$p,
                                    children: [
                                        (0, f.jsx)(k.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: Tv.RW,
                                            children: u.name,
                                        }),
                                        null != s && (0, f.jsx)("div", { className: Tv.cG, children: s }),
                                    ],
                                }),
                                (0, f.jsx)(k.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: Tv.Au,
                                    children:
                                        null != i.replacedBy && G
                                            ? m.intl.format(Tb.default.Glhokn, { platformName: i.name })
                                            : i.name,
                                }),
                            ],
                        }),
                        (0, f.jsx)(V.D, {
                            className: Tv.uH,
                            onClick: function () {
                                let e = E6.A.get(u.type);
                                (0, C.openModal)((t) =>
                                    (0, f.jsx)(lL.Modal, {
                                        title: m.intl.formatToPlainString(m.t.U5x12f, { name: e.name }),
                                        subtitle: m.intl.format(m.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: m.intl.string(m.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: m.intl.string(m.t.bsbMVz),
                                                onClick: () => {
                                                    o(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            E9.has(u.type) &&
                                            u.twoWayLink &&
                                            (0, f.jsx)(si.A, {
                                                children: m.intl.format(m.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": m.intl.string(m.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, f.jsx)(gu.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                (0, f.jsx)(Ty, { account: u }),
                (function (e) {
                    let t = e.metadata ?? {},
                        i = null,
                        n = (0, E8.An)(t[TC.pK.CREATED_AT], c);
                    switch (e.type) {
                        case Q.fg2.REDDIT:
                            i = (0, Te.xE)(t, Tv.Nz);
                            break;
                        case Q.fg2.STEAM:
                            i = (0, Te.dy)(t, Tv.Nz);
                            break;
                        case Q.fg2.BLUESKY:
                        case Q.fg2.TWITTER:
                        case Q.fg2.MASTODON:
                            i = (0, Te.ED)(t, Tv.Nz);
                            break;
                        case Q.fg2.EBAY:
                            i = (0, Te.ub)(t, Tv.Nz);
                            break;
                        case Q.fg2.PAYPAL:
                            i = (0, Te.gZ)(t, Tv.Nz);
                            break;
                        case Q.fg2.TIKTOK:
                            i = (0, Te.HU)(t, Tv.Nz);
                    }
                    null !== n &&
                        (null == i && (i = []),
                        i?.push(
                            (0, f.jsx)(
                                k.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: Tv.M4,
                                    children: m.intl.format(m.t["9rfonh"], { date: n }),
                                },
                                "member-since",
                            ),
                        ));
                    let s = O.includes(e.id),
                        l = m.intl.string(m.t.wzzjk9);
                    if (null == i || 0 === i.length)
                        if (!0 !== E6.A.get(e.type).hasMetadata) return null;
                        else
                            (i = [
                                (0, f.jsx)(n7.Lp, { className: Tv.Z3, text: m.intl.string(m.t.y2b7CA) }, "badge"),
                                (0, f.jsx)(
                                    k.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: Tv.vt,
                                        children: m.intl.format(m.t.Up2ni7, {
                                            helpdeskUrl: to.A.getArticleURL(Q.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (l = m.intl.string(m.t["LVh3/5"]));
                    return (
                        s && (l = m.intl.string(m.t.i4jeWR)),
                        i.push(
                            (0, f.jsx)(
                                "div",
                                {
                                    className: Tv.jy,
                                    children: (0, f.jsx)(eE.$, {
                                        text: l,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: j,
                                        disabled: s,
                                        "aria-label": m.intl.string(m.t.sCkLYH),
                                        onClick: s
                                            ? void 0
                                            : () => {
                                                  y(!0),
                                                      E2.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              O.push(e.id), R(O), y(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, f.jsx)("div", { className: Tv.tJ, children: i })
                    );
                })(u),
                (Q.txh.has(u.type) &&
                    (l = (0, f.jsx)(D.d, {
                        label: m.intl.string(m.t["+KCMSi"]),
                        checked: g,
                        onChange: function (e) {
                            A(e), E2.A.setFriendSync(u.type, u.id, e);
                        },
                    })),
                Q.ewM.has(u.type) &&
                    (r = (0, f.jsx)(D.d, {
                        label: m.intl.format(m.t["6u6J0q"], { platform: P.name }),
                        checked: S,
                        onChange: function (e) {
                            p(e), E2.A.setShowActivity(u.type, u.id, e);
                        },
                    })),
                E6.A.get(u.type)?.hasMetadata === !0 &&
                    (a = (0, f.jsx)(D.d, {
                        label: m.intl.string(m.t.FYKGsL),
                        checked: 1 === T,
                        onChange: function (e) {
                            let { verified: t } = u,
                                i = +!!e;
                            if (e && !t) {
                                v(i), (0, E7.A)({ platformType: u.type, location: "User Settings" });
                                return;
                            }
                            x(i), E2.A.setMetadataVisibility(u.type, u.id, i);
                        },
                        disabled: 1 !== h || null == u.metadata,
                    })),
                (0, f.jsxs)("div", {
                    className: Tv.HZ,
                    children: [
                        (0, f.jsx)(D.d, {
                            label: m.intl.string(m.t.f7yOAX),
                            checked: 1 === h,
                            onChange: function (e) {
                                let { verified: t } = u,
                                    i = +!!e;
                                if (e && !t) {
                                    I(i), (0, E7.A)({ platformType: u.type, location: "User Settings" });
                                    return;
                                }
                                E(i), E2.A.setVisibility(u.type, u.id, i);
                            },
                        }),
                        a,
                        r,
                        l,
                    ],
                })),
                (function () {
                    if (u.revoked || u.integrations.length > 0) return (0, f.jsx)(eT.c, {});
                })(),
                u.revoked
                    ? (0, f.jsx)(ta.p, {
                          messageType: ta.Y.INFO,
                          children: m.intl.format(m.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, E7.A)({ platformType: u.type, location: "User Settings" });
                              },
                          }),
                      })
                    : u.integrations.length > 0
                      ? (0, f.jsx)(sy.D, {
                            label: m.intl.string(m.t.fOe3fZ),
                            children: u.integrations.map((e) => (0, f.jsx)(Tj, { integration: e }, e.id)),
                        })
                      : void 0,
                (0, f.jsx)(Tt.A, { partner: u.type }),
            ],
        })
    );
}
function TR(e) {
    let { appIdentity: t, oauth2Token: i } = e;
    return null == i
        ? null
        : (0, f.jsxs)("div", {
              className: Tv.FI,
              children: [
                  (function (e, t) {
                      let { application: i } = t,
                          n = i$.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
                      return (0, f.jsxs)("div", {
                          className: Tv.Il,
                          children: [
                              (0, f.jsx)("img", { alt: i.name, className: eF()(Tv.gj, Tv.sN), src: n }),
                              (0, f.jsxs)("div", {
                                  children: [
                                      (0, f.jsx)("div", {
                                          className: Tv.$p,
                                          children: (0, f.jsx)(k.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: Tv.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, f.jsx)(k.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: Tv.Au,
                                          children: i.name,
                                      }),
                                  ],
                              }),
                              (0, f.jsx)(V.D, {
                                  className: Tv.uH,
                                  onClick: () =>
                                      (0, Eq.d1)(i, t.scopes, () => {
                                          EZ.A.delete(t.id);
                                      }),
                                  "aria-label": m.intl.string(m.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, f.jsx)(gu.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, i),
                  (0, f.jsx)("div", {
                      className: Tv.HZ,
                      children: (0, f.jsx)(D.d, {
                          label: m.intl.string(m.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              Tg.A.updateApplicationIdentityConfig(i.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function TL(e) {
    let t = E6.A.get(e);
    (0, E7.A)({ platformType: t.type }),
        X.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function TD() {
    let e = (0, E5.gn)(),
        t = (0, E4.useIsRiotSocialSDKMigrationEnabled)({ location: "User Settings Connections" }),
        i = (0, eq.A)(t ? TI.tX : []);
    return (0, f.jsxs)("div", {
        className: Tv.lA,
        children: [
            i.map(
                (e) =>
                    null != e &&
                    (0, f.jsx)(
                        TA.A,
                        { application: e, className: Tv.__invalid_accountButton, innerClassName: Tv.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - i.length)
                .map((e) =>
                    (0, f.jsx)(
                        E3.A,
                        { type: e.type, className: Tv.__invalid_accountButton, innerClassName: Tv.U$ },
                        e.type,
                    ),
                ),
            (0, f.jsx)(e1.m, {
                text: m.intl.string(m.t.QqTz8b),
                children: (0, f.jsx)("div", {
                    className: eF()(Tv.ej, Tv.__invalid_accountButton),
                    children: (0, f.jsx)(E1.vN, {
                        children: (0, f.jsx)("button", {
                            className: eF()(Tv.R8, Tv.U$),
                            type: "button",
                            onClick: function () {
                                n6.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: TL });
                            },
                            "aria-label": m.intl.string(m.t.Zhcj9X),
                            children: (0, f.jsx)(tE._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": m.intl.string(m.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function TP(e) {
    let t,
        { fetching: i, accounts: n, appIdentities: s, authorizedApps: l, theme: r, locale: a } = e;
    return (
        (t = i
            ? (0, f.jsx)(u4.y, { type: u4.y.Type.SPINNING_CIRCLE })
            : 0 === n.length && 0 === s.length
              ? (0, f.jsx)(ia.pp, {
                    theme: r,
                    children: (0, f.jsx)(ia.SG, {
                        note: m.intl.string(m.t.WenGZ2),
                        children: m.intl.string(m.t.aoLS84),
                    }),
                })
              : (0, f.jsxs)(f.Fragment, {
                    children: [
                        s.map((e, t) =>
                            (0, f.jsx)(
                                TR,
                                { appIdentity: e, oauth2Token: l.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        n
                            .filter((e) => E6.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, f.jsx)(
                                    TO,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: a,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: i } = e;
                                                E2.A.disconnect(t, i);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, f.jsx)("div", { className: Tv.V, children: t })
    );
}
let TG = (0, o.E2)(d.X.CONNECTIONS_ADD_CONNECTIONS_SETTING, {
        Component: function () {
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.ZeDrUf),
                description: m.intl.format(m.t["oYc+Gz"], { privacyPolicyUrl: Q.X7G.PRIVACY }),
                children: (0, f.jsx)(TD, {}),
            });
        },
        useSearchTerms: () => [
            m.intl.string(m.t.ZeDrUf),
            m.intl.string(m.t.Zhcj9X),
            m.intl.string(m.t.QqTz8b),
            m.intl.string(m.t["+/hZM/"]),
            m.intl.string(m.t.bsbMVz),
            m.intl.string(m.t.f7yOAX),
            m.intl.string(m.t.FYKGsL),
            m.intl.string(m.t["+KCMSi"]),
        ],
    }),
    TU = (0, o.E2)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_SETTING, {
        Component: function () {
            let e = (0, R.bG)([eC.A], () => eC.A.hidePersonalInformation),
                t = (0, R.bG)([Tl.A], () => Tl.A.isFetching()),
                i = (0, R.bG)([Tl.A], () => Tl.A.getAccounts()),
                { authorizedAppsFetchState: n, authorizedApps: s } = (0, R.cf)([Th.default], () => ({
                    authorizedAppsFetchState: Th.default.getFetchState(),
                    authorizedApps: Th.default.getNewestTokensForNonChildrenApplications(),
                })),
                { isLoading: l, filteredAppIdentities: r } = (0, Tm.A)(t6.default.getCurrentUser().id, {
                    includeHidden: !0,
                }),
                a = (0, d6.Ay)(),
                o = (0, R.bG)([dL.default], () => dL.default.locale);
            return (N.useEffect(() => {
                n === Th.FetchState.NOT_FETCHED && EZ.A.fetch();
            }, [n]),
            e)
                ? null
                : (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)(Tc, {}),
                          (0, f.jsx)(TP, {
                              fetching: t || l || (r.length > 0 && n !== Th.FetchState.FETCHED),
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
            E2.A.fetch();
        },
        useSearchTerms: () => [
            m.intl.string(m.t["+/hZM/"]),
            m.intl.string(m.t.bsbMVz),
            m.intl.string(m.t.f7yOAX),
            m.intl.string(m.t.FYKGsL),
            m.intl.string(m.t["+KCMSi"]),
        ],
    });
var TM = i(46225);
let TV = [Q.fg2.LEAGUE_OF_LEGENDS, Q.fg2.RIOT_GAMES],
    Tk = (0, o.zZ)(d.X.CONNECTIONS_ADD_CONNECTIONS_CATEGORY, {
        buildLayout: () => [TG],
        useInlineNotice: function () {
            let e = (0, R.bG)([Tl.A], () => Tl.A.getAccounts().find((e) => TV.includes(e.type))?.type),
                t = null != e ? E6.A.get(e) : null,
                i = (0, eq.h)(t?.replacedBy),
                { canStartAuthorization: n, hasAlreadyLinked: s, fetched: l } = (0, TM.RD)(i),
                r = m.intl.string(Tb.default["1S6oAo"]),
                a = (0, E4.useIsRiotSocialSDKMigrationEnabled)({ location: "RiotDeprecationInlineNotice" });
            return N.useMemo(
                () =>
                    a && null != t && n && i?.connectionEntrypointUrl != null && !s && l
                        ? {
                              type: e_.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () =>
                                  m.intl.format(Tb.default.DeOsIl, {
                                      connectionName: t.name,
                                      applicationName: r,
                                      connectionEntrypointUrl: i.connectionEntrypointUrl,
                                  }),
                          }
                        : null,
                [t, r, i, n, a, s, l],
            );
        },
    }),
    Tw = (0, o.zZ)(d.X.CONNECTIONS_CONNECTED_ACCOUNTS_CATEGORY, { buildLayout: () => [TU] }),
    TF = (0, o.t_)(d.X.CONNECTIONS_PANEL, {
        useTitle: () => m.intl.string(m.t["3fe7U5"]),
        useObscuredNotice: u2.L,
        buildLayout: () => [Tk, Tw],
    }),
    TB = (0, o.i4)(d.X.CONNECTIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["3fe7U5"]),
        icon: hH.q,
        buildLayout: () => [TF],
    }),
    Tz = (0, o.WI)(d.X.GAMES_AND_APPS_SECTION, {
        useTitle: () => m.intl.string(m.t.BA9200),
        buildLayout: () => [iB, eg, il, TB, E0],
    });
var TY = i(631670),
    TX = i(619499),
    TH = i(836602),
    TK = i(591179),
    TW = i(854627),
    TZ = i(975732),
    Tq = i(761508),
    TQ = i(83257),
    TJ = i(159001),
    T$ = i(344346),
    T0 = i(919395),
    T1 = i(233641);
function T2(e) {
    let { title: t, children: i } = e;
    return (0, f.jsxs)("div", {
        children: [(0, f.jsx)(eh.D, { variant: "text-md/medium", className: T1.Vf, children: t }), i],
    });
}
function T3(e) {
    let {
        children: t,
        className: i,
        layoutClassName: n,
        profilePreview: s,
        profilePreviewTitle: l,
        nameplatePreview: r,
        stickyPreview: a = !0,
    } = e;
    return (0, f.jsx)("div", {
        className: eF()(T1.UA, i),
        children: (0, f.jsxs)("div", {
            className: eF()(T1.yt, n),
            children: [
                (0, f.jsx)("div", {
                    className: eF()(T1.Fp, a && T1.Oz),
                    children: (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(T2, { title: l ?? m.intl.string(m.t.Zb06yP), children: s }),
                            null != r ? (0, f.jsx)(T2, { title: m.intl.string(m.t.x5CoXR), children: r }) : null,
                        ],
                    }),
                }),
                (0, f.jsx)("div", { className: T1.oB, children: t }),
            ],
        }),
    });
}
var T6 = i(986687),
    T4 = i(101058),
    T5 = i(841595),
    T8 = i(696451),
    T7 = i(10478);
function T9() {
    return (0, f.jsxs)("div", {
        className: T7.p$,
        children: [
            (0, f.jsx)("img", { src: "/assets/b3b15f93f9f43174.svg", alt: "", className: T7.Sl }),
            (0, f.jsx)(eh.D, {
                className: T7.h8,
                variant: "heading-lg/extrabold",
                children: m.intl.string(m.t.Z1OZCV),
            }),
            (0, f.jsx)(k.E, { className: T7.h8, variant: "text-md/normal", children: m.intl.string(m.t.ZSt4Tt) }),
            (0, f.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: T7.h8,
                children: (0, f.jsx)(eE.$, {
                    variant: "primary",
                    text: m.intl.string(m.t.jQ3pqt),
                    onClick: () => {
                        (0, sO.pX)(Q.BVt.GUILD_DISCOVERY), (0, sE.default)();
                    },
                }),
            }),
        ],
    });
}
var xe = i(81400),
    xt = i(252732),
    xi = i(355622),
    xn = i(408018),
    xs = i(201349),
    xl = i(158983);
let xr = (0, sS.Ld)(),
    xa = (0, t1.createChannelRecord)({ id: "1", type: Q.rbe.DM }),
    xo = (0, sS.Ld)();
function xu(e) {
    let {
            sectionTitle: t,
            errors: i,
            onBioChange: n,
            pendingBio: s,
            placeholder: l,
            currentBio: r,
            disabled: a = !1,
        } = e,
        [o, u] = N.useState(s ?? r),
        [d, c] = N.useState((0, xn.x7)(o)),
        g = N.useRef(r),
        A = N.useRef(!1);
    return (
        N.useEffect(() => {
            if (g.current !== r) {
                let e = (0, xn.x7)(r);
                u(r), c(e);
            }
            g.current = r;
        }, [r]),
        N.useEffect(() => {
            void 0 !== s || o === r || A.current || (u(r), c((0, xn.x7)(r)));
        }, [s, r, o]),
        (0, f.jsxs)(oJ.A, {
            title: t,
            titleId: xr,
            description: m.intl.string(m.t.Bbw6Ac),
            errors: i,
            disabled: a,
            children: [
                (0, f.jsx)(xs.Ay, {
                    "aria-describedby": xo,
                    "aria-labelledby": xr,
                    className: xl.i,
                    innerClassName: xl.Z,
                    maxCharacterCount: Q.NA2,
                    onChange: function (e, t, i) {
                        t !== o && (u(t), c(i), n(t));
                    },
                    placeholder: l,
                    channel: xa,
                    textValue: o,
                    richValue: d,
                    emojiPickerCloseOnModalOuterClick: !0,
                    parentModalKey: ey.USER_SETTINGS_MODAL_KEY,
                    type: xi.oU.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        A.current = !1;
                    },
                    onFocus: () => {
                        A.current = !0;
                    },
                    focused: A.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({ shouldClear: !1, shouldRefocus: !0 });
                        });
                    },
                }),
                (0, f.jsx)(z.A, { id: xo, children: m.intl.format(m.t["+DFxLc"], { maxLength: Q.NA2 }) }),
            ],
        })
    );
}
var xd = i(930861),
    xc = i(821956),
    xg = i(562819),
    xm = i(84540),
    xA = i(408919);
function xh(e) {
    let { user: t, guild: i, className: n, sectionTitle: s, forcedDivider: l = !1, withTutorial: r = !1 } = e,
        { analyticsLocations: a } = (0, nU.Ay)(),
        o = (0, T0.a4)({ user: t, guildId: i?.id }),
        { pendingAvatarDecoration: u, errors: d } = (0, T0.CP)(i?.id),
        c = r ? xd.wL : aw.$n;
    return (0, f.jsx)(oJ.A, {
        className: n,
        forcedDivider: l,
        hasBackground: !0,
        title: s,
        errors: d,
        children: (0, f.jsxs)("div", {
            className: xA.NC,
            children: [
                (0, f.jsx)(c, {
                    size: aw.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, xg.L)({ analyticsLocations: a, guild: i });
                    },
                    className: eF()({ [xA.yj]: r }),
                    children: m.intl.string(m.t.BVcYCx),
                }),
                (void 0 === u ? null != o : null != u) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xA.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: (0, xc.uZ)(t, i) ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.OrokWm),
                            onClick: () => {
                                (0, xm.p)({ guildId: i?.id, avatarDecoration: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xE = i(339984),
    xT = i(114077);
let xx = [{ name: "gif", extensions: ["gif"] }];
function xS(e) {
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
        { newestAnalyticsLocation: g } = (0, nU.Ay)(),
        A = c ? xd.wL : aw.$n,
        h = N.useCallback(() => {
            (0, xt.XD)({
                uploadType: xE.HL.AVATAR,
                analyticsSource: g,
                filters: u ? xx : void 0,
                guildId: r,
                isTryItOut: u,
            });
        }, [r, g, u]);
    return (0, f.jsx)(oJ.A, {
        className: a,
        title: s,
        errors: i,
        disabled: o,
        forcedDivider: d,
        children: (0, f.jsxs)("div", {
            className: xT.NC,
            children: [
                (0, f.jsx)(A, {
                    className: eF()({ [xT.yj]: c }),
                    size: aw.$n.Sizes.SMALL,
                    onClick: h,
                    children: l ?? m.intl.string(m.t["4OynCD"]),
                }),
                t &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xT.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != r ? m.intl.string(m.t.TDjKDm) : m.intl.string(m.t.twB3fz),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var xp = i(152103);
function xf(e) {
    let { user: t, guildId: i, className: n } = e,
        s = o6.Ay.canUsePremiumProfileCustomization(t),
        { analyticsLocations: l } = (0, nU.Ay)(),
        {
            userDisplayNameStyles: r,
            guildDisplayNameStyles: a,
            pendingDisplayNameStyles: o,
            pendingErrors: u,
        } = (0, T0.B0)(t, i),
        d = (0, N.useCallback)(() => {
            X.default.track(Q.HAw.DISPLAY_NAME_STYLES_FROM_SETTINGS), (0, nM.L)({ analyticsLocations: l, guildId: i });
        }, [l, i]),
        c = (0, N.useCallback)(() => {
            (0, xm.p)({ displayNameStyles: null }), X.default.track(Q.HAw.DISPLAY_NAME_STYLES_REMOVED);
        }, []),
        g = (0, N.useCallback)(() => {
            (0, xm.p)({ guildId: i, displayNameStyles: null });
        }, [i]),
        A = void 0 !== o || (null != i ? null != a : null != r);
    return (0, f.jsx)(oJ.A, {
        title: m.intl.string(nV.default["86GtGH"]),
        className: n,
        showPremiumIcon: s,
        errors: u,
        children: (0, f.jsxs)("div", {
            className: xp.N,
            children: [
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(nV.default.vJqrIg),
                    onClick: d,
                }),
                null == i &&
                    A &&
                    (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(nV.default.ymq8WQ),
                        onClick: c,
                    }),
                null != i &&
                    null != (void 0 !== o ? o : a) &&
                    (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(nV.default["j/KRxc"]),
                        onClick: g,
                    }),
            ],
        }),
    });
}
var xN = i(637193),
    x_ = i(727369);
function xC(e) {
    let { user: t, guild: i, titleIcon: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = null != i,
        { userNameplate: r, guildNameplate: a, pendingNameplate: o, pendingErrors: u } = (0, T0.rv)(t, i?.id),
        d = N.useCallback(() => {
            (0, xN.p)({ analyticsLocations: s, guildId: i?.id });
        }, [s, i?.id]),
        c = N.useCallback(() => {
            (0, xm.p)({ guildId: i?.id, nameplate: null });
        }, [i?.id]);
    return (0, f.jsx)(oJ.A, {
        title: m.intl.string(m.t.x5CoXR),
        titleIcon: n,
        errors: u,
        children: (0, f.jsxs)("div", {
            className: x_.u,
            children: [
                (0, f.jsx)(eE.$, { variant: "primary", size: "sm", text: m.intl.string(m.t.BwdeM1), onClick: d }),
                (void 0 === o ? (l ? a : r) != null : null != o) &&
                    (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t["9zwziY"]),
                        onClick: c,
                    }),
            ],
        }),
    });
}
var xI = i(33023);
function xb(e) {
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
        { newestAnalyticsLocation: c } = (0, nU.Ay)(),
        g = d ? xd.wL : aw.$n;
    return (0, f.jsx)(oJ.A, {
        className: l,
        title: m.intl.string(m.t.Vgdusv),
        showPremiumIcon: a,
        errors: i,
        disabled: r,
        forcedDivider: u,
        children: (0, f.jsxs)("div", {
            className: xI.NC,
            children: [
                (0, f.jsx)(g, {
                    className: eF()({ [xI.yj]: d }),
                    size: aw.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, xt.XD)({ uploadType: xE.HL.BANNER, analyticsSource: c, guildId: s, isTryItOut: o }),
                    children: m.intl.string(m.t.N0bC3P),
                }),
                t &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xI.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != s ? m.intl.string(m.t.jHlJNS) : m.intl.string(m.t.tT9n7D),
                            onClick: () => n(null),
                        }),
                    }),
            ],
        }),
    });
}
var xv = i(617061),
    xj = i(872246);
function xy(e) {
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
        { analyticsLocations: u } = (0, nU.Ay)(),
        d = o6.Ay.canUsePremiumProfileCustomization(t),
        c = (0, T0.N2)({ user: t, guildId: i?.id }),
        { pendingProfileEffect: g, errors: A } = (0, T0.nZ)(i?.id);
    N.useEffect(() => {
        d &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: u,
            });
    }, [d, u]);
    let h = a ? xd.wL : aw.$n;
    return (0, f.jsx)(oJ.A, {
        forcedDivider: r,
        borderType: cn.i.PREMIUM,
        hasBackground: !0,
        title: l,
        showBorder: o,
        errors: A,
        className: s,
        children: (0, f.jsxs)("div", {
            className: xj.NC,
            children: [
                (0, f.jsx)(h, {
                    size: aw.$n.Sizes.SMALL,
                    onClick: () => {
                        (0, xv.W)({ analyticsLocations: u, guild: i, initialSelectedEffect: n });
                    },
                    className: eF()({ [xj.yj]: a }),
                    children: m.intl.string(m.t["/dRfCf"]),
                }),
                (void 0 === g ? null != c : null != g) &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xj.DT,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != i ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.uMuafO),
                            onClick: () => {
                                (0, xm.p)({ guildId: i?.id, profileEffect: null });
                            },
                        }),
                    }),
            ],
        }),
    });
}
var xO = i(13875),
    xR = i(515727),
    xL = i(238780);
function xD(e) {
    let { user: t, guild: i, sectionTitle: n } = e,
        { analyticsLocations: s } = (0, nU.Ay)(),
        l = (0, xO.sk)("ProfileFrameSection"),
        r = (0, T0.Xf)({ user: t, guildId: i?.id }),
        { pendingProfileFrame: a, errors: o } = (0, T0.Tu)(i?.id),
        [u, d] = (0, eS.kn)([ex.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE]),
        c = u === ex.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE;
    return l
        ? (0, f.jsx)(oJ.A, {
              showBorder: c,
              borderType: c ? cn.i.NEW_UPSELL : cn.i.PREMIUM,
              hasBackground: c,
              title: n,
              titleBadge: c ? (0, f.jsx)(n7.Lp, { text: m.intl.string(m.t.y2b7CA), className: xL.Ad }) : void 0,
              description: c ? m.intl.string(m.t.yMoMAt) : void 0,
              errors: o,
              children: (0, f.jsxs)("div", {
                  className: xL.NC,
                  children: [
                      (0, f.jsx)(eE.$, {
                          variant: "primary",
                          size: "sm",
                          text: m.intl.string(m.t["9/hmle"]),
                          onClick: () => {
                              (0, xR.w)({ analyticsLocations: s, guild: i }), d(t9.i.TAKE_ACTION);
                          },
                      }),
                      (void 0 === a ? null != r : null != a) &&
                          (0, f.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: xL.DT,
                              children: (0, f.jsx)(eE.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.nQBruk),
                                  onClick: () => {
                                      (0, xm.p)({ guildId: i?.id, profileFrame: null });
                                  },
                              }),
                          }),
                  ],
              }),
          })
        : null;
}
var xP = i(33851),
    xG = i.n(xP),
    xU = i(602853),
    xM = i(654107),
    xV = i(999291),
    xk = i(101928),
    xw = i(835245),
    xF = i(317097),
    xB = i(508274),
    xz = i(919796),
    xY = i(773431);
function xX(e) {
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
        d = N.useRef(null),
        c = (0, xU.r)(F.A.colors.BACKGROUND_BASE_LOW).hex(),
        g = F.A.colors.BACKGROUND_MOD_MUTED.css,
        A = (0, xt.sN)(n),
        h = (0, xF.Hl)(n),
        E = h === c ? g : h,
        T = A ? F.A.unsafe_rawColors.WHITE.css : F.A.unsafe_rawColors.PRIMARY_530.css,
        x = (0, xz.A)(a),
        S = (0, xz.A)(o),
        [p, _] = N.useState((0, xw.A)());
    return (
        N.useEffect(() => {
            (x !== a || S !== o) && _((0, xw.A)());
        }, [o, a, S, x]),
        (0, f.jsx)(G.Y, {
            targetElementRef: d,
            positionKey: p,
            renderPopout: (e) =>
                (0, f.jsx)(xB.VN, {
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
                return (0, f.jsxs)("div", {
                    ref: d,
                    className: eF()(xY.oP, { [xY.r9]: l }),
                    children: [
                        (0, f.jsx)(V.D, {
                            ...i,
                            tabIndex: l ? -1 : 0,
                            onClick: l ? Q.tEg : t,
                            style: { backgroundColor: h, borderColor: E },
                            className: xY.nf,
                            "aria-label": m.intl.string(m.t.Qp04hK),
                            focusProps: { ringTarget: d },
                            children: (0, f.jsx)(o3.R, {
                                size: "custom",
                                className: xY.BW,
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
var xH = i(362656);
function xK(e) {
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
        c = (0, xV.Ay)(t.id, r),
        { primaryColor: g, secondaryColor: A } = (0, xk.A)({
            user: t,
            displayProfile: c,
            pendingThemeColors: n,
            isPreview: !0,
        }),
        h = o6.Ay.canUsePremiumProfileCustomization(t),
        E = null != i ? i : t.getAvatarURL(r, 80),
        T = (0, xU.r)(F.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = (0, xM.rh)(E, T, !1);
    if (null == g || null == A) return null;
    let S = (e) => {
        s(xG()(e, c?.themeColors) ? void 0 : e);
    };
    return (0, f.jsx)(oJ.A, {
        title: m.intl.string(m.t.DMeO2X),
        disabled: !h && !l,
        className: eF()(xH.__invalid_profileThemesSection, a),
        showPremiumIcon: o,
        forcedDivider: d,
        children: (0, f.jsxs)("div", {
            className: xH.hd,
            children: [
                (0, f.jsx)("div", {
                    className: xH.YX,
                    children: (0, f.jsx)(xX, {
                        onChange: (e) => S([e, A]),
                        color: g,
                        suggestedColors: x,
                        showEyeDropper: !0,
                        label: (0, f.jsx)(k.E, {
                            className: xH.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t.C3KTQk),
                        }),
                    }),
                }),
                (0, f.jsx)("div", {
                    className: xH.YX,
                    children: (0, f.jsx)(xX, {
                        onChange: (e) => S([g, e]),
                        color: A,
                        suggestedColors: x,
                        showEyeDropper: !0,
                        label: (0, f.jsx)(k.E, {
                            className: xH.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t["8elvy6"]),
                        }),
                    }),
                }),
                u &&
                    null != r &&
                    (0, f.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: xH.WA,
                        children: (0, f.jsx)(eE.$, {
                            variant: "secondary",
                            size: "sm",
                            text: m.intl.string(m.t["L+GmoR"]),
                            onClick: () => S([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
function xW(e) {
    let {
            sectionTitle: t,
            errors: i,
            onPronounsChange: n,
            pendingPronouns: s,
            placeholder: l,
            currentPronouns: r,
            disabled: a = !1,
        } = e,
        o = (0, sS.GV)();
    return (0, f.jsx)(oJ.A, {
        title: t,
        titleId: o,
        errors: i,
        disabled: a,
        children: (0, f.jsx)(lD.k, {
            "aria-labelledby": o,
            placeholder: l ?? m.intl.string(m.t.NPEUUu),
            maxLength: 40,
            value: s ?? r,
            onChange: function (e) {
                n(e === r ? void 0 : e);
            },
            disabled: a,
        }),
    });
}
var xZ = i(427262),
    xq = i(576705),
    xQ = i(376294);
function xJ(e) {
    let { errors: t, pendingNick: i, currentNick: n, username: s, user: l, guild: r } = e,
        a = (0, R.bG)([xq.A], () => xq.A.can(Q.xBc.CHANGE_NICKNAME, r) || xq.A.can(Q.xBc.MANAGE_NICKNAMES, r)),
        o = (0, Ti.L)(sf.PremiumTypes.TIER_2);
    return (0, f.jsxs)(oJ.A, {
        title: m.intl.string(m.t.me1lRk),
        errors: t,
        children: [
            (0, f.jsx)(lD.k, {
                value: i ?? n ?? "",
                placeholder: s,
                maxLength: Q.d0r,
                onChange: function (e) {
                    (0, xm.p)({ guildId: r.id, nickname: e });
                },
                disabled: !a,
                helperText: a ? void 0 : m.intl.string(m.t.gzjxQi),
            }),
            o && (0, f.jsx)(xf, { user: l, guildId: r.id, className: xQ.F }),
        ],
    });
}
var x$ = i(574173);
let x0 = "/assets/b25da78aa7949feb.png";
function x1(e) {
    let { user: t, showOverlay: i, children: n } = e,
        s = (0, d6.Ay)(),
        { analyticsLocations: l } = (0, nU.Ay)(eV.A.PREMIUM_UPSELL_OVERLAY);
    return (N.useEffect(() => {
        i &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                location_stack: l,
                type: sf.e.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE,
            });
    }, [i, l]),
    i)
        ? (0, f.jsxs)("div", {
              className: x$.ry,
              children: [
                  (0, f.jsx)("div", { children: n }),
                  (0, f.jsxs)("div", {
                      className: x$.Wc,
                      children: [
                          (0, f.jsx)("img", {
                              className: x$.Tn,
                              alt: m.intl.string(m.t.LHFZQy),
                              src: (function (e) {
                                  switch (e) {
                                      case Q.NJ8.DARK:
                                      case Q.NJ8.DARKER:
                                      case Q.NJ8.MIDNIGHT:
                                          return x0;
                                      case Q.NJ8.LIGHT:
                                          return "/assets/a98f1410707fafea.png";
                                      default:
                                          return x0;
                                  }
                              })(s),
                          }),
                          (0, f.jsxs)("div", {
                              className: x$._9,
                              children: [
                                  (0, f.jsx)(k.E, {
                                      variant: "text-lg/semibold",
                                      color: "always-white",
                                      children: m.intl.string(m.t.dMaDFX),
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/normal",
                                      color: "always-white",
                                      children: m.intl.string(m.t.F7sgFH),
                                  }),
                              ],
                          }),
                          (0, f.jsx)(ci.A, {
                              size: aw.$n.Sizes.LARGE,
                              color: aw.$n.Colors.GREEN,
                              textOptions: {
                                  textOverride: o6.Ay.isPremium(t)
                                      ? m.intl.string(m.t.AfRWI8)
                                      : m.intl.string(m.t.nkdUym),
                              },
                              subscriptionTier: sf.pe.TIER_2,
                          }),
                      ],
                  }),
              ],
          })
        : n;
}
var x2 = i(887267);
function x3() {
    var e;
    let t = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        i = (0, Ti.L)(sf.PremiumTypes.TIER_2),
        n = (0, R.bG)([TH.A, K.A], () => K.A.getGuild(TH.A.selectedGuildId));
    tO()(null != n, "guild should not be null");
    let {
            pendingAvatar: s,
            pendingNickname: l,
            pendingBanner: r,
            pendingBio: a,
            pendingPronouns: o,
            pendingThemeColors: u,
            errors: d,
        } = (0, R.cf)([TH.A], () => ({ ...TH.A.getPendingChanges(n.id), errors: TH.A.getErrors(n.id) })),
        c = (0, T4.V7)({ userId: t.id, image: s }),
        g = (0, xe.EC)(n.id),
        A = (0, R.bG)([T8.Ay], () => (null == n.id ? null : T8.Ay.getMember(n.id, t.id))),
        h = (0, R.bG)([T5.A], () => T5.A.getGuildMemberProfile(t.id, n.id)),
        E = o6.Ay.canUsePremiumProfileCustomization(t),
        T = (0, T0.z5)(s, A?.avatar),
        x = (0, T0.Ac)(r, h?.banner),
        S = ((e = h?.themeColors), void 0 === u ? null != e : u?.[0] != null && u?.[1] != null),
        p = h?.bio ?? "",
        N = h?.pronouns ?? "";
    return (0, f.jsxs)("div", {
        className: x2.Q,
        children: [
            (0, f.jsx)(
                xJ,
                {
                    errors: d?.nick ?? g?.nick,
                    username: xZ.Ay.getName(t),
                    pendingNick: l,
                    currentNick: A?.nick,
                    user: t,
                    guild: n,
                },
                "nick",
            ),
            (0, f.jsx)(
                xW,
                {
                    sectionTitle: m.intl.string(m.t["+T3RI/"]),
                    errors: d?.pronouns,
                    onPronounsChange: (e) => (0, xm.p)({ guildId: n.id, pronouns: e }),
                    pendingPronouns: o,
                    currentPronouns: N,
                },
                "pronouns",
            ),
            (0, f.jsxs)(x1, {
                user: t,
                showOverlay: !E,
                children: [
                    (0, f.jsx)(
                        xS,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t.lqaIxI),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oZ.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x2.a,
                                        }),
                                    }),
                                ],
                            }),
                            showRemoveAvatarButton: T,
                            onAvatarChange: (e) =>
                                (0, xt.rM)(e, A?.avatar, (e) => (0, xm.p)({ guildId: n.id, avatar: e })),
                            errors: d?.avatar,
                            guildId: n.id,
                            disabled: !E,
                        },
                        "avatar",
                    ),
                    (0, f.jsx)(
                        xh,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t["7v0T9P"]),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oZ.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x2.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "decoration",
                    ),
                    !i && (0, f.jsx)(xf, { user: t, guildId: n.id }),
                    (0, f.jsx)(
                        xC,
                        {
                            user: t,
                            guild: n,
                            titleIcon: (0, f.jsx)(e1.m, {
                                text: m.intl.string(m.t["5AFxuK"]),
                                children: (0, f.jsx)(oZ.t, { size: "md", color: "currentColor", className: x2.a }),
                            }),
                        },
                        "nameplate",
                    ),
                    (0, f.jsx)(
                        xy,
                        {
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t.wR5wOo),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oZ.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x2.a,
                                        }),
                                    }),
                                ],
                            }),
                            user: t,
                            guild: n,
                        },
                        "effect",
                    ),
                    (0, f.jsx)(xD, { user: t, guild: n, sectionTitle: m.intl.string(m.t.GWrZOd) }, "frame"),
                    (0, f.jsx)(
                        xb,
                        {
                            showRemoveBannerButton: x,
                            errors: d?.banner,
                            onBannerChange: (e) =>
                                (0, xt.rM)(e, h?.banner, (e) => (0, xm.p)({ guildId: n.id, banner: e })),
                            guildId: n.id,
                            disabled: !E,
                        },
                        "banner",
                    ),
                    (0, f.jsx)(xK, {
                        user: t,
                        pendingAvatarSrc: c,
                        pendingColors: u,
                        onThemeColorsChange: (e) => (0, xm.p)({ guildId: n.id, themeColors: e }),
                        guildId: n.id,
                        showResetThemeButton: S,
                    }),
                    (0, f.jsx)(
                        xu,
                        {
                            placeholder: m.intl.string(m.t["/7NKgv"]),
                            sectionTitle: (0, f.jsxs)(f.Fragment, {
                                children: [
                                    m.intl.string(m.t.ZzAR2Y),
                                    (0, f.jsx)(e1.m, {
                                        text: m.intl.string(m.t["5AFxuK"]),
                                        children: (0, f.jsx)(oZ.t, {
                                            size: "md",
                                            color: "currentColor",
                                            className: x2.a,
                                        }),
                                    }),
                                ],
                            }),
                            onBioChange: (e) => (0, xm.p)({ guildId: n.id, bio: e }),
                            errors: d?.bio ?? g?.bio,
                            pendingBio: a,
                            currentBio: p,
                            disabled: !E,
                        },
                        "about",
                    ),
                ],
            }),
        ],
    });
}
var x6 = i(405318);
function x4(e) {
    (0, C.openModalLazy)(async () => {
        let { default: t } = await Promise.all([i.e("2125"), i.e("66901"), i.e("61129")]).then(i.bind(i, 475312));
        return (i) => (0, f.jsx)(t, { source: { ...e, page: Q.liQ.GUILD_MEMBER_PROFILE_SETTINGS }, ...i });
    });
}
function x5(e) {
    let { selectedGuild: t, onGuildChange: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(eV.A.USER_SETTINGS_GUILD_PROFILE),
        s = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        l = (0, R.bG)([T8.Ay], () => (null != t ? T8.Ay.getMember(t.id, s.id) : null)),
        r = (0, R.bG)([T5.A], () => !T5.A.isFetchingProfile(s.id, t?.id)),
        a = (0, R.bG)([eC.A], () => eC.A.hidePersonalInformation),
        { pendingAvatar: o, pendingNameplate: u, ...d } = (0, R.cf)([TH.A], () => TH.A.getPendingChanges(t?.id)),
        c = (0, T4.V7)({ userId: s.id, image: o }),
        g = (0, T0.lw)({
            pendingValue: u,
            userValue: s?.collectibles?.nameplate,
            guildValue: l?.collectibles?.nameplate,
            guildId: t?.id,
        }),
        { pendingDisplayNameStyles: A } = (0, T0.B0)(s, t?.id);
    return (N.useEffect(() => () => n6.h.wait(TJ.IM), []), a)
        ? (0, f.jsx)(u2.A, {})
        : r
          ? (0, f.jsxs)(nU.f5, {
                value: n,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/normal",
                        children: m.intl.format(m.t["/PTB2E"], {
                            helpCenterLink: to.A.getArticleURL(Q.MVz.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(oQ.A, { guildId: t.id, onChange: i }),
                                  (0, f.jsx)(T3, {
                                      profilePreviewTitle: (0, f.jsx)(eh.D, {
                                          variant: "heading-md/medium",
                                          className: x6.YV,
                                          children: m.intl.formatToPlainString(m.t.Tc0slG, { guildName: t?.name }),
                                      }),
                                      profilePreview: (0, f.jsx)(T6.A, {
                                          ...d,
                                          pendingAvatar: c,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: o6.Ay.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: x4,
                                          containerClassName: x6.ti,
                                      }),
                                      nameplatePreview: (0, f.jsx)(T$.A, {
                                          ...d,
                                          pendingDisplayNameStyles: A,
                                          user: s,
                                          guildId: t?.id,
                                          nameplate: g,
                                          className: null == g ? x6.tJ : void 0,
                                          isHighlighted: !0,
                                      }),
                                      children: (0, f.jsx)(x3, {}),
                                  }),
                              ],
                          })
                        : (0, f.jsx)(T9, {}),
                ],
            })
          : (0, f.jsx)(u4.y, {});
}
var x8 = i(903209),
    x7 = i(39409);
let x9 = (e) => {
    let { children: t, notice: i } = e;
    return (0, f.jsxs)("div", { className: x7.r, children: [i, (0, f.jsx)("div", { children: t })] });
};
var Se = i(269115),
    St = i(823092),
    Si = i(859040),
    Sn = i(379197),
    Ss = i(488430),
    Sl = i(457421),
    Sr = i(940622),
    Sa = i(559474),
    So = i(144030);
let Su = () => {
    let e,
        t,
        i,
        n,
        { analyticsLocations: s } = (0, nU.Ay)(eV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        l = N.useRef(null),
        {
            asset: r,
            popoutAsset: a,
            title: o,
            body: u,
            version: d,
            revertTextColor: c,
        } = ((e = (0, Sr.mb)(Sa.RN.UPSELL_BANNER)),
        (t = (0, Sr.mb)(Sa.RN.UPSELL_BANNER_POPOUT)),
        (i = (0, R.bG)([Sl.A], () => Sl.A.getMarketingBySurface(Sn.R.EDIT_PROFILE_SETTINGS))),
        (n = N.useMemo(
            () =>
                null != i
                    ? i
                    : {
                          asset: "/assets/30e2c68819facd98.png",
                          popoutAsset: "/assets/c6d55507d7473057.png",
                          title: m.intl.string(m.t.QZVVBh),
                          body: m.intl.string(m.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [i],
        )),
        N.useMemo(
            () => ({ ...n, type: Ss.G.BANNER, asset: e ?? n.asset, popoutAsset: t ?? n.popoutAsset }),
            [e, t, n],
        )),
        { navigateWithValidation: g } = (0, St.L_)();
    return (
        N.useEffect(() => {
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: s,
                version: d,
            });
        }, [s, d]),
        (0, f.jsxs)("div", {
            ref: l,
            className: So.kL,
            style: { backgroundImage: `url(${r})` },
            children: [
                (0, f.jsx)("div", {
                    className: So.JS,
                    "aria-hidden": !0,
                    role: "presentation",
                    children: (0, f.jsx)("img", { src: a, className: So.Qw, alt: "" }),
                }),
                (0, f.jsxs)("div", {
                    className: So.Em,
                    children: [
                        (0, f.jsx)(eh.D, {
                            variant: "heading-lg/extrabold",
                            color: c ? "text-overlay-dark" : "currentColor",
                            className: So.DD,
                            children: o,
                        }),
                        (0, f.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: c ? "text-overlay-dark" : "currentColor",
                            children: u,
                        }),
                    ],
                }),
                (0, f.jsx)(eE.$, {
                    onClick: () => {
                        g(() =>
                            (0, Si.Cz)({
                                analyticsLocations: s,
                                analyticsSource: eV.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                            }),
                        );
                    },
                    variant: "overlay-primary",
                    text: m.intl.string(m.t.fYfGgK),
                }),
            ],
        })
    );
};
var Sd = i(451909),
    Sc = i(202639),
    Sg = i(400669),
    Sm = i(835071),
    SA = i(422936),
    Sh = i(234419),
    SE = i(590180),
    ST = i(898461),
    Sx = i(207803),
    SS = i(508425),
    Sp = i(559949);
let Sf = {
        above_the_clouds: {
            preset: "above_the_clouds",
            themeColors: [752280, 9215590],
            avatarDecorationSkuId: "1144059132517826601",
            displayNameStyles: { fontId: Sp.x.CHICLE, effectId: SS.z.POP, colors: [959694] },
            getName: () => m.intl.string(m.t["TFc+iF"]),
            getHeaderSrc: () => i(702051).A,
            getBannerSrc: (e) => (e ? i(735161).A : i(887e3).A),
        },
        cyberpunk: {
            preset: "cyberpunk",
            themeColors: [1967991, 742532],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: Sp.x.PIXELIFY, effectId: SS.z.NEON, colors: [2949343] },
            getName: () => m.intl.string(m.t["4g+5bq"]),
            getHeaderSrc: () => i(272017).A,
            getBannerSrc: (e) => (e ? i(735271).A : i(208574).A),
        },
        shadow_realm: {
            preset: "shadow_realm",
            themeColors: [0, 4458504],
            avatarDecorationSkuId: "1144058522808614923",
            displayNameStyles: { fontId: Sp.x.NEO_CASTEL, effectId: SS.z.TOON, colors: [0xff0000] },
            getName: () => m.intl.string(m.t.ycg1xj),
            getHeaderSrc: () => i(863653).A,
            getBannerSrc: (e) => (e ? i(538263).A : i(576974).A),
        },
        starlit_dream: {
            preset: "starlit_dream",
            themeColors: [5123751, 590625],
            avatarDecorationSkuId: "1144058844004233369",
            displayNameStyles: { fontId: Sp.x.CHERRY_BOMB, effectId: SS.z.TOON, colors: [3343795] },
            getName: () => m.intl.string(m.t["9WLHvr"]),
            getHeaderSrc: () => i(434361).A,
            getBannerSrc: (e) => (e ? i(700309).A : i(135572).A),
        },
        neon_space: {
            preset: "neon_space",
            themeColors: [6094952, 1007678],
            avatarDecorationSkuId: null,
            displayNameStyles: { fontId: Sp.x.MUSEO_MODERNO, effectId: SS.z.NEON, colors: [28737] },
            getName: () => m.intl.string(m.t.UdNuqi),
            getHeaderSrc: () => i(301928).A,
            getBannerSrc: (e) => (e ? i(285974).A : i(775627).A),
        },
    },
    SN = (e) => Sf[e],
    S_ = Object.keys(Sf),
    SC = (e) => {
        let t = null == e ? S_ : S_.filter((t) => t !== e);
        return t[Math.floor(Math.random() * t.length)];
    };
var SI = i(371912),
    Sb = i(674253);
function Sv(e) {
    let { preset: t, onShuffle: i } = e,
        n = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
        s = (0, SI.Xf)({ useReducedMotion: n }),
        { name: l, header: r } = N.useMemo(() => {
            let e = SN(t);
            return { name: e.getName(), header: e.getHeaderSrc() };
        }, [t]);
    return (0, f.jsxs)("div", {
        className: Sb.kL,
        children: [
            (0, f.jsx)(V.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                className: Sb.x6,
                "aria-label": m.intl.string(m.t["44yJxh"]),
                children: s.render(),
            }),
            (0, f.jsxs)(V.D, {
                onClick: () => {
                    i(), s.startAnimation(!1);
                },
                "aria-label": `${l}: ${m.intl.string(m.t["44yJxh"])}`,
                className: Sb.Lt,
                children: [
                    (0, f.jsx)("img", { alt: "", "aria-hidden": !0, src: r, className: Sb.L_ }),
                    (0, f.jsx)(k.E, { className: Sb._e, variant: "text-sm/bold", color: "always-white", children: l }),
                ],
            }),
        ],
    });
}
var Sj = i(410516),
    Sy = i(811611),
    SO = i(515718),
    SR = i(507553);
function SL(e, t) {
    let i = SR.A.useField("scrollPosition"),
        n = (0, R.bG)([iW.A], () => iW.A.useReducedMotion);
    (0, N.useEffect)(() => {
        let s = e.current;
        if (null == s || i !== t) return;
        let l = requestAnimationFrame(() => {
            s.scrollIntoView({ behavior: n ? "auto" : "smooth" }), SR.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(l);
    }, [e, t, i, n]);
}
var SD = i(844222),
    SP = i(314649);
function SG(e) {
    let { user: t } = e,
        { reducedMotion: n } = N.useContext(SD.C),
        {
            pendingAvatar: s,
            pendingBanner: l,
            pendingAvatarDecoration: r,
            pendingProfileEffect: a,
            pendingDisplayNameStyles: o,
            pendingThemeColors: u,
            pendingPronouns: d,
            pendingBio: c,
            tryItOutThemeColors: g,
            tryItOutAvatar: m,
            tryItOutBanner: A,
            tryItOutAvatarDecoration: h,
            tryItOutDisplayNameStyles: E,
        } = (0, R.cf)([TH.A], () => {
            let e = TH.A.getPendingChanges(),
                t = TH.A.getTryItOutChanges();
            return { ...e, ...t };
        }),
        T = (0, T4.V7)({ userId: t.id, image: m ?? s });
    return (0, f.jsx)(T6.A, {
        user: t,
        pendingPronouns: d,
        pendingBio: c,
        pendingBanner: A ?? l ?? i(636763),
        pendingDisplayNameStyles: E ?? o,
        pendingAvatar: T,
        pendingThemeColors: g ?? u,
        pendingAvatarDecoration: void 0 !== h ? h : r,
        pendingProfileEffect: a,
        avatarClassName: null != m || null != s || n.enabled ? void 0 : SP.WX,
        containerClassName: SP.ti,
        canUsePremiumCustomization: !0,
        isTryItOut: !0,
        hideExampleButton: !0,
    });
}
var SU = i(461414);
function SM(e) {
    let { user: t, isVisible: i, shouldShow: n } = e,
        s = o6.Ay.isPremium(t),
        l = o6.Ay.canUseAnimatedAvatar(t),
        {
            pendingAvatar: r,
            pendingThemeColors: a,
            tryItOutThemeColors: o,
            tryItOutAvatar: u,
            tryItOutBanner: d,
        } = (0, R.cf)([TH.A], () => {
            let e = TH.A.getPendingChanges(),
                t = TH.A.getErrors(),
                i = TH.A.getTryItOutChanges();
            return { ...e, ...i, errors: t };
        }),
        { preset: c, onShuffle: g } = (function () {
            let e = (0, R.bG)([iW.A], () => iW.A.useReducedMotion),
                [t, i] = (0, N.useState)(SC()),
                {
                    banner: n,
                    themeColors: s,
                    avatarDecorationSkuId: l,
                    displayNameStyles: r,
                } = (0, N.useMemo)(() => {
                    let i = SN(t);
                    return {
                        banner: i.getBannerSrc(e),
                        themeColors: i.themeColors,
                        avatarDecorationSkuId: i.avatarDecorationSkuId,
                        displayNameStyles: i.displayNameStyles,
                    };
                }, [t, e]),
                a = (0, R.bG)([SE.A], () => {
                    let e = SE.A.getProduct(l);
                    return (0, ST.T)(e?.items[0]) ? e.items[0] : null;
                });
            (0, N.useEffect)(() => {
                (0, Sx.w5)({ banner: n, themeColors: s, avatarDecoration: a, displayNameStyles: r });
            }, [n, s, a, r]);
            let o = (0, N.useCallback)(() => {
                let e = SC(t);
                i(e), X.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e });
            }, [t]);
            return { preset: t, onShuffle: o };
        })(),
        A = N.useRef(null);
    SL(A, nv._F.TRY_IT_OUT);
    let { analyticsLocations: h, sourceAnalyticsLocations: E } = (0, nU.Ay)(eV.A.USER_SETTINGS_TRY_OUT_PREMIUM),
        T = (e) => {
            e &&
                (d?.startsWith("https:") === !0
                    ? fetch(d)
                          .then((e) => e.blob())
                          .then((e) => (0, SO.We)(e))
                          .then((e) => {
                              (0, xm.p)({ avatar: u, themeColors: o, banner: e });
                          })
                          .catch(() => {
                              (0, xm.p)({ avatar: u, themeColors: o });
                          })
                    : null != d
                      ? (0, xm.p)({ avatar: u, themeColors: o, banner: d })
                      : (0, xm.p)({ avatar: u, themeColors: o }),
                X.default.track(Q.HAw.TRY_IT_OUT_PRESET_SELECTED, { preset: c }));
        };
    N.useEffect(() => {
        i &&
            X.default.track(Q.HAw.PREMIUM_UPSELL_VIEWED, {
                type: sf.e.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: Q.liQ.USER_SETTINGS },
                location_stack: E,
            });
    }, [E, t, i]);
    let x = (0, Sh.V)()?.subscription_trial?.sku_id === sf.pe.TIER_2,
        S = (0, SA.O)(),
        p = (0, Sj.U9)(S, sf.pe.TIER_2);
    return n
        ? (0, f.jsx)(nU.f5, {
              value: h,
              children: (0, f.jsxs)(cn.A, {
                  ref: A,
                  className: SU.MT,
                  type: cn.i.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, f.jsx)(T3, {
                          stickyPreview: !1,
                          layoutClassName: SU.th,
                          profilePreviewTitle: (0, f.jsxs)(f.Fragment, {
                              children: [
                                  (0, f.jsx)(oZ.t, { size: "md", color: "currentColor", className: SU.PC }),
                                  m.intl.string(m.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, f.jsxs)(f.Fragment, {
                              children: [(0, f.jsx)(Sv, { preset: c, onShuffle: g }), (0, f.jsx)(SG, { user: t })],
                          }),
                          children: (0, f.jsxs)("div", {
                              children: [
                                  (0, f.jsxs)("div", {
                                      children: [
                                          (0, f.jsx)(eh.D, {
                                              variant: "heading-xl/extrabold",
                                              children: m.intl.string(m.t["2zGdAW"]),
                                          }),
                                          (0, f.jsx)(k.E, {
                                              className: SU.h_,
                                              variant: "text-sm/normal",
                                              children: m.intl.string(m.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, f.jsx)(xK, {
                                      className: SU.fz,
                                      user: t,
                                      pendingAvatarSrc: (0, T4.V7)({ userId: t.id, image: u ?? r }),
                                      pendingColors: o ?? a,
                                      onThemeColorsChange: Sx.a,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, f.jsx)(xb, {
                                      className: SU.fz,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != d,
                                      onBannerChange: Sx.xe,
                                      showPremiumIcon: !1,
                                  }),
                                  !l &&
                                      (0, f.jsx)(xS, {
                                          className: SU.fz,
                                          isTryItOut: !0,
                                          onAvatarChange: Sx.e$,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: m.intl.string(m.t["7z0D1c"]),
                                          sectionTitle: m.intl.string(m.t.vtFfPX),
                                      }),
                                  (0, f.jsx)(xf, { user: t, className: SU.fz }),
                                  !x &&
                                      (0, f.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          children: m.intl.string(m.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !x &&
                          (0, f.jsx)(Sc.d, {
                              onSubscribeModalClose: T,
                              className: SU.Kv,
                              showUpsell: !0,
                              text: m.intl.format(m.t.TmfgI2, {
                                  onClick: () => {
                                      (0, Sm.K)({ onSubscribeFinish: T });
                                  },
                              }),
                              button: s
                                  ? m.intl.string(m.t.AfRWI8)
                                  : p
                                    ? m.intl.formatToPlainString(m.t.bkQ4bH, { percent: S?.discount.amount })
                                    : m.intl.string(m.t.pj0XBN),
                              position: "inline",
                          }),
                      x &&
                          (0, f.jsxs)("div", {
                              children: [
                                  (0, f.jsx)("div", { className: SU.BU }),
                                  (0, f.jsx)(Sy.Ay, {
                                      type: sf.e.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: sf.pe.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
var SV = i(814390),
    Sk = i(909536),
    Sw = i(843282),
    SF = i(145497),
    SB = i(685073),
    Sz = i(534400),
    SY = i(581781),
    SX = i(743981),
    SH = i(51358);
let SK = (0, sS.Ld)(),
    SW = N.memo(function (e) {
        let { availablePrimaryGuilds: t, pendingPrimaryGuildId: i, onChange: n } = e,
            s = N.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
            l = (0, R.bG)([t6.default], () => (0, SB.Zo)(t6.default.getCurrentUser()?.primaryGuild).guildId),
            r = void 0 !== i ? i : l,
            a = N.useMemo(
                () => t.reduce((e, t) => (t.profile?.tag != null && e.push({ label: t.name, value: t.id }), e), []),
                [t],
            ),
            o = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, f.jsx)(SY.A, {
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
            u = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    return null == t || null == t.profile?.tag
                        ? null
                        : (0, f.jsx)(SF.j, {
                              guildId: t.id,
                              guildName: t.name,
                              guildIcon: t.icon,
                              iconSize: 32,
                              animate: !1,
                          });
                },
                [s],
            ),
            d = N.useCallback(
                (e) => {
                    if (null == e) return null;
                    let t = s.get(e.value);
                    if (null == t) return null;
                    let i = t.profile?.tag;
                    return null == i
                        ? null
                        : (0, f.jsx)(Sz.o9, {
                              guildId: t.id,
                              guildTag: i,
                              guildBadge: t.profile?.badge ?? void 0,
                              badgeSize: SX.Sl.SIZE_16,
                              textColor: "interactive-text-default",
                              textVariant: "text-sm/semibold",
                          });
                },
                [s],
            ),
            c = N.useCallback(
                (e) => {
                    let t = e[0];
                    return null == t ? null : (0, f.jsx)(f.Fragment, { children: o(t) });
                },
                [o],
            ),
            g = N.useCallback(
                (e) => {
                    n?.(e);
                },
                [n],
            ),
            A = N.useCallback((e) => e === r, [r]),
            h = N.useCallback((e) => e, []),
            E = N.useCallback(() => {
                n?.(null);
            }, [n]),
            T = N.useRef(null);
        return (
            SL(T, nv._F.GUILD_TAG),
            (0, f.jsxs)(oJ.A, {
                title: m.intl.string(m.t.Pdd1nd),
                titleId: SK,
                ref: T,
                children: [
                    (0, f.jsx)(k.E, {
                        className: SH.VA,
                        variant: "text-sm/normal",
                        children: m.intl.string(m.t.mlZ6Jx),
                    }),
                    (0, f.jsx)(Sw.Pw, {
                        className: SH.Lt,
                        optionClassName: SH.S0,
                        isSelected: A,
                        options: a,
                        select: g,
                        renderLeading: u,
                        renderTrailing: d,
                        renderOptionValue: c,
                        serialize: h,
                        clear: E,
                        clearable: null != r,
                        maxVisibleItems: 8,
                        "data-migration-pending": !0,
                    }),
                ],
            })
        );
    });
var SZ = i(318785),
    Sq = i(556729);
let SQ = (0, sS.Ld)();
function SJ(e) {
    let t = (0, Ti.L)(sf.PremiumTypes.TIER_2);
    return (0, f.jsxs)(oJ.A, {
        errors: e.errors,
        disabled: e.disabled,
        title: m.intl.string(m.t["9AjdkD"]),
        titleId: SQ,
        children: [
            (0, f.jsx)("div", {
                children: (0, f.jsx)(lD.k, {
                    "aria-labelledby": SQ,
                    placeholder: e.placeholder,
                    maxLength: Q.zzC,
                    onChange: e.onGlobalNameChange,
                    value: e.pendingGlobalName ?? e.currentGlobalName ?? "",
                }),
            }),
            t && (0, f.jsx)(xf, { user: e.user, className: Sq.F }),
        ],
    });
}
function S$(e) {
    let { legacyUsername: t, pendingLegacyUsernameDisabled: i } = e,
        n = g.m$.useSetting(),
        s = void 0 !== i ? i : n;
    return (0, f.jsx)(D.d, {
        label: m.intl.string(m.t["3cWDuO"]),
        description: s ? null : m.intl.formatToPlainString(m.t.aYhclf, { username: t }),
        checked: !s,
        onChange: (e) => {
            !e === n ? (0, TY._e)() : (0, xm.p)({ legacyUsernameDisabled: !e });
        },
    });
}
function S0(e) {
    let { user: t, savedUserColor: i, pendingColor: n, setPendingAccentColor: s } = e,
        l = t.getAvatarURL(null, 80),
        r = (0, xU.r)(F.A.unsafe_rawColors.PRIMARY_530).hex(),
        a = (0, xM.rh)(l, r, !1),
        o = (0, xF.LX)(a[0]);
    return (0, f.jsx)(oJ.A, {
        title: m.intl.string(m.t["/X3fkf"]),
        children: (0, f.jsx)(xX, { onChange: (e) => s(e), color: n ?? i ?? o, suggestedColors: a, showEyeDropper: !0 }),
    });
}
var S1 = i(518477);
let S2 = () => {
    let e = (0, R.bG)([cm.default], () => cm.default.getId());
    return (0, f.jsx)(oJ.A, {
        title: m.intl.string(m.t.Jzj9q4),
        children: (0, f.jsx)(eE.$, {
            text: m.intl.string(m.t.Geikwq),
            onClick: () => {
                (0, TZ.openUserProfileModal)({
                    userId: e,
                    sourceAnalyticsLocations: [eV.A.USER_SETTINGS_USER_PROFILE],
                    hideRestrictedProfile: !0,
                    tabSection: S1.RP.WIDGETS,
                });
            },
            size: "sm",
        }),
    });
};
var S3 = i(594453);
function S6() {
    let e = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e;
        }),
        t = (0, R.bG)([T5.A], () => T5.A.getUserProfile(e.id)),
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
        } = (0, R.cf)([TH.A], () => {
            let e = TH.A.getPendingChanges(),
                t = TH.A.getErrors();
            return { ...e, errors: t };
        }),
        g = (0, T4.V7)({ userId: e.id, image: i }),
        A = (0, xe.EC)(),
        h = o6.Ay.canUsePremiumProfileCustomization(e),
        E = (0, T0.z5)(i, e.avatar),
        T = (0, T0.Ac)(s, t?.banner),
        x = (0, xV.Ay)(e.id),
        S = x?.getLegacyUsername(),
        p = (c.global_name?.length ?? 0) > 0 ? c.global_name : (A?.nick ?? []),
        N = (c.bio?.length ?? 0) > 0 ? c.bio : (A?.bio ?? []),
        _ = (0, SZ.b)();
    return (0, f.jsxs)("div", {
        className: S3.Q,
        children: [
            (0, f.jsx)(SJ, {
                placeholder: e.username,
                errors: p,
                currentGlobalName: e.globalName,
                pendingGlobalName: n,
                onGlobalNameChange: (e) => (0, xm.p)({ globalName: e }),
                user: e,
            }),
            (0, f.jsx)(
                xW,
                {
                    sectionTitle: m.intl.string(m.t["+T3RI/"]),
                    errors: c.pronouns,
                    onPronounsChange: (e) => (0, xm.p)({ pronouns: e }),
                    pendingPronouns: r,
                    currentPronouns: t?.pronouns ?? "",
                },
                "pronouns",
            ),
            (0, f.jsx)(S2, {}),
            (0, f.jsx)(
                xS,
                {
                    onAvatarChange: (e) => {
                        (0, xm.p)({ avatar: e }), (0, T0.WU)(null == e ? "remove" : "set");
                    },
                    showRemoveAvatarButton: E,
                    errors: c.avatar,
                    sectionTitle: m.intl.string(m.t.lqaIxI),
                    forcedDivider: !0,
                },
                "avatar",
            ),
            (0, f.jsx)(xh, { user: e, sectionTitle: m.intl.string(m.t["7v0T9P"]) }, "decoration"),
            (0, f.jsx)(xC, { user: e }),
            (0, f.jsx)(xy, { user: e, sectionTitle: m.intl.string(m.t.wR5wOo) }, "effect"),
            (0, f.jsx)(xD, { user: e, sectionTitle: m.intl.string(m.t.GWrZOd) }, "frame"),
            h
                ? (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)(
                              xb,
                              {
                                  showRemoveBannerButton: T,
                                  errors: c.banner,
                                  onBannerChange: (e) => (0, xm.p)({ banner: e }),
                                  forcedDivider: !0,
                              },
                              "banner",
                          ),
                          (0, f.jsx)(xK, {
                              user: e,
                              pendingAvatarSrc: g,
                              pendingColors: o,
                              onThemeColorsChange: (e) => (0, xm.p)({ themeColors: e }),
                              forcedDivider: !0,
                          }),
                      ],
                  })
                : (0, f.jsx)(
                      S0,
                      {
                          user: e,
                          savedUserColor: t?.accentColor,
                          pendingColor: a,
                          setPendingAccentColor: (e) => (0, xm.p)({ accentColor: e }),
                      },
                      "color",
                  ),
            (0, f.jsx)(
                xu,
                {
                    sectionTitle: m.intl.string(m.t.ZzAR2Y),
                    errors: N,
                    onBioChange: (e) => (0, xm.p)({ bio: e }),
                    pendingBio: l,
                    currentBio: t?.bio ?? "",
                },
                "bio",
            ),
            _.length > 0 &&
                (0, f.jsx)(SW, {
                    availablePrimaryGuilds: _,
                    pendingPrimaryGuildId: d,
                    onChange: (e) => (0, xm.p)({ primaryGuildId: e }),
                }),
            null != S && (0, f.jsx)(S$, { legacyUsername: S, pendingLegacyUsernameDisabled: u }, "legacy_username"),
        ],
    });
}
function S4() {
    (0, C.openModalLazy)(async () => {
        let { default: e } = await Promise.all([i.e("2125"), i.e("66901"), i.e("41704")]).then(i.bind(i, 562011));
        return (t) =>
            (0, f.jsx)(e, {
                ...t,
                source: {
                    page: Q.liQ.USER_SETTINGS,
                    section: Q.JJy.SETTINGS_CUSTOMIZE_PROFILE,
                    object: Q.ZSU.BUTTON_CTA,
                    type: Q.AnalyticsObjectTypes.BUY,
                },
            });
    });
}
var S5 = i(743539);
function S8() {
    let e = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return tO()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e;
        }),
        t = (0, R.bG)([eC.A], () => eC.A.hidePersonalInformation),
        {
            pendingBio: i,
            pendingAvatar: n,
            pendingNameplate: s,
            showNotice: l,
            ...r
        } = (0, R.cf)([TH.A], () => ({ ...TH.A.getPendingChanges(), showNotice: TH.A.showNotice() })),
        a = (0, T4.V7)({ userId: e.id, image: n }),
        o = (0, T0.lw)({ pendingValue: s, userValue: e?.collectibles?.nameplate }),
        u = (0, SV.A)() && null != i ? Sd.Ay.parse(void 0, i).content : i,
        d = o6.Ay.canUsePremiumProfileCustomization(e),
        c = (0, Sk.St)("edit-profile-upsell"),
        { analyticsLocations: g } = (0, nU.Ay)(eV.A.USER_SETTINGS_USER_PROFILE);
    N.useEffect(() => () => n6.h.wait(TY.IM), []);
    let [A, h] = N.useState(!1),
        E = !d,
        T = N.useRef(null);
    return t
        ? (0, f.jsx)(u2.A, {})
        : (0, f.jsxs)(nU.f5, {
              value: g,
              children: [
                  (0, f.jsx)(Su, {}),
                  (0, f.jsx)(T3, {
                      profilePreview: (0, f.jsx)(T6.A, {
                          user: e,
                          canUsePremiumCustomization: d,
                          onUpsellClick: S4,
                          pendingBio: u,
                          ...r,
                          pendingAvatar: a,
                          containerClassName: S5.ti,
                      }),
                      nameplatePreview: (0, f.jsx)(T$.A, {
                          user: e,
                          nameplate: o,
                          ...r,
                          className: null == o ? S5.tJ : void 0,
                          isHighlighted: !0,
                      }),
                      children: (0, f.jsx)(S6, {}),
                  }),
                  (0, f.jsx)(Se.L, {
                      innerRef: T,
                      onChange: (e) => h(e),
                      threshold: 0.25,
                      active: E,
                      children: (0, f.jsx)("div", {
                          ref: T,
                          children: (0, f.jsx)(SM, { user: e, shouldShow: E, isVisible: A }),
                      }),
                  }),
                  E &&
                      !l &&
                      (0, f.jsx)(Sc.d, {
                          className: S5.EL,
                          showUpsell: !A,
                          text: m.intl.format(m.t.TmfgI2, { onClick: () => (0, Sm.K)({}) }),
                          textVariant: "heading-md/medium",
                          useUpdatedStyling: !0,
                          leadingAction: c
                              ? (0, f.jsx)(Sg.l, { size: "md", location: eV.A.PREMIUM_WISHLIST_EDIT_PROFILE_UPSELL })
                              : void 0,
                          button: (0, f.jsx)("div", {
                              className: S5.Xl,
                              children: (0, f.jsx)(eE.$, {
                                  variant: "overlay-primary",
                                  onClick: () => {
                                      X.default.track(Q.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                                          cta_variant: "floating_action_button",
                                      }),
                                          T?.current?.scrollIntoView({ behavior: "smooth" });
                                  },
                                  text: m.intl.string(m.t.uw9zI7),
                                  icon: oZ.t,
                              }),
                          }),
                      }),
              ],
          });
}
var S7 = i(625494),
    S9 = i(454078);
let pe = { [nv.Eq.USER_PROFILE]: "main_profile_tab", [nv.Eq.GUILD]: "guild_profile_tab" },
    pt = (0, o.E2)(d.X.PROFILE_SETTING, {
        Component: function () {
            let e = (0, R.bG)([lF.A, W.Ay, TH.A], () => {
                    let e = TH.A.selectedGuildId ?? lF.A.getGuildId();
                    return null == e || TH._.has(e) ? W.Ay.getFlattenedGuildIds().find((e) => !TH._.has(e)) : e;
                }),
                t = (0, R.bG)([K.A], () => K.A.getGuild(e)),
                i = (0, R.bG)([TH.A], () => TH.A.showNotice()),
                n = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                s = SR.A.useField("subsection");
            return (
                N.useEffect(() => {
                    (0, rf._)(pe[s]);
                }, [s]),
                N.useEffect(() => {
                    null != n && t?.id != null && (0, x8.A)(n.id, n.getAvatarURL(t?.id, 80), { guildId: t?.id });
                }, [t?.id, n]),
                (0, f.jsx)(x9, {
                    children: (0, f.jsxs)(d3.F, {
                        component: (0, f.jsx)(z.A, {
                            children: (0, f.jsx)(eh.D, {
                                variant: "heading-xl/normal",
                                children: m.intl.string(m.t["vi7f+q"]),
                            }),
                        }),
                        children: [
                            (0, f.jsxs)(Tq.V, {
                                className: S9.$H,
                                type: "top",
                                look: "brand",
                                selectedItem: s,
                                onItemSelect: function (e) {
                                    if (s !== e) {
                                        if (i) {
                                            (0, rN.fO)({ duration: 300, intensity: TQ.n3 }),
                                                S7._.dispatch(Q.jej.EMPHASIZE_NOTICE);
                                            return;
                                        }
                                        e === nv.Eq.GUILD && null != t && (0, TJ.V2)(t.id),
                                            SR.A.setState({ subsection: e });
                                    }
                                },
                                children: [
                                    (0, f.jsx)(
                                        Tq.V.Item,
                                        {
                                            className: S9.YU,
                                            id: nv.Eq.USER_PROFILE,
                                            children: m.intl.string(m.t["2p07FR"]),
                                        },
                                        nv.Eq.USER_PROFILE,
                                    ),
                                    (0, f.jsx)(
                                        Tq.V.Item,
                                        {
                                            className: eF()(S9.YU, S9.HY),
                                            "aria-label": m.intl.string(m.t.kPHroX),
                                            id: nv.Eq.GUILD,
                                            children: m.intl.string(m.t.kPHroX),
                                        },
                                        nv.Eq.GUILD,
                                    ),
                                ],
                            }),
                            s === nv.Eq.GUILD
                                ? (0, f.jsx)(x5, {
                                      selectedGuild: t,
                                      onGuildChange: function (e) {
                                          if (i) {
                                              (0, rN.fO)({ duration: 300, intensity: TQ.n3 }),
                                                  S7._.dispatch(Q.jej.EMPHASIZE_NOTICE);
                                              return;
                                          }
                                          null != e && (0, TJ.JJ)(e.id);
                                      },
                                  })
                                : (0, f.jsx)(S8, {}),
                        ],
                    }),
                })
            );
        },
        useSearchTerms: () => [
            m.intl.string(m.t["vi7f+q"]),
            m.intl.string(m.t.Ip9nBS),
            m.intl.string(m.t["2p07FR"]),
            m.intl.string(m.t["7vhiqk"]),
            m.intl.string(m.t.kPHroX),
            m.intl.string(m.t.lqaIxI),
            m.intl.string(m.t.Vgdusv),
            m.intl.string(m.t.DMeO2X),
        ],
    }),
    pi = (0, o.zZ)(d.X.PROFILE_CATEGORY, { buildLayout: () => [pt] });
var pn = i(294666);
let ps = () => {
        let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: i } = (0, TW.A)({ userId: e?.id, size: iK._3.SIZE_48 });
        return null == e
            ? null
            : (0, f.jsxs)("div", {
                  className: pn.a5,
                  children: [
                      (0, f.jsx)(iH.eu, {
                          src: t,
                          avatarDecoration: i,
                          size: iK._3.SIZE_48,
                          "aria-label": m.intl.string(m.t.lqaIxI),
                      }),
                      (0, f.jsxs)("div", {
                          className: pn.FS,
                          children: [
                              (0, f.jsx)(k.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, f.jsxs)("div", {
                                  className: pn.Fk,
                                  children: [
                                      (0, f.jsx)(k.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: m.intl.string(m.t.Ip9nBS),
                                      }),
                                      (0, f.jsx)(o3.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    pl = (0, o.t_)(d.X.PROFILE_PANEL, {
        useTitle: () => m.intl.string(m.t["vi7f+q"]),
        notice: { stores: [TH.A], element: TX.A },
        initialize: () => () =>
            n6.h.wait(() => {
                (0, TY.F7)();
            }),
        buildLayout: () => [pi],
    }),
    pr = (0, o.i4)(d.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["vi7f+q"]),
        icon: po,
        StronglyDiscouragedCustomComponent: ps,
        usePredicate: () => !(0, TK.X)("user_settings_sidebar"),
        buildLayout: () => [pl],
    }),
    pa = (0, o.i4)(d.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => m.intl.string(m.t["vi7f+q"]),
        icon: po,
        StronglyDiscouragedCustomComponent: ps,
        usePredicate: () => (0, TK.X)("user_settings_sidebar"),
        onClick: () => {
            let e = cm.default.getId();
            (0, TZ.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function po() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: i } = (0, TW.A)({ userId: e?.id, size: iK._3.SIZE_48 });
    return (0, f.jsx)(iH.eu, { src: t, avatarDecoration: i, size: iK._3.SIZE_20, "aria-hidden": !0 });
}
let pu = (0, o.WI)(d.X.PROFILE_SECTION, { hoisted: !0, buildLayout: () => [pr, pa] });
var pd = i(98207);
function pc() {
    return (0, f.jsx)(ta.p, { icon: u8.X, messageType: ta.Y.POSITIVE, children: m.intl.string(m.t.FsmBy4) });
}
var pg = i(670492),
    pm = i(579872),
    pA = i(900686),
    ph = i(518142),
    pE = i(662758),
    pT = i(466034);
function px(e) {
    let { backupCodes: t, hasTOTPEnabled: i, currentUser: n } = e,
        s = N.useCallback((e) => {
            (0, C.openModal)((t) => (0, f.jsx)(ph.default, { ...t, password: e }), { stackingBehavior: "stack" });
        }, []),
        l = N.useCallback(() => {
            (0, C.openModal)((e) =>
                (0, f.jsx)(pE.default, {
                    ...e,
                    handleSubmit: (e) =>
                        pd.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                            s(e);
                        }),
                    title: m.intl.string(m.t.PsQmzU),
                    actionText: m.intl.string(m.t.ajkYcF),
                }),
            );
        }, [s]),
        r = N.useCallback(() => {
            let e = t
                    .map((e) => {
                        let { consumed: t, code: i } = e;
                        return `* ${i.substr(0, 4)}-${i.substr(4)} ${t ? "(used)" : ""}`;
                    })
                    .join("\r\n"),
                i = m.intl.formatToPlainString(m.t["uYWwh/"], { email: n.email });
            return `${i}\r
\r
${e}`;
        }, [t, n.email]),
        a = N.useMemo(
            () =>
                t.length > 0
                    ? (0, f.jsx)(pA.A, {
                          fileContents: r,
                          contentType: "text/plain",
                          fileName: "discord_backup_codes.txt",
                          children: (0, f.jsx)(eE.$, {
                              variant: "primary",
                              size: "sm",
                              text: m.intl.string(m.t.qZZUy6),
                          }),
                      })
                    : (0, f.jsx)(eE.$, { variant: "primary", size: "sm", text: m.intl.string(m.t.xZEzbu), onClick: l }),
            [t.length, r, l],
        ),
        o = N.useCallback(() => {
            pm.A.show({
                title: m.intl.string(m.t["D+aE7g"]),
                body: m.intl.string(m.t.EA4ZEk),
                cancelText: m.intl.string(m.t["ETE/oC"]),
                onConfirm: () => pd.A.disable(),
            });
        }, []);
    return (0, f.jsx)(sy.D, {
        label: m.intl.string(m.t.EPVq00),
        description: m.intl.string(m.t.bQwxib),
        children: (0, f.jsxs)(aB.e, {
            size: "sm",
            children: [
                a,
                i &&
                    (0, f.jsx)(eE.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: m.intl.string(m.t["D+aE7g"]),
                        onClick: o,
                    }),
                !i &&
                    (0, f.jsx)(eE.$, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t.cDgKte),
                        onClick: pT.Ay.enableMFA,
                    }),
            ],
        }),
    });
}
var pS = i(464477);
function pp() {
    return !pS.K7;
}
let pf = (0, o.E2)(d.X.ACCOUNT_TWO_FACTOR_CRYPTO_NOTICE, {
    useSearchTerms: () => [m.intl.string(m.t.m0FidJ)],
    usePredicate: pp,
    Component: function () {
        return (0, f.jsx)(sy.D, {
            label: m.intl.string(m.t.EPVq00),
            children: (0, f.jsx)(ta.p, { messageType: ta.Y.INFO, children: m.intl.string(m.t.PhHhsj) }),
        });
    },
});
function pN() {
    let e = pp(),
        t = (0, R.bG)([t6.default], () => {
            let e = t6.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let p_ = (0, o.E2)(d.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [m.intl.string(m.t.m0FidJ)],
    usePredicate: pN,
    Component: function () {
        return (0, f.jsx)(sy.D, {
            label: m.intl.string(m.t.EPVq00),
            children: (0, f.jsx)(ta.p, { messageType: ta.Y.WARNING, children: m.intl.string(m.t.uggF7o) }),
        });
    },
});
function pC() {
    return (0, R.bG)([t6.default], () => {
        let e = t6.default.getCurrentUser();
        return null != e && e.mfaEnabled;
    });
}
let pI = (0, o.E2)(d.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
    useSearchTerms: function () {
        let e = (0, R.bG)([cm.default], () => cm.default.hasTOTPEnabled()),
            t = [m.intl.string(m.t.m0FidJ), m.intl.string(m.t.xZEzbu)];
        return e ? t.push(m.intl.string(m.t["D+aE7g"])) : t.push(m.intl.string(m.t.cDgKte)), t;
    },
    usePredicate: function () {
        let e = pp(),
            t = pN(),
            i = pC();
        return !e && !t && i;
    },
    Component: function () {
        let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            t = (0, R.bG)([pg.A], () => pg.A.getBackupCodes()),
            i = (0, R.bG)([cm.default], () => cm.default.hasTOTPEnabled());
        return null == e ? null : (0, f.jsx)(px, { backupCodes: t, currentUser: e, hasTOTPEnabled: i });
    },
});
var pb = i(658675),
    pv = i(176571);
function pj(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = `${t.substr(0, 4)}-${t.substr(4)}`,
        s = N.useRef(null),
        l = N.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    cx.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, cx.C)(n), s?.current?.focus());
            },
            [n],
        );
    return (0, f.jsx)("li", {
        className: iI.SX,
        children: (0, f.jsxs)(V.D, {
            innerRef: s,
            className: pv.Uc,
            onKeyDown: l,
            children: [(0, f.jsx)(pb.P, { checked: i }), (0, f.jsx)("span", { className: pv.aY, children: n })],
        }),
    });
}
function py(e) {
    let { backupCodes: t } = e,
        i = N.useCallback((e) => e.map((e) => (0, f.jsx)(pj, { code: e }, e.code)), []),
        n = N.useCallback(async () => {
            let e = pg.A.getVerificationKey();
            await pd.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, f.jsxs)(sy.D, {
        label: m.intl.string(m.t.GfqHPn),
        description: m.intl.format(m.t.OhmvYt, {}),
        children: [
            (0, f.jsxs)(lM.A, {
                children: [
                    (0, f.jsx)(lM.A.Child, {
                        children: (0, f.jsx)("ul", { className: pv.Pm, children: i(t.slice(0, t.length / 2)) }),
                    }),
                    (0, f.jsx)(lM.A.Child, {
                        children: (0, f.jsx)("ul", { className: pv.Pm, children: i(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, f.jsx)(B.Q, { textVariant: "text-sm/medium", onClick: n, text: m.intl.string(m.t.RIThUu) }),
        ],
    });
}
let pO = (0, o.E2)(d.X.ACCOUNT_BACKUP_CODES_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.m0FidJ), m.intl.string(m.t.xZEzbu)],
        usePredicate: function () {
            let e = pp(),
                t = pN(),
                i = pC(),
                n = (0, R.bG)([pg.A], () => pg.A.getBackupCodes().length > 0);
            return !e && !t && i && n;
        },
        Component: function () {
            let e = (0, R.bG)([pg.A], () => pg.A.getBackupCodes());
            return (0, f.jsx)(py, { backupCodes: e });
        },
    }),
    pR = (0, o.E2)(d.X.ACCOUNT_ENABLE_MFA_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.m0FidJ)],
        usePredicate: function () {
            let e = pp(),
                t = pN();
            return (0, R.bG)([t6.default], () => {
                let i = t6.default.getCurrentUser();
                return null != i && !i.mfaEnabled && !e && !t;
            });
        },
        Component: function () {
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.EPVq00),
                description: m.intl.string(m.t["8aDa1t"]),
                children: (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: m.intl.string(m.t.cDgKte),
                    onClick: pT.Ay.enableMFA,
                }),
            });
        },
    });
var pL = i(398177);
let pD = (0, o.Tf)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useTitle: () => m.intl.string(m.t["CIGa+7"]),
        useLabel: () => m.intl.string(m.t.bt75uw),
        useAriaLabel: () => m.intl.string(m.t["FRep5/"]),
        useVariant: () => "secondary",
        onClick: () => {
            (0, C.openModal)((e) => (0, f.jsx)(pL.default, { ...e, onSuccess: () => e.onClose() }));
        },
    }),
    pP = (0, o.E2)(d.X.ACCOUNT_CHANGE_PASSWORD_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["FRep5/"])],
        Component: function () {
            return (0, f.jsx)(eE.$, {
                variant: "primary",
                size: "sm",
                text: m.intl.string(m.t["FRep5/"]),
                onClick: () => (0, C.openModal)((e) => (0, f.jsx)(pL.default, { ...e, onSuccess: e.onClose })),
            });
        },
    });
var pG = i(557722),
    pU = i(615715);
function pM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == e
        ? null
        : e.hasAnyStaffLevel()
          ? t
              ? m.intl.string(m.t.YJGvuD)
              : m.intl.string(m.t["3iKih7"])
          : e.hasFlag(Q.nhx.PARTNER)
            ? t
                ? m.intl.string(m.t["9UucjT"])
                : m.intl.string(m.t.Sq6Q1u)
            : null == e.email
              ? t
                  ? m.intl.string(m.t["9VWpT9"])
                  : m.intl.string(m.t.LfCBZG)
              : null;
}
var pV =
    (((r = {}).AVAILABLE = "available"),
    (r.UNAVAILABLE_NO_CRYPTO = "unavailable_no_crypto"),
    (r.UNAVAILABLE_UNVERIFIED = "unavailable_unverified"),
    r);
function pk() {
    let e = (0, uw.bG)([t6.default], () => t6.default.getCurrentUser()?.verified);
    return pS.K7 ? (!1 === e ? "unavailable_unverified" : "available") : "unavailable_no_crypto";
}
function pw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (0, uw.bG)([K.A, xq.A, t6.default], () =>
        t6.default.getCurrentUser()?.hasAnyStaffLevel()
            ? e
                ? m.intl.string(m.t.hxf9fX)
                : m.intl.string(m.t["3iKih7"])
            : K.A.getGuildsArray().some(
                    (e) =>
                        e.features.has(Q.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        xq.A.can(Q.xBc.ADMINISTRATOR, e),
                )
              ? e
                  ? m.intl.string(m.t.OYTCUh)
                  : m.intl.string(m.t.HC8uSZ)
              : null,
    );
}
var pF = i(53516);
function pB(e) {
    let t,
        i,
        { currentUser: n, togglingSMS: s } = e,
        [l, r] = N.useState(!1),
        a = N.useCallback(
            (e) => {
                e.preventDefault(), r(!l);
            },
            [l],
        ),
        o = N.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, C.openModal)((t) => (0, f.jsx)(pU.default, { reason: pG.d.USER_SETTINGS_UPDATE, ...t, ...e }), {
                modalKey: pF.V,
            });
        }, []),
        u = N.useCallback(() => {
            o();
        }, [o]),
        d = N.useCallback(() => {
            null == n.phone ? o({ onAddedPhone: pd.A.enableSMS }) : pd.A.enableSMS();
        }, [n, o]),
        c = N.useCallback(() => {
            (0, C.openModal)((e) =>
                (0, f.jsx)(pE.default, {
                    ...e,
                    handleSubmit: pd.A.disableSMS,
                    title: m.intl.string(m.t.KLWnit),
                    children: m.intl.string(m.t["W0/Duf"]),
                }),
            );
        }, []),
        g = N.useCallback((e) => (null == e ? "" : `${"*".repeat(e.length - 4)}${e.slice(-4)}`), []),
        A = null != n.phone,
        h = n.hasFlag(Q.nhx.MFA_SMS);
    if (A || h) {
        let e = l ? n.phone : g(n.phone);
        i = (0, f.jsxs)(k.E, {
            variant: "text-sm/normal",
            children: [
                m.intl.format(m.t.PXVoEO, { phoneNumber: e }),
                (0, f.jsx)(uF.Anchor, {
                    onClick: a,
                    className: pv.vN,
                    children: l ? m.intl.string(m.t.FfltIN) : m.intl.string(m.t.llArAg),
                }),
            ],
        });
    }
    if (h)
        t = (0, f.jsx)(eE.$, {
            variant: "critical-secondary",
            size: "sm",
            text: m.intl.string(m.t.KLWnit),
            loading: s,
            onClick: c,
        });
    else {
        let e = pM(n);
        t = (0, f.jsxs)(aB.e, {
            size: "sm",
            children: [
                (0, f.jsx)(eE.$, {
                    variant: "primary",
                    size: "sm",
                    text: e ?? m.intl.string(m.t.DZQe23),
                    onClick: d,
                    loading: s,
                    disabled: null != e,
                }),
                A
                    ? (0, f.jsx)(eE.$, {
                          variant: "secondary",
                          size: "sm",
                          text: m.intl.string(m.t.Ulqq6K),
                          onClick: u,
                      })
                    : null,
            ],
        });
    }
    return (0, f.jsxs)(sy.D, {
        label: m.intl.string(m.t.uHAJ5v),
        description: m.intl.string(m.t.fspJ4H),
        children: [i, t],
    });
}
let pz = (0, o.E2)(d.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.uHAJ5v)],
    usePredicate: function () {
        let e = pp(),
            t = pN(),
            i = pC(),
            n = (0, R.bG)([cm.default], () => cm.default.hasTOTPEnabled());
        return !e && !t && i && n;
    },
    Component: function () {
        let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
            t = (0, R.bG)([pg.A], () => pg.A.togglingSMS);
        return null == e ? null : (0, f.jsx)(pB, { currentUser: e, togglingSMS: t });
    },
});
var pY = i(328009);
let pX = (0, o.E2)(d.X.ACCOUNT_SECURITY_KEYS_SETTING, {
    useSearchTerms: () => [m.intl.string(m.t.vrOCCk), m.intl.string(m.t.y7SXYX)],
    usePredicate: function () {
        let e = pp(),
            t = pN();
        return !e && !t;
    },
    Component: pY.A,
});
var pH = i(200921),
    pK = i(390310),
    pW = i(766928),
    pZ = i(568385),
    pq = i(791606),
    pQ = i(646270),
    pJ = i(738678);
function p$(e, t) {
    let i = e.client_info?.location ?? e.client_info?.ip,
        n = e.client_info?.platform,
        { text: s, icon: l } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: m.intl.string(m.t.cDHCNY), icon: e3.k };
                case "ios":
                case "android":
                    return { text: e, icon: pQ.u };
                case "horizon os":
                    return { text: e, icon: pJ.G };
                default:
                    return { text: e, icon: e3.k };
            }
        })(e.client_info?.os);
    return { location: i, platform: n, os: s, Icon: l, lastActive: t ? null : (0, pK.Y)(e.approx_last_used_time) };
}
var p0 = i(563606);
function p1() {
    return (0, f.jsx)(k.E, { variant: "text-sm/normal", className: p0.h_, children: m.intl.string(m.t.zZp618) });
}
function p2() {
    let { currentSession: e } = (0, pK.r)();
    return null == e
        ? (0, f.jsx)("div", { className: p0.Lq, children: (0, f.jsx)(u4.y, {}) })
        : (0, f.jsx)(io.n, { label: m.intl.string(m.t.LLS19o), children: (0, f.jsx)(p4, { session: e, current: !0 }) });
}
function p3(e) {
    let { checked: t, otherSessions: i } = e;
    return (0, f.jsx)(sy.D, {
        label: t.size > 0 ? m.intl.string(m.t.mMEmRO) : m.intl.string(m.t.Vij32M),
        description: m.intl.string(m.t.OTXyaf),
        children: (0, f.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: p0.Cn,
            children: (0, f.jsx)(eE.$, {
                variant: "critical-secondary",
                size: "sm",
                text:
                    t.size > 0
                        ? m.intl.formatToPlainString(m.t["83CPLj"], { count: t.size })
                        : m.intl.string(m.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, pH.U0)(Array.from(t)) : (0, pH.U0)(i.map((e) => e.id_hash));
                },
            }),
        }),
    });
}
function p6() {
    let { currentSession: e, otherSessions: t } = (0, pK.r)(),
        i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        [n, s] = N.useState(new Set());
    return (null == e && 0 === t.length) || (0 === t.length && i?.mfaEnabled)
        ? null
        : t.length > 0 || !i?.mfaEnabled
          ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(io.n, {
                        label: m.intl.string(m.t.xx1MWc),
                        children: [
                            t.map((e) =>
                                (0, f.jsx)(
                                    p4,
                                    {
                                        session: e,
                                        useChecks: n.size > 0,
                                        checked: n.has(e.id_hash),
                                        setChecked: (t) => {
                                            let i = new Set(n);
                                            t ? i.add(e.id_hash) : i.delete(e.id_hash), s(i);
                                        },
                                    },
                                    e.id_hash,
                                ),
                            ),
                            i?.mfaEnabled ? null : (0, f.jsx)(p5, {}),
                        ],
                    }),
                    t.length > 0 &&
                        (0, f.jsx)("div", {
                            className: p0.wq,
                            children: (0, f.jsx)(p3, { checked: n, otherSessions: t }),
                        }),
                ],
            })
          : null;
}
function p4(e) {
    let { session: t, current: i, setChecked: n, checked: s, useChecks: l } = e,
        { location: r, platform: a, os: o, Icon: u, lastActive: d } = p$(t, i),
        c = [o, a].filter(t4.Vq),
        g = [r, d].filter(t4.Vq);
    return (0, f.jsxs)(
        "div",
        {
            className: eF()(p0.dZ, { [p0.gg]: i }),
            children: [
                (0, f.jsxs)("div", {
                    className: p0.OC,
                    children: [
                        (0, f.jsx)("div", {
                            className: p0.km,
                            children: (0, f.jsx)(u, { size: "md", color: "currentColor" }),
                        }),
                        (0, f.jsxs)("div", {
                            className: p0.F3,
                            children: [
                                (0, f.jsxs)(k.E, {
                                    variant: "eyebrow",
                                    className: p0.nT,
                                    children: [
                                        (0, f.jsx)("span", { children: c[0] }),
                                        c.length > 1 &&
                                            (0, f.jsxs)(f.Fragment, {
                                                children: [
                                                    (0, f.jsx)("span", { children: "\xb7" }),
                                                    (0, f.jsx)("span", { children: c[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                                (0, f.jsxs)(k.E, {
                                    variant: "text-sm/medium",
                                    className: p0.nT,
                                    children: [
                                        (0, f.jsx)("span", { children: g[0] }),
                                        g.length > 1 &&
                                            (0, f.jsxs)(f.Fragment, {
                                                children: [
                                                    (0, f.jsx)("span", { children: "\xb7" }),
                                                    (0, f.jsx)("span", { children: g[1] }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        i
                            ? null
                            : l
                              ? (0, f.jsx)("div", {
                                    className: p0.GR,
                                    children: (0, f.jsx)(pZ.J, {
                                        onChange: (e) => {
                                            n?.(e);
                                        },
                                        checked: s,
                                    }),
                                })
                              : (0, f.jsx)(V.D, {
                                    className: p0.ux,
                                    onClick: (e) => {
                                        e.shiftKey ? n?.(!0) : (0, pH.U0)(t.id_hash);
                                    },
                                    "aria-label": m.intl.string(m.t.E4MJNt),
                                    children: (0, f.jsx)(gu.P, { size: "md", color: "currentColor" }),
                                }),
                    ],
                }),
                !i && (0, f.jsx)(eT.c, { className: p0.O9 }),
            ],
        },
        t.id_hash,
    );
}
function p5() {
    return (0, f.jsxs)("div", {
        className: eF()(p0.dZ, p0.EC),
        children: [
            (0, f.jsxs)("div", {
                className: p0.OC,
                children: [
                    (0, f.jsx)("div", { className: p0.km, children: (0, f.jsx)(pq.A, { width: "32", height: "32" }) }),
                    (0, f.jsxs)("div", {
                        className: p0.F3,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "eyebrow",
                                className: p0.nT,
                                color: "text-muted",
                                children: (0, f.jsx)("span", { children: m.intl.string(m.t.iUa0sn) }),
                            }),
                            (0, f.jsx)(k.E, {
                                variant: "text-sm/medium",
                                className: p0.nT,
                                color: "text-muted",
                                children: (0, f.jsx)("span", {
                                    children: m.intl.format(m.t["044+8i"], {
                                        onClick: () =>
                                            (0, ey.openUserSettings)(d.X.ACCOUNT_PANEL, {
                                                analyticsLocations: [eV.A.USER_SETTINGS_SESSIONS],
                                            }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: p0.O9 }),
        ],
    });
}
var p8 = i(176524),
    p7 = i(490173);
function p9(e) {
    let { icon: t, label: i, subLabel: n, description: s, children: l, muted: r } = e;
    return (0, f.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: "sm",
        role: "listitem",
        children: [
            (0, f.jsx)(p8.A, { Icon: t, color: r ? F.A.colors.ICON_MUTED : "currentColor" }),
            (0, f.jsxs)(L.B, {
                direction: "vertical",
                gap: "xxs",
                children: [
                    (0, f.jsxs)(L.B, {
                        direction: "horizontal",
                        gap: "xs",
                        children: [
                            (0, f.jsx)(k.E, { variant: "text-md/semibold", color: "text-strong", children: i }),
                            null != i &&
                                null != n &&
                                (0, f.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            null != n &&
                                (0, f.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                        ],
                    }),
                    (0, f.jsx)(k.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                ],
            }),
            l,
        ],
    });
}
function fe(e) {
    let { session: t, current: i } = e,
        { location: n, platform: s, os: l, Icon: r, lastActive: a } = p$(t, i),
        o = [n, a].filter(t4.Vq);
    return (0, f.jsx)(p9, {
        icon: r,
        label: l,
        subLabel: s,
        description: o.join(" \xb7 "),
        children:
            !i &&
            (0, f.jsx)(V.D, {
                className: p7.X,
                onClick: () => (0, pH.U0)(t.id_hash),
                "aria-label": m.intl.string(m.t.E4MJNt),
                children: (0, f.jsx)(gu.P, { size: "md", color: "currentColor" }),
            }),
    });
}
function ft(e) {
    let { title: t, children: i } = e,
        n = N.useId();
    return (0, f.jsxs)(L.B, {
        role: "group",
        "aria-labelledby": n,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, f.jsx)(eh.D, { id: n, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, f.jsx)(L.B, { role: "list", gap: "xl", children: i }),
        ],
    });
}
function fi() {
    let { currentSession: e } = (0, pK.r)();
    return null == e
        ? (0, f.jsx)(u4.y, {})
        : (0, f.jsx)(ft, { title: m.intl.string(m.t.LLS19o), children: (0, f.jsx)(fe, { session: e, current: !0 }) });
}
let fn = (0, o.E2)(d.X.SESSIONS_CURRENT_SESSION_SETTING, {
        Component: function () {
            return (0, u._A)("CurrentSessionSetting") ? (0, f.jsx)(fi, {}) : (0, f.jsx)(p2, {});
        },
        useSearchTerms: () => [],
    }),
    fs = (0, o.E2)(d.X.SESSIONS_LOGOUT_ALL_SESSIONS_SETTING, {
        Component: function () {
            let { otherSessions: e } = (0, pK.r)();
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.Vij32M),
                description: m.intl.string(m.t.OTXyaf),
                children: (0, f.jsx)(eE.$, {
                    onClick: () => (0, pH.U0)(e.map((e) => e.id_hash)),
                    variant: "critical-primary",
                    size: "sm",
                    text: m.intl.string(m.t.cLmmeY),
                }),
            });
        },
        useSearchTerms: () => [m.intl.string(m.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, pK.r)();
            return e.length > 0;
        },
    });
function fl() {
    return (0, f.jsx)(p9, {
        icon: pW.W,
        label: m.intl.string(m.t.iUa0sn),
        description: m.intl.format(m.t["044+8i"], {
            onClick: () =>
                (0, ey.openUserSettings)(d.X.ACCOUNT_PANEL, { analyticsLocations: [eV.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function fr() {
    let { otherSessions: e } = (0, pK.r)(),
        t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    return (0, f.jsxs)(ft, {
        title: m.intl.string(m.t.xx1MWc),
        children: [e.map((e) => (0, f.jsx)(fe, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, f.jsx)(fl, {})],
    });
}
let fa = (0, o.E2)(d.X.SESSIONS_OTHER_SESSIONS_SETTING, {
        Component: function () {
            return (0, u._A)("OtherSessionsSetting") ? (0, f.jsx)(fr, {}) : (0, f.jsx)(p6, {});
        },
        useSearchTerms: () => [m.intl.string(m.t.Vij32M)],
        usePredicate: () => {
            let { otherSessions: e } = (0, pK.r)(),
                t = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.mfaEnabled);
            return e.length > 0 || !t;
        },
    }),
    fo = (0, o.zZ)(d.X.SESSIONS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.mEndXM),
        useSubtitle: () => m.intl.string(m.t.b7ZpTM),
        initialize: () => {
            (0, pH.GY)();
        },
        buildLayout: () => [fn, fa, fs],
        useSearchTerms: () => [
            m.intl.string(m.t["+1h0k/"]),
            m.intl.string(m.t.LLS19o),
            m.intl.string(m.t.xx1MWc),
            m.intl.string(m.t.lSWsrd),
        ],
    }),
    fu = (0, o.zZ)(d.X.SESSIONS_CATEGORY, {
        useSearchTerms: () => [
            m.intl.string(m.t["+1h0k/"]),
            m.intl.string(m.t.LLS19o),
            m.intl.string(m.t.xx1MWc),
            m.intl.string(m.t.Vij32M),
            m.intl.string(m.t.lSWsrd),
        ],
        buildLayout: () => [fn, fa],
        initialize: () => (
            (0, pH.GY)(),
            () => {
                (0, pH.ZQ)();
            }
        ),
        useInlineNotice: function () {
            return N.useMemo(() => ({ type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: p1 }), []);
        },
    }),
    fd = (0, o.t_)(d.X.SESSIONS_PANEL, {
        useTitle: () => ((0, u._A)("SessionsPanel") ? m.intl.string(m.t.mEndXM) : m.intl.string(m.t["+1h0k/"])),
        useObscuredNotice: u2.L,
        buildLayout: () => ((0, u.pC)("SessionsPanel") ? [fo] : [fu]),
    }),
    fc = (0, o.i4)(d.X.SESSIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+1h0k/"]),
        icon: pW.W,
        usePredicate: () => !(0, u._A)("SessionsPanel"),
        buildLayout: () => [fd],
    }),
    fg = (0, o.t0)(d.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
        buildLayout: () => [fd],
        usePredicate: () => (0, u._A)("AccountSessionsNestedPanel"),
        initialize: () => {
            (0, pH.GY)();
        },
        useTrailingDecoration: () => ({
            type: e_.xn.TEXT,
            useText: () => {
                let { currentSession: e, otherSessions: t } = (0, pK.r)(),
                    i = t.length + +(null != e);
                return i > 0 ? m.intl.formatToPlainString(m.t.G7zwOk, { count: i }) : m.intl.string(m.t.MKDeyL);
            },
        }),
    }),
    fm = (0, o.zZ)(d.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
        useTitle: () => m.intl.string(m.t.pKSjEj),
        useInlineNotice: function () {
            return (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.mfaEnabled ?? !1)
                ? { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: pc }
                : null;
        },
        buildLayout: () => [
            pP,
            pf,
            p_,
            pR,
            pI,
            pO,
            pz,
            pX,
            ...((0, u.pC)("AccountAuthenticationCategory") ? [fg] : []),
        ],
    });
i(204925);
var fA = i(818348);
let fh = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, C.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([i.e("40933"), i.e("19623"), i.e("21007")]).then(i.bind(i, 888363));
            return (i) => (0, f.jsx)(t, { claimRequired: e, ...i });
        },
        { onCloseRequest: e ? fA.tE : null, onCloseCallback: t },
    );
};
var fE = i(940856),
    fT = i(36149),
    fx = i(207560);
function fS(e) {
    let t = (0, fx.fk)(),
        i = (0, fT.b8)(),
        n = (0, fT.yM)(),
        s = (0, fT.Y2)();
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
var fp = i(516761);
function ff() {
    let e = m.intl.string(m.t.XxRj7f);
    return (0, f.jsxs)(k.E, {
        variant: "text-md/medium",
        children: [
            `${e} \u{2022} `,
            m.intl.format(fp.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(to.A.getArticleURL(Q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let fN = (0, o.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
        usePredicate: () => fS("edit"),
        useTitle: () => m.intl.string(m.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: ff }),
        useLabel: () => m.intl.string(m.t.bt75uw),
        onClick: function () {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, f.jsx)(e, { ...t });
            });
        },
    }),
    f_ = (0, o.E2)(d.X.ACCOUNT_INFO_AGE_GROUP_INFO_SETTING, {
        usePredicate: () => fS("info"),
        useSearchTerms: () => [m.intl.string(m.t["/52UYy"])],
        Component: function () {
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t["/52UYy"]),
                layout: "horizontal",
                children: (0, f.jsxs)(L.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "end",
                    gap: "md",
                    children: [
                        (0, f.jsx)(k.E, { variant: "text-md/medium", children: m.intl.string(m.t.XxRj7f) }),
                        (0, f.jsx)("div", {
                            style: { visibility: "hidden" },
                            children: (0, f.jsx)(eE.$, {
                                onClick: fA.tE,
                                text: m.intl.string(m.t.bt75uw),
                                "aria-hidden": !0,
                            }),
                        }),
                    ],
                }),
            });
        },
    });
var fC = i(139716),
    fI = i(847599);
function fb() {
    return (0, fT.yM)() ? m.intl.string(m.t.sK0dmH) : m.intl.string(m.t.lKDPGA);
}
let fv = (0, o.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_VERIFY_SETTING, {
        usePredicate: () => fS("verify"),
        useTitle: () => m.intl.string(m.t["/52UYy"]),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.TEXT, useText: fb }),
        useLabel: function () {
            return (0, fT.yM)() ? m.intl.string(m.t["9KiIz6"]) : m.intl.string(m.t.DVywUB);
        },
        onClick: () => fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.ACCOUNT_AGE_GROUP }),
    }),
    fj = (0, o.Tf)(d.X.ACCOUNT_INFO_CLAIM_ACCOUNT_SETTING, {
        usePredicate: () => {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return null != e && !e.isClaimed();
        },
        useTitle: () => m.intl.string(m.t.tlZllC),
        useVariant: () => "secondary",
        useTrailingContent: () => ({ type: e_._1.TEXT, useText: () => m.intl.string(m.t.qxk9zo) }),
        useLabel: () => m.intl.string(m.t.BleMPB),
        onClick: () => fh(),
    });
function fy(e) {
    return `${"*".repeat(e.length - 4)}${e.slice(-4)}`;
}
function fO(e) {
    let [t, i] = e.split("@");
    return `${"*".repeat(t.length)}@${i}`;
}
function fR(e) {
    let { text: t, censor: i, revealLabel: n, hideLabel: s, redesign: l = !1 } = e,
        [r, a] = N.useState(!1),
        o = r ? t : i(t);
    return (0, f.jsxs)(L.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: l ? "end" : "start",
        children: [
            l ? (0, f.jsx)(k.E, { variant: "text-md/medium", children: o }) : o,
            (0, f.jsx)(B.Q, {
                variant: "primary",
                textVariant: l ? "text-md/medium" : "text-sm/medium",
                "aria-label": r ? s : n,
                onClick: () => a(!r),
                text: r ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.dcztdU),
            }),
        ],
    });
}
function fL() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.email);
    return null == e
        ? (0, f.jsx)(k.E, { variant: "text-md/medium", children: m.intl.string(m.t["8SfTN/"]) })
        : (0, f.jsx)(fR, {
              text: e,
              censor: fO,
              revealLabel: m.intl.string(m.t["Zvx+yV"]),
              hideLabel: m.intl.string(m.t.nqTD4d),
              redesign: !0,
          });
}
let fD = (0, o.Tf)(d.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => m.intl.string(m.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fL }),
    useLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.email)
            ? m.intl.string(m.t.OYkgVk)
            : m.intl.string(m.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.email)
            ? m.intl.string(m.t["pvBD+W"])
            : m.intl.string(m.t["8peUT0"]);
    },
    onClick: function () {
        (0, C.openModalLazy)(async () => {
            let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(i.bind(i, 97060));
            return (t) => (0, f.jsx)(e, { ...t });
        });
    },
});
function fP() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, f.jsx)(k.E, { variant: "text-md/medium", children: m.intl.string(m.t.I5kDqj) })
        : (0, f.jsx)(L.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, f.jsx)(fR, {
                  text: t,
                  censor: fy,
                  revealLabel: m.intl.string(m.t.eY3xlT),
                  hideLabel: m.intl.string(m.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let fG = (0, o.Tf)(d.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => m.intl.string(m.t.kerONq),
    useAriaLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.phone)
            ? m.intl.string(m.t["SfUuE+"])
            : m.intl.string(m.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fP }),
    useLabel: function () {
        return null == (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.phone)
            ? m.intl.string(m.t.OYkgVk)
            : m.intl.string(m.t.bt75uw);
    },
    onClick: function () {
        null == t6.default.getCurrentUser()?.phone
            ? (0, C.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                      return (t) => (0, f.jsx)(e, { reason: pG.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: pF.V },
              )
            : (0, C.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([i.e("25866"), i.e("63314")]).then(i.bind(i, 660740));
                  return (t) => (0, f.jsx)(e, { ...t });
              });
    },
});
function fU() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function fM() {
    let e = (0, xe.EC)(),
        t = e?.nick?.[0] ?? null,
        i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
    if (null == i) return null;
    let n = i.hasUniqueUsername() ? i.username : `${i.username}#${i.discriminator}`;
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(k.E, { variant: "text-md/medium", children: n }),
            null != t &&
                (0, f.jsx)(e1.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, f.jsx)(lb.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: F.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let fV = (0, o.Tf)(d.X.ACCOUNT_INFO_USERNAME_SETTING, {
        useTitle: () => m.intl.string(m.t.qqhR3L),
        useTrailingContent: () => ({ type: e_._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: fM }),
        useLabel: () => m.intl.string(m.t.bt75uw),
        useAriaLabel: () => m.intl.string(m.t.JECa91),
        useSubtitle: () => (fU() ? m.intl.string(m.t["7Ngnyr"]) : void 0),
        useVariant: () => "secondary",
        useDisabled: fU,
        onClick: function () {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                    i.bind(i, 667792),
                );
                return (t) => (0, f.jsx)(e, { ...t });
            });
        },
    }),
    fk = (0, o.zZ)(d.X.ACCOUNT_INFO_CATEGORY, {
        usePredicate: () => (0, R.bG)([t6.default], () => null != t6.default.getCurrentUser()),
        useTitle: () => m.intl.string(m.t.apNo4l),
        useInlineNotice: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return null == e
                ? null
                : e.isClaimed()
                  ? null == e.email || e.verified
                      ? null
                      : {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useTitle: () => m.intl.string(m.t.tuGzBT),
                            useText: () => m.intl.string(m.t.NAzplE),
                            button: { useText: () => m.intl.string(m.t.lm1UKt), onClick: () => (0, fE.S)(e) },
                        }
                  : {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "critical",
                        useTitle: () => m.intl.string(m.t["/3qnL/"]),
                        useText: () => m.intl.string(m.t.qKs3vg),
                        button: { useText: () => m.intl.string(m.t["7psymi"]), onClick: () => fh() },
                    };
        },
        buildLayout: () => [fV, fj, fD, fG, fv, fN, f_],
    }),
    fw = (0, o.Tf)(d.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
        useTitle: () => m.intl.string(m.t.lQsY7B),
        useSubtitle: () => pw(!0),
        useDisabled: () => null !== pw(!0),
        useLabel: () => m.intl.string(m.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => {
            let e = (0, R.bG)([cm.default], () => cm.default.hasTOTPEnabled()),
                t = pk() === pV.AVAILABLE;
            return e && t;
        },
        onClick: () =>
            void (0, se.A)({
                title: m.intl.string(m.t["D+aE7g"]),
                subtitle: m.intl.string(m.t.EA4ZEk),
                variant: "critical",
                confirmText: m.intl.string(m.t.N86XcP),
                onConfirm: () => pd.A.disable(),
            }),
    }),
    fF = (0, o.zZ)(d.X.AUTHENTICATOR_APP_CATEGORY, {
        useTitle: () => m.intl.string(m.t.RumMFo),
        useSubtitle: () => m.intl.string(m.t.iTbTo7),
        useHeaderDecoration: function () {
            let e = (0, R.bG)([cm.default], () => cm.default.hasTOTPEnabled()),
                t = pk() === pV.AVAILABLE;
            if (!e && t)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "mfa-setup-button",
                            text: m.intl.string(m.t.cTNUeD),
                            onClick: pT.Ay.enableMFA,
                        },
                    ],
                };
        },
        useInlineNotice: function () {
            switch (pk()) {
                case pV.UNAVAILABLE_NO_CRYPTO:
                    return { type: e_.lT.INLINE_NOTICE, noticeType: "info", useText: () => m.intl.string(m.t.PhHhsj) };
                case pV.UNAVAILABLE_UNVERIFIED:
                    return {
                        type: e_.lT.INLINE_NOTICE,
                        noticeType: "warning",
                        useText: () => m.intl.string(m.t.uggF7o),
                    };
                case pV.AVAILABLE:
                    return;
            }
        },
        collapseOnEmpty: !1,
        buildLayout: () => [fw],
    });
var fB = i(32880),
    fz = i(663417);
function fY() {
    (0, C.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
        return (t) =>
            (0, f.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    pd.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, C.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(i.bind(i, 518142));
                                    return (i) => (0, f.jsx)(e, { ...i, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: m.intl.string(m.t.PsQmzU),
                actionText: m.intl.string(m.t.ajkYcF),
            });
    });
}
var fX = i(203082);
function fH(e) {
    return `${e.slice(0, 4)}-${e.slice(4)}`;
}
async function fK() {
    let e = pg.A.getVerificationKey();
    try {
        await pd.A.confirmViewBackupCodes(e, !0);
    } catch (e) {
        (0, Ej.P0)({
            message: e.body?.message ?? m.intl.string(m.t.F8FvUy),
            type: EO.Ck.FAILURE,
            id: "backup-code-regen-failed",
        });
    }
}
function fW(e) {
    let {
            code: { code: t, consumed: i },
        } = e,
        n = fH(t),
        s = N.useRef(null),
        l = (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)(pb.P, { checked: i }), (0, f.jsx)(k.E, { variant: "text-md/normal", children: n })],
        });
    return cx.p5
        ? (0, f.jsx)(V.D, {
              tag: "li",
              className: eF()(fX.aY, fX.vk),
              innerRef: s,
              onKeyDown: (e) => {
                  "c" === e.key &&
                      (e.metaKey || e.ctrlKey) &&
                      (e.preventDefault(), e.stopPropagation(), (0, cx.C)(n), s?.current?.focus());
              },
              onClick: () => {
                  (0, cx.C)(n),
                      (0, Ej.P0)({ message: m.intl.string(m.t.mGZ66D), type: EO.Ck.SUCCESS, id: "backup-code-copied" });
              },
              children: l,
          })
        : (0, f.jsx)("li", { className: fX.aY, children: l });
}
let fZ = (0, o.zZ)(d.X.BACKUP_CODES_CATEGORY, {
        useTitle: () => m.intl.string(m.t.fC9qV0),
        useSubtitle: () =>
            (0, R.bG)([pg.A], () => pg.A.getBackupCodes().length > 0)
                ? m.intl.format(m.t.tp7zEK, {})
                : m.intl.string(m.t.LoOi4S),
        usePredicate: pC,
        buildLayout: () => [fq],
    }),
    fq = (0, o.E2)(d.X.BACKUP_CODES_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.fC9qV0)],
        Component: function () {
            let e = (0, R.bG)([pg.A], () => pg.A.getBackupCodes()),
                t = N.useMemo(
                    () =>
                        e
                            .map((e) => {
                                let { code: t, consumed: i } = e;
                                return `* ${fH(t)}` + (i ? ` (${m.intl.string(m.t["ycME+9"])})` : "");
                            })
                            .join("\r\n"),
                    [e],
                );
            return 0 === e.length
                ? (0, f.jsx)(eE.$, { text: m.intl.string(m.t.Jc2myK), size: "sm", variant: "secondary", onClick: fY })
                : (0, f.jsxs)(f.Fragment, {
                      children: [
                          (0, f.jsx)("ul", {
                              className: fX.E5,
                              children: e.map((e) => (0, f.jsx)(fW, { code: e }, e.code)),
                          }),
                          (0, f.jsxs)(aB.e, {
                              size: "sm",
                              children: [
                                  (0, f.jsx)(pA.A, {
                                      fileContents: t,
                                      contentType: "text/plain",
                                      fileName: "discord_backup_codes.txt",
                                      children: (0, f.jsx)(eE.$, {
                                          text: m.intl.string(m.t["OO+Nib"]),
                                          variant: "secondary",
                                          icon: fB.s,
                                      }),
                                  }),
                                  (0, f.jsx)(eE.$, {
                                      text: m.intl.string(m.t["3x962E"]),
                                      variant: "secondary",
                                      icon: fz.f,
                                      onClick: fK,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    }),
    fQ = (0, o.Tf)(d.X.SMS_AUTH_DISABLE_BUTTON, {
        useTitle: () => m.intl.string(m.t.lQsY7B),
        useSubtitle: function () {
            let [e, t] = N.useState(!1),
                i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.phone);
            return null == i
                ? null
                : m.intl.format(e ? m.t["xDBk/I"] : m.t.bnKdnl, {
                      phone: e ? i : i.slice(-4),
                      toggleButton: () =>
                          (0, f.jsx)(B.Q, {
                              text: e ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.dcztdU),
                              onClick: () => t(!e),
                          }),
                  });
        },
        useLabel: () => m.intl.string(m.t.N86XcP),
        useVariant: () => "critical-secondary",
        usePredicate: () => (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.hasFlag(Q.nhx.MFA_SMS) ?? !1),
        onClick: () =>
            void (0, C.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(i.bind(i, 662758));
                return (t) =>
                    (0, f.jsx)(e, {
                        ...t,
                        handleSubmit: pd.A.disableSMS,
                        title: m.intl.string(m.t.KLWnit),
                        children: m.intl.string(m.t["W0/Duf"]),
                    });
            }),
    }),
    fJ = (0, o.zZ)(d.X.SMS_AUTH_CATEGORY, {
        useTitle: () => m.intl.string(m.t.wuHuI5),
        useSubtitle: () => (0, R.bG)([t6.default], () => pM(t6.default.getCurrentUser(), !0)),
        useHeaderDecoration: () => {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()?.hasFlag(Q.nhx.MFA_SMS) ?? !1),
                t = (0, R.bG)([t6.default], () => null != pM(t6.default.getCurrentUser()));
            if (!e)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "sms-setup-button",
                            text: m.intl.string(m.t.Age7yU),
                            onClick: f$,
                            disabled: t,
                        },
                    ],
                };
        },
        collapseOnEmpty: !1,
        usePredicate: () => {
            let e = pk(),
                t = pC(),
                i = (0, R.bG)([cm.default], () => cm.default.hasTOTPEnabled());
            return e === pV.AVAILABLE && t && i;
        },
        buildLayout: () => [fQ],
    });
function f$() {
    let e = t6.default.getCurrentUser();
    if (null != e)
        if (null == e.phone) {
            var t;
            (t = { reason: pG.d.USER_SETTINGS_UPDATE, onAddedPhone: pd.A.enableSMS }),
                (0, C.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                        return (i) => (0, f.jsx)(e, { ...i, ...t });
                    },
                    { modalKey: pF.V },
                );
        } else pd.A.enableSMS();
}
var f0 = i(665671),
    f1 = i(442433),
    f2 = i(917136),
    f3 = i(976910),
    f6 = i(108666);
function f4(e) {
    let { credential: t } = e;
    return (0, f.jsxs)("li", {
        className: f6.e,
        children: [
            (0, f.jsxs)("div", {
                children: [
                    (0, f.jsx)(k.E, { variant: "text-md/normal", children: t.name }),
                    null != t.last_used &&
                        (0, f.jsx)(k.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: m.intl.format(m.t["7JgxF5"], { lastUsed: (0, pK.Y)(t.last_used) }),
                        }),
                ],
            }),
            (0, f.jsx)(lp.K, {
                icon: mu.j,
                variant: "icon-only",
                size: "sm",
                "aria-label": m.intl.string(m.t["+nrTbK"]),
                onClick: (e) => {
                    (0, f1.L3)(e, async () => {
                        let { default: e } = await i.e("32529").then(i.bind(i, 41e3));
                        return (i) => (0, f.jsx)(e, { credential: t, ...i });
                    });
                },
            }),
        ],
    });
}
let f5 = (0, o.zZ)(d.X.SECURITY_KEYS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.IBq4Y3),
        useSubtitle: () => m.intl.string(m.t.yK9edS),
        useHeaderDecoration: function () {
            if (pk() === pV.AVAILABLE)
                return {
                    type: e_.WX.BUTTON_GROUP,
                    buttons: [
                        {
                            type: e_.UV.BUTTON,
                            id: "add-security-key-button",
                            text: m.intl.string(m.t["Tzs/fw"]),
                            icon: r8.j,
                            onClick: f0.A,
                        },
                    ],
                };
        },
        useInlineNotice: () =>
            (function () {
                switch (pk()) {
                    case pV.UNAVAILABLE_NO_CRYPTO:
                        return {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "info",
                            useText: () => m.intl.string(m.t.bWCGI9),
                        };
                    case pV.UNAVAILABLE_UNVERIFIED:
                        return {
                            type: e_.lT.INLINE_NOTICE,
                            noticeType: "warning",
                            useText: () => m.intl.string(m.t.uggF7o),
                        };
                    case pV.AVAILABLE:
                        return;
                }
            })(),
        buildLayout: () => [f8],
    }),
    f8 = (0, o.E2)(d.X.SECURITY_KEYS_LIST, {
        useSearchTerms: () => [m.intl.string(m.t.y7SXYX)],
        Component: function () {
            let { credentials: e, hasFetchedCredentials: t } = (0, R.cf)([f3.A], () => ({
                hasFetchedCredentials: f3.A.hasFetchedCredentials(),
                credentials: f3.A.getCredentials(),
            }));
            return (N.useEffect(() => {
                t || f2.JQ();
            }, [t]),
            t)
                ? (0, f.jsx)(L.B, {
                      direction: "vertical",
                      gap: "sm",
                      as: "ul",
                      children: e.map((e) => (0, f.jsx)(f4, { credential: e }, e.id)),
                  })
                : (0, f.jsx)(u4.y, {});
        },
    }),
    f7 = (0, o.t_)(d.X.MULTI_FACTOR_AUTHENTICATION, {
        useTitle: () => m.intl.string(m.t.m0FidJ),
        buildLayout: () => [f5, fF, fJ, fZ],
    }),
    f9 = (0, o.t0)(d.X.ACCOUNT_MFA_NESTED_PANEL, {
        useTrailingDecoration: () => ({
            type: e_.xn.TEXT,
            useText: () => (pC() ? m.intl.string(m.t.lQsY7B) : m.intl.string(m.t.WsUuTt)),
        }),
        buildLayout: () => [f7],
    }),
    Ne = (0, o.zZ)(d.X.ACCOUNT_PASSWORD_SECURITY_CATEGORY, {
        useTitle: () => m.intl.string(m.t["0iH2vc"]),
        buildLayout: () => [pD, f9, fg],
    });
function Nt(e) {
    let { currentUser: t } = e;
    return t.isClaimed()
        ? null == t.email
            ? null
            : t.verified
              ? void 0
              : (0, f.jsxs)(O.w, {
                    type: "warning",
                    children: [
                        (0, f.jsx)(eh.D, { variant: "heading-md/medium", children: m.intl.string(m.t.tuGzBT) }),
                        (0, f.jsx)(k.E, {
                            variant: "text-sm/normal",
                            className: pv.PA,
                            children: m.intl.string(m.t.NAzplE),
                        }),
                        (0, f.jsx)(fE.A, { size: "sm", variant: "secondary" }),
                    ],
                })
        : (0, f.jsxs)(O.w, {
              type: "critical",
              children: [
                  (0, f.jsx)(eh.D, { variant: "heading-md/medium", children: m.intl.string(m.t["/3qnL/"]) }),
                  (0, f.jsx)(k.E, { variant: "text-sm/normal", className: pv.PA, children: m.intl.string(m.t.qKs3vg) }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      size: "sm",
                      text: m.intl.string(m.t["7psymi"]),
                      onClick: () => fh(),
                  }),
              ],
          });
}
var Ni = i(297413),
    Nn = i(50268),
    Ns = i(922301),
    Nl = i(262),
    Nr = i(68085),
    Na = i(915614),
    No = i(246839);
let Nu = st.Ay.getEnableHardwareAcceleration() ? iH.Js : iH.eu;
function Nd(e) {
    let t = (0, TK.X)("UserSettingsAccountProfileCard");
    return N.useCallback(() => {
        t ? (0, TZ.openUserProfileModal)({ userId: e }) : (0, ey.openUserSettings)(d.X.PROFILE_PANEL);
    }, [t, e]);
}
function Nc(e) {
    let { className: t, user: n } = e,
        s = N.useRef(null),
        l = (0, xe.EC)(),
        r = l?.nick?.[0] ?? null,
        [a, o] = N.useState(!1);
    N.useEffect(() => {
        o(null != s.current && s.current.scrollWidth > s.current.clientWidth);
    }, [n.username]);
    let u = !n.isClaimed(),
        d = u ? m.intl.string(m.t["7Ngnyr"]) : void 0;
    return (0, f.jsxs)("div", {
        className: eF()(No.ZZ, t),
        children: [
            (0, f.jsx)("div", {
                className: No.NQ,
                children: (0, f.jsxs)("div", {
                    className: No.Fj,
                    children: [
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: No.p9,
                            children: m.intl.string(m.t.qqhR3L),
                        }),
                        (0, f.jsxs)("div", {
                            className: No.HR,
                            ref: s,
                            children: [
                                (0, f.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: n.username,
                                }),
                                !n.hasUniqueUsername() &&
                                    (0, f.jsxs)(k.E, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", n.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            null != r &&
                (0, f.jsx)("div", {
                    className: No.a$,
                    children: (0, f.jsx)(e1.m, {
                        __unsupportedReactNodeAsText: r,
                        "aria-label": !1,
                        children: (0, f.jsx)(lb.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: F.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, f.jsx)(e1.m, {
                text: d,
                children: (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: No.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? m.intl.string(m.t["16kTw/"]) : m.intl.string(m.t.bt75uw),
                        disabled: u,
                        "aria-label": m.intl.string(m.t.JECa91),
                        onClick: () =>
                            (0, C.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([i.e("38408"), i.e("20429"), i.e("20969")]).then(
                                    i.bind(i, 667792),
                                );
                                return (t) => (0, f.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function Ng(e) {
    let { user: t, className: i } = e,
        n = Nd(t.id),
        s = (0, xe.EC)(),
        l = s?.nick?.[0] ?? null,
        r = xZ.Ay.getGlobalName(t),
        a = N.useRef(null),
        [o, u] = N.useState(!1);
    return (
        N.useEffect(() => {
            u(null != a.current && a.current.scrollWidth > a.current.clientWidth);
        }, [r]),
        (0, f.jsxs)("div", {
            className: eF()(No.ZZ, i),
            children: [
                (0, f.jsx)("div", {
                    className: No.NQ,
                    children: (0, f.jsxs)("div", {
                        className: No.Fj,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-md/medium",
                                className: No.p9,
                                children: m.intl.string(m.t["9AjdkD"]),
                            }),
                            (0, f.jsx)("div", {
                                className: No.HR,
                                ref: a,
                                children: (0, f.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == r ? m.intl.string(m.t.ep5kjK) : r,
                                }),
                            }),
                        ],
                    }),
                }),
                null != l &&
                    (0, f.jsx)("div", {
                        className: No.a$,
                        children: (0, f.jsx)(e1.m, {
                            __unsupportedReactNodeAsText: l,
                            "aria-label": !1,
                            children: (0, f.jsx)(lb.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: F.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: No.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: o ? m.intl.string(m.t["16kTw/"]) : m.intl.string(m.t.bt75uw),
                        "aria-label": m.intl.string(m.t.YXeWYM),
                        onClick: n,
                    }),
                }),
            ],
        })
    );
}
function Nm(e) {
    let t,
        { className: n, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: m.intl.string(m.t.OYkgVk),
                buttonAriaLabel: m.intl.string(m.t["pvBD+W"]),
                valueMessage: m.intl.string(m.t["8SfTN/"]),
                handleClick: () =>
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(
                            i.bind(i, 97060),
                        );
                        return (t) => (0, f.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: m.intl.string(m.t.bt75uw),
                buttonAriaLabel: m.intl.string(m.t["8peUT0"]),
                valueMessage: (0, f.jsx)(fR, {
                    text: e,
                    censor: fO,
                    revealLabel: m.intl.string(m.t["Zvx+yV"]),
                    hideLabel: m.intl.string(m.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, C.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("97570"), i.e("20577"), i.e("65861")]).then(
                            i.bind(i, 97060),
                        );
                        return (t) => (0, f.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: m.intl.string(m.t.BleMPB),
            buttonAriaLabel: m.intl.string(m.t.BleMPB),
            valueMessage: m.intl.string(m.t.qxk9zo),
            handleClick: () => fh(),
        };
    return (0, f.jsxs)("div", {
        className: eF()(No.ZZ, n),
        children: [
            (0, f.jsx)("div", {
                className: No.NQ,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: No.p9,
                            children: m.intl.string(m.t.tlZllC),
                        }),
                        (0, f.jsx)("div", {
                            children: (0, f.jsx)(k.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, f.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: No.pr,
                children: (0, f.jsx)(eE.$, {
                    variant: "secondary",
                    size: "sm",
                    text: t.buttonText,
                    "aria-label": t.buttonAriaLabel,
                    onClick: t.handleClick,
                }),
            }),
        ],
    });
}
function NA(e) {
    let t,
        { className: n, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: r } = s,
        a = null != l;
    return (
        (t = a
            ? (0, f.jsx)(fR, {
                  text: l,
                  censor: fy,
                  revealLabel: m.intl.string(m.t.eY3xlT),
                  hideLabel: m.intl.string(m.t["jllbv+"]),
              })
            : m.intl.string(m.t.I5kDqj)),
        (0, f.jsxs)("div", {
            className: eF()(No.ZZ, n),
            children: [
                (0, f.jsx)("div", {
                    className: No.NQ,
                    children: (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-md/medium",
                                className: No.p9,
                                children: m.intl.string(m.t.kerONq),
                            }),
                            (0, f.jsx)("div", {
                                children: (0, f.jsx)(k.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, f.jsxs)("div", {
                    className: No.PU,
                    children: [
                        a && null != r
                            ? (0, f.jsx)("div", {
                                  className: eF()(No.pr, No.DT),
                                  children: (0, f.jsx)(B.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: m.intl.string(m.t.N86XcP),
                                      "aria-label": m.intl.string(m.t.Rpn4A3),
                                      onClick: function () {
                                          (0, C.openModal)((e) =>
                                              (0, f.jsx)(pE.default, {
                                                  ...e,
                                                  title: m.intl.string(m.t["3CTiKi"]),
                                                  children: s.hasFlag(Q.nhx.MFA_SMS)
                                                      ? m.intl.string(m.t.jrhJyo)
                                                      : void 0,
                                                  actionText: m.intl.string(m.t.N86XcP),
                                                  handleSubmit: (e) => pG.A.removePhone(e, pG.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, f.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: No.pr,
                            children: (0, f.jsx)(eE.$, {
                                variant: "secondary",
                                size: "sm",
                                text: a ? m.intl.string(m.t.bt75uw) : m.intl.string(m.t.OYkgVk),
                                "aria-label": a ? m.intl.string(m.t.YDabSe) : m.intl.string(m.t["SfUuE+"]),
                                onClick: function () {
                                    (0, C.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 615715));
                                            return (t) => (0, f.jsx)(e, { reason: pG.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: pF.V },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function Nh(e) {
    let { user: t } = e,
        i = (0, Nn.A)({ id: t.id, label: m.intl.string(m.t["/AXYnE"]) }),
        n = g.Q_.useSetting(),
        s = N.useRef(null);
    return n && cx.p5
        ? (0, f.jsx)(G.Y, {
              targetElementRef: s,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, f.jsx)(U.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": m.intl.string(m.t.RANhlE),
                      children: i,
                  });
              },
              children: (e) =>
                  (0, f.jsx)(V.D, {
                      ...e,
                      innerRef: s,
                      className: No.SI,
                      "aria-label": m.intl.formatToPlainString(m.t.xZtncm, { username: t.username }),
                      children: (0, f.jsx)(mu.j, { size: "md", color: "currentColor", className: No.D$ }),
                  }),
          })
        : null;
}
function NE(e) {
    let { className: t } = e,
        n = (0, fT.b8)(),
        s = (0, fT.yM)(),
        l = (0, fT.Y2)(),
        r = !n || s,
        a = m.intl.string(m.t["9KiIz6"]),
        o = m.intl.string(m.t.DVywUB),
        u = m.intl.string(m.t.lKDPGA),
        d = N.useCallback(() => {
            window.open(to.A.getArticleURL(Q.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        c = N.useCallback(() => {
            (0, C.openModalLazy)(async () => {
                let { default: e } = await i.e("45361").then(i.bind(i, 151080));
                return (t) => (0, f.jsx)(e, { ...t });
            });
        }, []),
        g = N.useMemo(
            () =>
                n
                    ? s
                        ? m.intl.string(m.t.sK0dmH)
                        : l
                          ? m.intl.format(fp.default.WM5adV, { handleOnHelpUrlHook: d })
                          : m.intl.string(m.t.XxRj7f)
                    : u,
            [n, s, l, u, d],
        ),
        A = n && !s && l;
    return (0, f.jsxs)("div", {
        className: eF()(No.ZZ, t),
        children: [
            (0, f.jsx)("div", {
                className: No.NQ,
                children: (0, f.jsxs)("div", {
                    children: [
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            className: No.p9,
                            children: m.intl.string(m.t["/52UYy"]),
                        }),
                        (0, f.jsx)("div", {
                            children: (0, f.jsxs)(k.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [l && n && !s ? `${m.intl.string(m.t.XxRj7f)} \u{2022} ` : null, g],
                            }),
                        }),
                    ],
                }),
            }),
            A &&
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: No.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.bt75uw),
                        "aria-label": m.intl.string(m.t.bt75uw),
                        onClick: c,
                    }),
                }),
            r &&
                !A &&
                (0, f.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: No.pr,
                    children: (0, f.jsx)(eE.$, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? a : o,
                        "aria-label": s ? a : o,
                        onClick: () => fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function NT(e) {
    let { currentUser: t } = e,
        i = Nd(t.id),
        n = (0, xV.Ay)(t.id),
        s = (0, Nl.A)(n),
        l = g.jP.useSetting(),
        r = (0, R.bG)([TH.A], () => TH.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: o, avatarDecorationSrc: u } = (0, TW.A)({ userId: t?.id, size: iK._3.SIZE_80 }),
        d = (0, fx.fk)();
    return (0, f.jsxs)("div", {
        className: No.DM,
        children: [
            (0, f.jsx)(Na.o, {
                user: t,
                displayProfile: n,
                avatarSize: iK._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, f.jsxs)("div", {
                className: No.eF,
                children: [
                    (0, f.jsx)(Nu, {
                        className: No.my,
                        src: o,
                        avatarDecoration: u,
                        status: l,
                        size: iK._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, f.jsxs)("div", {
                        children: [
                            (0, f.jsxs)("div", {
                                className: No.Ib,
                                children: [
                                    (0, f.jsx)(Ni.A, {
                                        user: t,
                                        className: No.a1,
                                        discriminatorClass: No.D2,
                                        displayNameStylesType: Ns.G.STATIC,
                                    }),
                                    (0, f.jsx)(Nh, { user: t }),
                                ],
                            }),
                            (0, f.jsx)(Nr.A, { badges: s, className: No.C_, badgeClassName: No.qS }),
                        ],
                    }),
                    (0, f.jsx)(eE.$, {
                        variant: "primary",
                        size: "sm",
                        text: m.intl.string(m.t["2p2aYz"]),
                        onClick: i,
                    }),
                ],
            }),
            (0, f.jsxs)("div", {
                className: No.Tp,
                children: [
                    null != a
                        ? (0, f.jsx)(k.E, {
                              className: No.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, f.jsxs)("div", {
                        className: No.FL,
                        children: [
                            (0, f.jsx)(Ng, { className: No.mS, user: t }),
                            (0, f.jsx)(Nc, { user: t }),
                            (0, f.jsx)(Nm, { className: No.Zr, user: t }),
                            (0, f.jsx)(NA, { className: No.Zr, user: t }),
                            d && (0, f.jsx)(NE, { className: No.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let Nx = (0, o.E2)(d.X.ACCOUNT_PROFILE_SETTING, {
        useSearchTerms: function () {
            let e = [
                    m.intl.string(m.t.LYju5J),
                    m.intl.string(m.t["9AjdkD"]),
                    m.intl.string(m.t["+JkHPw"]),
                    m.intl.string(m.t.oP5zGA),
                    m.intl.string(m.t.Ulqq6K),
                ],
                t = (0, fx.fk)(),
                i = (0, fT.Y2)();
            return (
                t &&
                    (e.push(m.intl.string(m.t["/52UYy"])),
                    e.push(m.intl.string(m.t.sK0dmH)),
                    e.push(m.intl.string(m.t.XxRj7f)),
                    e.push(m.intl.string(m.t.DVywUB)),
                    e.push(m.intl.string(m.t["9KiIz6"])),
                    i &&
                        (e.push(m.intl.string(fp.default.FTawSP)),
                        e.push(m.intl.string(fp.default["bD//cU"])),
                        e.push(m.intl.string(fp.default.SH6Tcv)))),
                e
            );
        },
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return (0, f.jsxs)(L.B, {
                gap: "md",
                children: [
                    null != e && (0, f.jsx)(Nt, { currentUser: e }),
                    null != e && (0, f.jsx)(NT, { currentUser: e }),
                ],
            });
        },
    }),
    NS = (0, o.zZ)(d.X.ACCOUNT_PROFILE_CATEGORY, { buildLayout: () => [Nx] });
var Np = i(522369);
function Nf(e) {
    let { currentUser: t, disabled: i, handleDisableAccount: n, handleDeleteAccount: s } = e,
        l = t.isClaimed();
    return (0, f.jsx)(sy.D, {
        label: m.intl.string(m.t.ZKsIks),
        description: l ? m.intl.string(m.t.TIh3Yj) : m.intl.string(m.t.czsGA8),
        children: (0, f.jsxs)(aB.e, {
            size: "sm",
            className: Np.U,
            children: [
                l
                    ? (0, f.jsx)(eE.$, {
                          variant: "critical-primary",
                          size: "sm",
                          text: m.intl.string(m.t.jf5GGb),
                          disabled: i,
                          onClick: n,
                      })
                    : null,
                (0, f.jsx)(eE.$, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: m.intl.string(m.t["8lQ2rR"]),
                    disabled: i,
                    onClick: s,
                }),
            ],
        }),
    });
}
var NN = i(425587);
function N_(e) {
    if (e.body.code === Q.t02.INVALID_PASSWORD) throw e;
    (0, ak.A)({ title: m.intl.string(m.t.LX0nT8), subtitle: e.body.message });
}
async function NC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = t6.default.getCurrentUser();
    if (null == t) return;
    let i = [];
    try {
        i = (await NN.A.fetchTeams(!0)).body;
    } catch {}
    i.filter((e) => e.owner_user_id === t.id).length > 0
        ? (0, ak.A)({
              title: m.intl.string(m.t["Y++oNe"]),
              subtitle: m.intl.format(m.t.alpAUm, { devPortalLink: "https://discord.com/developers/teams" }),
          })
        : K.A.getGuildsArray().filter((e) => e.ownerId === t.id).length > 0
          ? (0, ak.A)({ title: m.intl.string(m.t.vJiTOL), subtitle: m.intl.string(m.t.UyVVan) })
          : t.isClaimed()
            ? (0, C.openModal)((t) =>
                  (0, f.jsx)(pE.default, {
                      ...t,
                      handleSubmit: (t) => (0, TY.U_)(t, e).then(Q.tEg, N_),
                      title: e ? m.intl.string(m.t.xca2ts) : m.intl.string(m.t.goXv9g),
                      actionText: e ? m.intl.string(m.t["8lQ2rR"]) : m.intl.string(m.t.jf5GGb),
                      variant: "critical-primary",
                      children: e ? m.intl.string(m.t.FB4H1D) : m.intl.string(m.t.gk7h32),
                  }),
              )
            : (0, se.A)({
                  title: m.intl.string(m.t.xca2ts),
                  subtitle: m.intl.string(m.t.FB4H1D),
                  confirmText: m.intl.string(m.t["8lQ2rR"]),
                  onConfirm: () => (0, TY.U_)("", !0),
              });
}
let NI = (0, o.Tf)(d.X.ACCOUNT_DELETE_SETTING, {
        useTitle: () => m.intl.string(m.t["gIpzR+"]),
        useSubtitle: () => m.intl.string(m.t.Bd6dOf),
        useLabel: () => m.intl.string(m.t["8lQ2rR"]),
        useVariant: () => "critical-primary",
        onClick: () => NC(!0),
    }),
    Nb = (0, o.Tf)(d.X.ACCOUNT_DISABLE_SETTING, {
        useTitle: () => m.intl.string(m.t["p/Tjtp"]),
        useSubtitle: () => m.intl.string(m.t.YvDmKb),
        useLabel: () => m.intl.string(m.t.jf5GGb),
        useVariant: () => "critical-secondary",
        onClick: () => NC(!1),
        usePredicate: () => {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return e?.isClaimed() ?? !1;
        },
    }),
    Nv = (0, o.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nb, NI] }),
    Nj = (0, o.E2)(d.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.ZKsIks), m.intl.string(m.t.jf5GGb), m.intl.string(m.t["8lQ2rR"])],
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser());
            return null == e
                ? null
                : (0, f.jsx)(Nf, {
                      currentUser: e,
                      handleDisableAccount: () => NC(!1),
                      handleDeleteAccount: () => NC(!0),
                  });
        },
    }),
    Ny = (0, o.zZ)(d.X.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [Nj] });
var NO = i(308645),
    NR = i(271995),
    NL = i(855267);
let ND = (0, o.E2)(d.X.ACCOUNT_STANDING_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["16r9jm"])],
        Component: NL.A,
    }),
    NP = (0, o.zZ)(d.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [ND] }),
    NG = (0, o.t_)(d.X.ACCOUNT_STANDING_PANEL, {
        useTitle: () => m.intl.string(m.t["16r9jm"]),
        buildLayout: () => [NP],
    }),
    NU = (0, o.t0)(d.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: NR.$b,
        useSubtitle: NR.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: i } = (0, NR._k)();
            return { type: e_.Xy.ICON, icon: i, color: e, backgroundColor: t };
        },
        initialize: () => {
            NO.Yn();
        },
        buildLayout: () => [NG],
    }),
    NM = (0, o.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, {
        useTitle: () => m.intl.string(m.t["16r9jm"]),
        buildLayout: () => [NU],
    }),
    NV = (0, o.zZ)(d.X.ACCOUNT_STANDING_CATEGORY, { buildLayout: () => [ND] });
var Nk = i(834981),
    Nw = i(840387),
    NF = i(177953),
    NB = i(986922),
    Nz = i(602339);
let NY = (0, o.E2)(d.X.FAMILY_CENTER_SETTING, {
        Component: NB.p,
        useSearchTerms: () => [
            m.intl.string(Nz.default.RZqaJn),
            m.intl.string(Nz.default.bdBmqy),
            m.intl.string(Nz.default["gVWG+6"]),
            m.intl.string(Nz.default.ahKIJO),
            m.intl.string(Nz.default["8SLtqb"]),
        ],
    }),
    NX = (0, o.zZ)(d.X.FAMILY_CENTER_CATEGORY, { buildLayout: () => [NY] });
function NH() {
    return N.useMemo(() => ({ badgeType: e_.Xi.COUNT, useCount: Nk.VT }), []);
}
let NK = (0, o.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => m.intl.string(Nz.default.RZqaJn),
        buildLayout: () => [NX],
    }),
    NW = (0, o.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(Nz.default.RZqaJn),
        icon: NF.n,
        usePersistentBadge: NH,
        buildLayout: () => [NK],
    }),
    NZ = (0, o.zZ)(d.X.ACCOUNT_FAMILY_CENTER_CATEGORY, {
        useTitle: () => m.intl.string(Nz.default.RZqaJn),
        usePersistentBadge: NH,
        buildLayout: () => [Nq],
    }),
    Nq = (0, o.t0)(d.X.ACCOUNT_FAMILY_CENTER_NESTED_PANEL, {
        useTitle: () => ((0, Nk.Li)() ? m.intl.string(Nz.default.IcMQUP) : m.intl.string(Nz.default["n8wrn/"])),
        useSubtitle: () => {
            let e = (0, Nw.Z)(),
                t = (0, Nk.Li)();
            return e
                ? t
                    ? m.intl.string(Nz.default.G8lHFU)
                    : m.intl.string(Nz.default.uOLNEZ)
                : m.intl.string(Nz.default.Z53oSM);
        },
        buildLayout: () => [NK],
    });
var NQ = (((a = {}).SECURITY = "SECURITY"), (a.STANDING = "STANDING"), a);
let NJ = (0, o.dT)(d.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => m.intl.string(m.t["Vov/9o"]),
        onItemSelect: () => {
            X.default.track(Q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: NQ.STANDING });
        },
        buildLayout: () => [NV],
    }),
    N$ = (0, o.dT)(d.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => m.intl.string(m.t.Am9YHi),
        onItemSelect: () => {
            X.default.track(Q.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: NQ.SECURITY });
        },
        buildLayout: () => [NS, fm, Ny],
    });
function N0() {
    let e = t6.default.getCurrentUser();
    return (
        null == e || (0, u.pC)("Account") || (0, x8.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            pd.A.clearBackupCodes(), (0, TY.Uo)();
        }
    );
}
let N1 = (0, o.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => m.intl.string(m.t["JAIM/m"]),
        initialize: N0,
        useObscuredNotice: u2.L,
        buildLayout: () => [N$, NJ],
    }),
    N2 = (0, o.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => m.intl.string(m.t["ldCE/p"]),
        initialize: N0,
        useObscuredNotice: u2.L,
        buildLayout: () => [fk, Ne, NM, NZ, Nv],
    }),
    N3 = (0, o.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, u.pC)("Account") ? m.intl.string(m.t["ldCE/p"]) : m.intl.string(m.t["JAIM/m"])),
        icon: AO.n,
        buildLayout: () => ((0, u.pC)("Account") ? [N2] : [N1]),
    });
var N6 = i(176781),
    N4 = i(611371);
let N5 = () =>
    (0, f.jsx)(e1.m, { asContainer: !0, text: m.intl.string(m.t["/fgfWh"]), children: (0, f.jsx)(N4.A, {}) });
var N8 = i(274372),
    N7 = i(607814),
    N9 = i(696016);
let _e = (() => {
        let e = [N9.wN];
        for (let t = 10; t <= N9.qh; t += 10) e.push(t);
        return e[e.length - 1] !== N9.qh && e.push(N9.qh), e;
    })(),
    _t = (0, o.sN)(d.X.CLIPS_AUTO_CLIP_STORAGE_LIMIT, {
        useTitle: () => m.intl.string(m.t.yfsrDI),
        useSubtitle: () => m.intl.string(m.t.vlDHdC),
        minValue: N9.wN,
        maxValue: N9.qh,
        getInitialValue: () => N8.A.getSettings().maxAutoClips,
        onValueRender: (e) => `${Math.floor(e)}`,
        asValueChanges: (e) => N7.e6(Math.floor(e)),
        markers: _e,
        onMarkerRender: (e) => `${Math.floor(e)}`,
    }),
    _i = (0, o.zD)(d.X.CLIPS_ENABLE_GAME_SIGNALS, {
        useTitle: () => m.intl.string(m.t.iV6KcI),
        useSubtitle: () => m.intl.string(m.t["dJ2tX+"]),
        useValue: () => (0, R.bG)([N8.A], () => N8.A.getSettings().clipSignals.enableGameSignals),
        setValue: (e) => {
            let t = N8.A.getSettings().clipSignals;
            N7.PW({ ...t, enableGameSignals: e });
        },
    }),
    _n = (0, o.zZ)(d.X.CLIPS_AUTOMATIC_CLIPPING_CATEGORY, {
        useTitle: () => m.intl.string(m.t.sA0WKL),
        usePredicate: () => {
            let { enableAdvancedSignals: e } = lJ.L_.useConfig({ location: "ClipsAutomaticClippingCategory" });
            return e;
        },
        buildLayout: () => [_t, _i],
    });
var _s = i(150616),
    _l = i(16590);
let _r = (0, o.Tf)(d.X.CLIPS_CLEAR_REMINDER_SNOOZE, {
    useTitle: () => m.intl.string(_l.default.S0H8in),
    useSubtitle: () =>
        (0, R.bG)([N8.A], () => {
            let { remindersDismissedUntil: e } = N8.A.getUserAgnosticState();
            if (null == e || Date.now() >= e) return m.intl.string(_l.default.I8u5xw);
            let t = new Date(e).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
            return m.intl.formatToPlainString(_l.default.iJ0azr, { time: t });
        }),
    useLabel: () => m.intl.string(_l.default.QtW1Nc),
    useVariant: () => "secondary",
    usePredicate: () => _s.Z.useConfig({ location: "ClearReminderSnooze" }).enableReminderSidebar,
    useDisabled: () =>
        (0, R.bG)([N8.A], () => {
            let { remindersDismissedUntil: e } = N8.A.getUserAgnosticState();
            return null == e || Date.now() >= e;
        }),
    onClick: N7.Cr,
});
var _a = i(753070);
let _o = (0, o.Hn)(d.X.CLIPS_FRAME_RATE, {
    useTitle: () => m.intl.string(m.t["2wScL1"]),
    useSubtitle: () => m.intl.string(m.t["Rf9+fy"]),
    useValue: () => (0, R.bG)([N8.A], () => N8.A.getSettings().clipsQuality.frameRate),
    setValue: (e) => {
        let { clipsQuality: t } = N8.A.getSettings();
        N7.GS({ resolution: t.resolution, frameRate: e });
    },
    useOptions: () => [
        { id: "15", value: _a.kn.FPS_15, label: m.intl.formatToPlainString(m.t.Qb44XH, { fps: _a.kn.FPS_15 }) },
        { id: "30", value: _a.kn.FPS_30, label: m.intl.formatToPlainString(m.t.Qb44XH, { fps: _a.kn.FPS_30 }) },
        { id: "60", value: _a.kn.FPS_60, label: m.intl.formatToPlainString(m.t.Qb44XH, { fps: _a.kn.FPS_60 }) },
    ],
});
var _u = i(372684);
let _d = (0, o.E2)(d.X.CLIPS_HARDWARE_CLASSIFICATION_WARNING, {
    useSearchTerms: () => [m.intl.string(m.t.SIxrIF)],
    usePredicate: () => (0, R.bG)([N8.A], () => N8.A.getHardwareClassification()) === _u.k9.BELOW_MINIMUM,
    Component: () => (0, f.jsx)(si.A, { look: si.k.WARNING, children: m.intl.string(m.t.SIxrIF) }),
});
var _c = i(158278);
let _g = (0, o.E2)(d.X.CLIPS_KEYBIND, {
        useSearchTerms: () => [m.intl.string(m.t.pf54EU), m.intl.string(m.t["QyB/jK"])],
        Component: () => {
            let e = (0, R.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(Q.hCu.SAVE_CLIP, !0));
            tO()(null != e, "Save clip keybind unset");
            let t = N.useCallback(
                (t) => {
                    tR.A.setKeybind({ ...e, shortcut: t });
                },
                [e],
            );
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.pf54EU),
                description: m.intl.string(m.t["QyB/jK"]),
                layout: "horizontal",
                children: (0, f.jsx)("div", {
                    className: _c.g,
                    children: (0, f.jsx)(tL.A, { defaultValue: e.shortcut, onChange: t }),
                }),
            });
        },
    }),
    _m = (0, o.Hn)(d.X.CLIPS_LENGTH, {
        useTitle: () => m.intl.string(m.t.OgfUio),
        useSubtitle: () => m.intl.string(m.t.H7j4tY),
        useValue: () => (0, R.bG)([N8.A], () => N8.A.getSettings().clipsLength),
        setValue: (e) => N7.h$(e),
        useOptions: () => [
            { id: "30s", value: N9.LX.SECONDS_30, label: m.intl.formatToPlainString(m.t["bTFv/3"], { count: 30 }) },
            { id: "1m", value: N9.LX.MINUTES_1, label: m.intl.formatToPlainString(m.t.ICo9Nk, { count: 1 }) },
            { id: "2m", value: N9.LX.MINUTES_2, label: m.intl.formatToPlainString(m.t.ICo9Nk, { count: 2 }) },
        ],
    }),
    _A = (0, o.E2)(d.X.CLIPS_QUALITY_INFOBOX, {
        useSearchTerms: () => [m.intl.string(m.t["Z+MfqT"])],
        Component: () => (0, f.jsx)(si.A, { look: si.k.INFO, children: m.intl.string(m.t["Z+MfqT"]) }),
    }),
    _h = (0, o.Hn)(d.X.CLIPS_RESOLUTION, {
        useTitle: () => m.intl.string(m.t.aFudZJ),
        useSubtitle: () => m.intl.string(m.t.nIrkW5),
        useValue: () => (0, R.bG)([N8.A], () => N8.A.getSettings().clipsQuality.resolution),
        setValue: (e) => {
            let { clipsQuality: t } = N8.A.getSettings();
            N7.GS({ resolution: e, frameRate: t.frameRate });
        },
        useOptions: () => [
            {
                id: "480p",
                value: _a.on.RESOLUTION_480,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: _a.on.RESOLUTION_480 }),
            },
            {
                id: "720p",
                value: _a.on.RESOLUTION_720,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: _a.on.RESOLUTION_720 }),
            },
            {
                id: "1080p",
                value: _a.on.RESOLUTION_1080,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: _a.on.RESOLUTION_1080 }),
            },
            {
                id: "1440p",
                value: _a.on.RESOLUTION_1440,
                label: m.intl.formatToPlainString(m.t.TEOC0I, { resolution: _a.on.RESOLUTION_1440 }),
            },
            { id: "source", value: _a.on.RESOLUTION_SOURCE, label: m.intl.string(m.t.XjXqzh) },
        ],
    }),
    _E = (0, o.E2)(d.X.CLIPS_SCREENSHOT_KEYBIND, {
        useSearchTerms: () => [m.intl.string(m.t["0U/hj7"]), m.intl.string(m.t["5zxkdo"])],
        usePredicate: lJ.BW,
        Component: () => {
            let e = (0, R.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(Q.hCu.SAVE_CLIP, !0)),
                t = (0, R.bG)([eI.Ay], () => eI.Ay.getKeybindForAction(Q.hCu.SAVE_SCREENSHOT, !0));
            tO()(null != e, "Save clip keybind unset"), tO()(null != t, "Save screenshot keybind unset");
            let i = N.useCallback(
                (e) => {
                    tR.A.setKeybind({ ...t, shortcut: e });
                },
                [t],
            );
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t["0U/hj7"]),
                description: m.intl.string(m.t["5zxkdo"]),
                layout: "horizontal",
                children: (0, f.jsx)("div", {
                    className: _c.g,
                    children: (0, f.jsx)(tL.A, { defaultValue: t.shortcut, onChange: i }),
                }),
            });
        },
    }),
    _T = (0, o.E2)(d.X.CLIPS_STORAGE_LOCATION, {
        useSearchTerms: () => [m.intl.string(m.t.s4773E), m.intl.string(m.t.svjwGh)],
        Component: () => {
            let e = (0, R.bG)([N8.A], () => N8.A.getSettings().storageLocation),
                t = N.useRef(!1),
                i = async () => {
                    if (!t.current) {
                        t.current = !0;
                        try {
                            let e = await s2.A.fileManager.showOpenDialog({
                                properties: ["openDirectory", "createDirectory"],
                            });
                            e.length > 0 && N7.HU(e[0]);
                        } finally {
                            t.current = !1;
                        }
                    }
                };
            return (0, f.jsx)(sy.D, {
                label: m.intl.string(m.t.s4773E),
                description: m.intl.string(m.t.svjwGh),
                layout: "horizontal",
                children: (0, f.jsx)(V.D, {
                    "aria-label": m.intl.formatToPlainString(m.t.iMONTj, { storageLocation: e }),
                    onClick: i,
                    children: (0, f.jsx)(lD.k, { tabIndex: -1, value: e, editable: !1, "aria-hidden": !0 }),
                }),
            });
        },
    });
var _x = i(572164);
let _S = (0, o.zD)(d.X.CLIPS_ENABLE, {
    useTitle: () => m.intl.string(m.t.h8rgrK),
    useSubtitle: () => m.intl.string(m.t["4Qw3NO"]),
    useValue: () => (0, _x.Et)(),
    setValue: (e) => N7.yO({ clipsEnabled: e, trackAnalytics: !0 }),
});
var _p = i(915618);
let _f = (0, o.zD)(d.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
        useTitle: () => m.intl.string(m.t.yXvykv),
        useSubtitle: () => m.intl.string(m.t.YP3ujk),
        useValue: _x.XT,
        setValue: (e) => N7.fd({ enabled: e, trackAnalytics: !0 }),
        usePredicate: () => {
            let e = (0, ej.isWindows)(),
                t = (0, _p.A)(lv.Ay);
            return e && t;
        },
    }),
    _N = (0, o.zD)(d.X.CLIPS_ENABLE_REMINDERS, {
        useTitle: () => m.intl.string(m.t["3zwNf6"]),
        useSubtitle: () => m.intl.string(m.t.m4Cjj9),
        useValue: () => (0, R.bG)([N8.A], () => N8.A.getSettings().remindersEnabled),
        setValue: (e) => N7.Mt(e),
    }),
    __ = (0, o.zZ)(d.X.CLIPS_RECORDING_CATEGORY, {
        useTitle: () => m.intl.string(m.t.iIwmV5),
        buildLayout: () => [_A, _d, _S, _f, _N, _r, _m, _h, _o, _g, _E, _T],
    }),
    _C = (0, o.t_)(d.X.CLIPS_PANEL, {
        useTitle: () => m.intl.string(m.t.z2jK6X),
        usePersistentBadge: () => ({
            badgeType: e_.Xi.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomBadge: () => (0, f.jsx)(N5, {}),
        }),
        usePredicate: lJ.sw,
        buildLayout: () => [__, _n],
    }),
    _I = (0, o.i4)(d.X.CLIPS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.z2jK6X),
        icon: N6.x,
        buildLayout: () => [_C],
    });
var _b = i(875444);
function _v(e, t) {
    let i = (0, R.bG)([Th.default], () => Th.default.getFetchState()),
        n = (0, R.bG)([Th.default], () =>
            e ? Th.default.getNewestTokensForNonChildrenApplications() : Th.default.getNewestTokens(),
        ),
        s = N.useMemo(
            () => (null == n ? [] : n.filter((e) => (0, _b.A)(e.application)).map((e) => e.application)),
            [n],
        );
    return (
        N.useEffect(() => {
            t || EZ.A.fetch();
        }, [t]),
        { showLoadingIndicator: i !== Th.FetchState.FETCHED && (null == n || 0 === n.length), slayerSdkApplications: s }
    );
}
i(644151);
var _j = i(464946);
i(750994);
var _y = i(998382);
function _O(e) {
    let { applications: t } = e,
        i = N.useMemo(() => t.sort((e, t) => dl.default.compare(t.id, e.id)), [t]),
        n = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = e.join(", "),
                n = i.length - 3;
            return n > 0
                ? m.intl.format(m.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, f.jsx)(
                              k.E,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: m.intl.format(m.t["EADv+4"], { count: n }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [i]),
        s = N.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let n = i[t];
                if (null == n) break;
                let { icon: s, name: l, id: r } = n,
                    a = i$.Ay.getApplicationIconURL({ id: r, icon: s });
                e.push(
                    (0, f.jsx)(
                        e1.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, f.jsx)("img", { src: a, "aria-label": l, className: _y.Kk }),
                        },
                        r,
                    ),
                );
            }
            let t = i.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, f.jsx)(
                            "div",
                            {
                                className: _y.lK,
                                children: (0, f.jsx)(k.E, {
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
    return (0, f.jsxs)("div", {
        className: _y.wx,
        children: [
            (0, f.jsxs)("div", {
                className: _y.kX,
                children: [
                    (0, f.jsx)(k.E, { variant: "text-md/normal", color: "text-strong", children: n }),
                    (0, f.jsxs)(V.D, {
                        onClick: () => {
                            (0, ey.openUserSettings)(d.X.AUTHORIZED_APPS_PANEL);
                        },
                        className: _y.bJ,
                        children: [
                            (0, f.jsx)(k.E, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: m.intl.format(m.t.oYaYOe, {}),
                            }),
                            (0, f.jsx)(tE._, {
                                size: "xxs",
                                color: F.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: _y.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, f.jsx)("div", { className: _y.yF }),
            (0, f.jsx)("div", { className: _y.lJ, children: s }),
        ],
    });
}
function _R() {
    return (0, f.jsxs)("div", {
        className: _y.do,
        children: [
            (0, f.jsx)(k.E, {
                variant: "text-md/medium",
                color: "text-strong",
                className: _y.xV,
                children: m.intl.string(m.t["+0U77d"]),
            }),
            (0, f.jsx)(k.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: m.intl.format(m.t.V8wClM, {
                    helpdeskArticle: to.A.getArticleURL(Q.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function _L(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, f.jsx)(_O, { applications: t }) : (0, f.jsx)(_R, {});
}
let _D = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES, {
    useSearchTerms: () => [m.intl.string(m.t.YpCiMt)],
    Component: function () {
        let { showLoadingIndicator: e, slayerSdkApplications: t } = _v(!0);
        return e ? (0, f.jsx)(u4.y, {}) : (0, f.jsx)(_L, { applications: t });
    },
});
function _P() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = _v(!0, !0);
    return !e && t.length > 0;
}
let _G = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_ALLOW_GAME_FRIEND_DMS_SETTING, {
        useTitle: () => m.intl.string(m.t.XpBObB),
        useSubtitle: () =>
            m.intl.format(m.t.oZsHTD, { helpdeskArticle: to.A.getArticleURL(Q.MVz.SLAYER_GAME_FRIENDS) }),
        useSearchTerms: () => [m.intl.string(m.t["Uv/eTx"])],
        useValue: () => g.Zk.useSetting(),
        setValue: (e) => g.Zk.updateSetting(e),
        usePredicate: _P,
    }),
    _U = (0, o.Qx)(d.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
        useTitle: () => m.intl.string(m.t["ms+Tme"]),
        useSubtitle: () => m.intl.string(m.t["4NN4+/"]),
        useOptions: () => [
            { name: m.intl.string(m.t.JIFnN9), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: m.intl.string(m.t.rRdsk1), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: m.intl.string(m.t.AolKwN), value: _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ],
        useValue: () => {
            let e = g.TA.useSetting();
            return e === _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? _.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e;
        },
        setValue: (e) => g.TA.updateSetting(e),
        usePredicate: _P,
    }),
    _M = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY, {
        useSearchTerms: () => [m.intl.string(m.t.YpCiMt)],
        buildLayout: () => [_D, _G, _U],
    });
var _V = i(687123),
    _k = i(444802),
    _w = i(558001);
i(866945);
var _F = i(835002);
function _B() {
    let e = (0, _k.WX)();
    N.useEffect(() => {
        (0, _w.N)(_F.YA.AGE_CONFIRMATION_NOTICE, _F.YX.VIEWED);
    }, []);
    let t = N.useCallback(() => {
            window.open(to.A.getArticleURL(e), "_blank"), (0, _w.N)(_F.YA.AGE_CONFIRMATION_NOTICE, _F.YX.LEARN_MORE);
        }, [e]),
        i = N.useCallback(() => {
            fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _w.N)(_F.YA.AGE_CONFIRMATION_NOTICE, _F.YX.CONFIRM_AGE);
        }, []);
    return (0, f.jsx)(ta.p, {
        messageType: ta.Y.INFO,
        action: (0, f.jsx)(B.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: m.intl.string(m.t.FDSSia),
            onClick: i,
        }),
        children: m.intl.format(m.t.mFgsfg, { hook: (e, i) => (0, f.jsx)(uF.Anchor, { onClick: t, children: e }, i) }),
    });
}
function _z() {
    let e = (0, fx.aX)(_V.t.REACTIVE_CHECK),
        t = (0, fT.b8)();
    return N.useMemo(() => {
        if (e && !t) return { type: e_.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: _B };
    }, [e, t]);
}
var _Y = i(308528),
    _X = i(171316);
function _H() {
    let e = (0, _X.uM)(),
        t = (0, Nk.vx)(),
        i = N.useCallback(() => {
            (0, sE.default)(),
                _Y.A.openPrivateChannel({ recipientIds: t }),
                (0, _w.N)(_F.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _F.YX.LEARN_MORE);
        }, [t]),
        n = N.useCallback(() => {
            (0, _w.N)(_F.YA.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE, _F.YX.VIEWED);
        }, []);
    return N.useMemo(() => {
        if (e)
            return {
                type: e_.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    m.intl.format(Nz.default.i284fU, {
                        hook: (e, t) => (0, f.jsx)(uF.Anchor, { onClick: i, children: e }, t),
                        count: t.length,
                    }),
            };
    }, [i, e, t.length, n]);
}
var _K = i(323073),
    _W = i(386171),
    _Z = i(96607);
let _q = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
        useTitle: () => m.intl.string(m.t.XahVjj),
        useSubtitle: () => m.intl.string(m.t.R9fXyS),
        useValue: _W.hT,
        useDisabled: () => {
            let e = (0, _Z.A)() ?? !0,
                t = (0, _K.sP)(),
                i = (0, fT.yM)();
            return (!t || !!i) && !e;
        },
        setValue: (e) => {
            (0, _K.p5)() && e
                ? fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                : g.Qe.updateSetting(e);
        },
    }),
    _Q = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
        useTitle: () => m.intl.string(m.t["L+yTsa"]),
        useSubtitle: () => m.intl.string(m.t.hiM8pU),
        useValue: _W.tI,
        useDisabled: () => {
            let e = (0, _Z.A)() ?? !0,
                t = (0, _K.sP)(),
                i = (0, fT.yM)();
            return N.useMemo(() => (!t || !!i) && !e, [t, e, i]);
        },
        setValue: (e) => {
            (0, _K.p5)() && e
                ? fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
                : g.Kg.updateSetting(e);
        },
    });
i(667532);
var _J = i(390248),
    _$ = i(632119),
    _0 = i(945276),
    _1 = i(389737),
    _2 = i(566769);
function _3() {
    let e,
        t = (0, _0.A)() ?? !0,
        i = (0, _X.uM)(),
        n = (0, _X.uM)(),
        {
            explicitContentGuilds: s,
            explicitContentFriendDm: l,
            explicitContentNonFriendDm: r,
        } = ((e = (0, uw.cf)([un.A], () => un.A.settings.textAndImages?.explicitContentSettings ?? (0, _$.C$)())),
        {
            explicitContentGuilds: (0, _$.Ys)({ setting: e?.explicitContentGuilds }),
            explicitContentNonFriendDm: (0, _$.Ys)({ setting: e?.explicitContentNonFriendDm, isDm: !0 }),
            explicitContentFriendDm: (0, _$.Ys)({ setting: e?.explicitContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _J.hK)() && t.includes(_.TO.SHOW)
                ? fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _$.Jz)(e);
        },
        o = [
            { value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) },
            { value: _.TO.BLOCK, label: m.intl.string(m.t["D/157Y"]) },
        ],
        u = [{ value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) }],
        d = { value: _.TO.SHOW, label: m.intl.string(m.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? m.intl.string(Nz.default["6Af/cw"]) : void 0 };
    return (0, f.jsxs)(_1.E, {
        description: m.intl.string(m.t.Wnojv1),
        children: [
            (0, f.jsx)(_2.A, {
                title: m.intl.string(m.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ explicitContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_2.A, {
                title: m.intl.string(m.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ explicitContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_2.A, {
                title: m.intl.string(m.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: i ? m.intl.string(Nz.default["6Af/cw"]) : void 0,
                options: u,
            }),
        ],
    });
}
function _6() {
    let e,
        t = (0, _0.A)() ?? !0,
        i = (0, _X.uM)(),
        n = (0, _X.uM)(),
        {
            goreContentGuilds: s,
            goreContentFriendDm: l,
            goreContentNonFriendDm: r,
        } = ((e = (0, uw.cf)([un.A], () => un.A.settings.textAndImages?.goreContentSettings ?? (0, _k.T4)())),
        {
            goreContentGuilds: (0, _k.gC)({ setting: e?.goreContentGuilds }),
            goreContentNonFriendDm: (0, _k.gC)({ setting: e?.goreContentNonFriendDm, isDm: !0 }),
            goreContentFriendDm: (0, _k.gC)({ setting: e?.goreContentFriendDm, isDm: !0, isFriend: !0 }),
        }),
        a = (e) => {
            let t = Object.values(e);
            (0, _J.hK)() && t.includes(_.TO.SHOW)
                ? fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.SENSITIVE_MEDIA_FILTER_SETTINGS })
                : (0, _k.qY)(e);
        },
        o = [
            { value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) },
            { value: _.TO.BLOCK, label: m.intl.string(m.t["D/157Y"]) },
        ],
        u = [{ value: _.TO.BLUR, label: m.intl.string(m.t.S49Uad) }],
        d = { value: _.TO.SHOW, label: m.intl.string(m.t["5k5OFp"]) };
    t && (o.unshift(d), u.unshift(d));
    let c = { isDisabled: n, tooltipText: i ? m.intl.string(Nz.default["6Af/cw"]) : void 0 };
    return (0, f.jsxs)(_1.E, {
        description: m.intl.string(m.t.XgH9eh),
        children: [
            (0, f.jsx)(_2.A, {
                title: m.intl.string(m.t["+uI23H"]),
                value: l,
                onChange: (e) => a({ goreContentFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_2.A, {
                title: m.intl.string(m.t["Yh+HX1"]),
                value: r,
                onChange: (e) => a({ goreContentNonFriendDm: e }),
                options: o,
                ...c,
            }),
            (0, f.jsx)(_2.A, {
                title: m.intl.string(m.t["FP+a42"]),
                value: s,
                onChange: (e) => a({ goreContentGuilds: e }),
                isDisabled: !t || n,
                options: u,
                tooltipText: i ? m.intl.string(Nz.default["6Af/cw"]) : void 0,
            }),
        ],
    });
}
var _4 = i(875162),
    _5 = i(334859);
let _8 = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING, {
    Component: function () {
        let e = (0, _k.WX)(),
            t = N.useMemo(
                () => [
                    {
                        id: "explicit-media-redaction",
                        title: m.intl.string(m.t.GYpoAq),
                        component: _3,
                        orientation: "vertical",
                    },
                    {
                        id: "gore-media-redaction",
                        title: m.intl.string(m.t["16/3Bi"]),
                        component: _6,
                        orientation: "vertical",
                    },
                ],
                [],
            );
        return (0, f.jsxs)(_j.h, {
            children: [
                (0, f.jsx)(_j._, {
                    header: m.intl.string(m.t["Hj/But"]),
                    description: m.intl.format(m.t.dliU4j, { learnMoreLink: to.A.getArticleURL(e) }),
                }),
                (0, f.jsx)(_4.A, { tabs: t, orientation: "vertical", tabsClassName: _5.v }),
            ],
        });
    },
    useSearchTerms: () => [
        m.intl.string(m.t["Hj/But"]),
        m.intl.string(m.t["N/oRI+"]),
        m.intl.string(m.t.QVdYsK),
        m.intl.string(m.t["aWD+tu"]),
        m.intl.string(m.t["5mnTa7"]),
        m.intl.string(m.t["K0OWP+"]),
    ],
});
var _7 = i(639555),
    _9 = i(617641),
    Ce = i(546140),
    Ct = i(406935),
    Ci = i(594061);
let Cn = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
    useTitle: () => m.intl.string(m.t.qFsx5q),
    useSubtitle: () => m.intl.format(m.t.lunaRv, { learnMoreLink: to.A.getArticleURL(Q.MVz.SAFETY_ALERTS) }),
    useValue: Ce.L,
    setValue: (e) =>
        Ci.wc.updateAsync(
            "privacy",
            (t) => {
                t.inappropriateConversationWarnings = Ct._t.create({ value: e });
            },
            Ci.Sb.INFREQUENT_USER_ACTION,
        ),
    usePredicate: function () {
        let e = (0, _9.Lc)({ location: "DMSafetyAlertsSetting" }),
            t = (0, _7.Rv)({ location: "DMSafetyAlertsSetting" }),
            i = (0, _0.A)() ?? !0;
        return e && !i && !t;
    },
});
var Cs = i(809505),
    Cl = i(923457),
    Cr = i(750714);
let Ca = (0, o.Qx)(d.X.CONTENT_AND_SOCIAL_DM_SPAM_SETTING, {
        useTitle: () => m.intl.string(m.t.tiCXaH),
        useSubtitle: () => m.intl.format(m.t.RvjRRI, { appealLink: to.A.getArticleURL(Q.MVz.SAFE_DIRECT_MESSAGING) }),
        useValue: function () {
            let e = g.he.useSetting(),
                t = g.cj.useSetting(),
                i = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                n = (0, fx.yv)(Cl.p.SPAM_FILTERS);
            return e !== _.he.DEFAULT_UNSET
                ? e
                : i?.nsfwAllowed === !1 && n
                  ? _.he.FRIENDS_AND_NON_FRIENDS
                  : (Cr.xY.get(t) ?? _.he.NON_FRIENDS);
        },
        setValue: (e) => g.he.updateSetting(e),
        useOptions: function () {
            return N.useMemo(() => (0, Cs.YS)(), []);
        },
        useSearchTerms: () => [m.intl.string(m.t.JzaP4h), m.intl.string(m.t.H9XOl3), m.intl.string(m.t.k4W40P)],
    }),
    Co = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_CONTENT_CATEGORY, {
        useTitle: () => m.intl.string(m.t.xVRG4P),
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
                u = _H(),
                d =
                    ((e = (0, Nw.Z)()),
                    (t = (0, _k.WX)()),
                    (i = N.useCallback(() => {
                        window.open(to.A.getArticleURL(t), "_blank"),
                            (0, _w.N)(_F.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _F.YX.LEARN_MORE);
                    }, [t])),
                    (n = N.useCallback(() => {
                        (0, _w.N)(_F.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, _F.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (e)
                            return {
                                type: e_.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: n,
                                useText: () =>
                                    m.intl.format(m.t.EUo0yj, {
                                        hook: (e, t) => (0, f.jsx)(uF.Anchor, { onClick: i, children: e }, t),
                                    }),
                            };
                    }, [i, e, n])),
                c =
                    ((s = (0, fx.SJ)()),
                    (l = (0, fT.b8)()),
                    (r = s && !l),
                    (a = N.useCallback(() => {
                        fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.CONTENT_AND_SOCIAL_NOTICE }),
                            (0, _w.N)(_F.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _F.YX.LEARN_MORE);
                    }, [])),
                    (o = N.useCallback(() => {
                        (0, _w.N)(_F.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, _F.YX.VIEWED);
                    }, [])),
                    N.useMemo(() => {
                        if (r)
                            return {
                                type: e_.lT.INLINE_NOTICE,
                                noticeType: "info",
                                trackView: o,
                                useText: () =>
                                    m.intl.format(m.t.OX4ybh, {
                                        hook: (e, t) => (0, f.jsx)(uF.Anchor, { onClick: a, children: e }, t),
                                    }),
                            };
                    }, [a, r, o])),
                g = _z();
            return u ?? g ?? c ?? d;
        },
        buildLayout: () => [_8, Ca, Cn, _q, _Q],
    });
var Cu = i(189883);
let Cd = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
    useTitle: () => m.intl.string(m.t["7x9dyE"]),
    useValue: () => {
        let e = g.FA.useSetting();
        return N.useMemo(() => (0, rN.Lx)(e), [e]).all;
    },
    setValue: (e) => {
        g.FA.updateSetting(e ? Q.yKI : Q.yKI & ~Q.dzt.NO_RELATION);
    },
    useDisabled: () => (0, _X.uM)(),
});
var Cc = i(665260);
let Cg = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
        useTitle: () => m.intl.string(m.t.NfeuZ3),
        useValue: () => {
            let e = g.FA.useSetting(),
                t = N.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualFriends;
        },
        setValue: (e) => {
            let t = g.FA.getSetting();
            g.FA.updateSetting(e ? Cc.UI(t, Q.dzt.MUTUAL_FRIENDS) : Cc.iE(t, Q.dzt.MUTUAL_FRIENDS, Q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _X.uM)(),
    }),
    Cm = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
        useTitle: () => m.intl.string(m.t.qsMfsH),
        useValue: () => {
            let e = g.FA.useSetting(),
                t = N.useMemo(() => (0, rN.Lx)(e), [e]);
            return t.all || t.mutualGuilds;
        },
        setValue: (e) => {
            let t = g.FA.getSetting();
            g.FA.updateSetting(e ? Cc.UI(t, Q.dzt.MUTUAL_GUILDS) : Cc.iE(t, Q.dzt.MUTUAL_GUILDS, Q.dzt.NO_RELATION));
        },
        useDisabled: () => (0, _X.uM)(),
    }),
    CA = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_NOTES_SETTING, {
        useTitle: () => m.intl.string(m.t["jK+wdr"]),
        useSubtitle: () => m.intl.string(m.t["RYh/pW"]),
        useValue: () => !g.Zd.useSetting(),
        setValue: (e) => {
            g.Zd.updateSetting(!e);
        },
        usePredicate: () => Cu.A.useConfig({ location: "Friend Request Setting" }).enabled,
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
    }),
    Ch = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.MNaVwq),
        useSubtitle: () => {
            let { enabled: e } = Cu.A.useConfig({ location: "Friend Request Setting" });
            return e ? m.intl.string(m.t.QVbF3l) : void 0;
        },
        useInlineNotice: _H,
        buildLayout: () => [Cd, Cg, Cm, CA],
    });
var CE = i(994500),
    CT = i(428678),
    Cx = i(717398),
    CS = i(730134),
    Cp = i(753686);
function Cf(e) {
    let { listType: t, numberOfUsers: i } = e,
        n = "blocked" === t;
    return (0, f.jsxs)("div", {
        className: Cp.wx,
        children: [
            (0, f.jsx)("div", { className: Cp.zc, children: n ? (0, f.jsx)(CT.K, {}) : (0, f.jsx)(im.G, {}) }),
            (0, f.jsxs)("div", {
                className: Cp.Qq,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-md/semibold",
                        color: "interactive-text-active",
                        children: m.intl.string(n ? m.t.PFOUKW : m.t["93ZDWE"]),
                    }),
                    (0, f.jsx)(k.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: n
                            ? m.intl.format(m.t["r91W/h"], { numberOfBlockedUsers: i })
                            : m.intl.format(m.t.rXUeOl, { numberOfIgnoredUsers: i }),
                    }),
                ],
            }),
        ],
    });
}
function CN(e) {
    let { userId: t, last: i } = e,
        n = (0, R.bG)([CE.A], () => CE.A.isBlocked(t)),
        s = (0, R.bG)([t6.default], () => t6.default.getUser(t)),
        [l, r] = N.useState(!1),
        a = N.useCallback(() => {
            r(!0),
                n
                    ? Cx.A.unblockUser(t).catch(() => {
                          r(!1);
                      })
                    : Cx.A.unignoreUser(t, eV.A.USER_SETTINGS).catch(() => {
                          r(!1);
                      });
        }, [n, t]);
    return null == s
        ? null
        : (0, f.jsxs)("div", {
              className: eF()(Cp.nM, { [Cp.fW]: i }),
              children: [
                  (0, f.jsxs)("div", {
                      className: Cp.eF,
                      children: [
                          (0, f.jsx)(CS.A, { user: s, size: iK._3.SIZE_40 }),
                          (0, f.jsxs)("div", {
                              className: Cp.Qq,
                              children: [
                                  (0, f.jsx)(k.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: s.globalName ?? s.username,
                                  }),
                                  (0, f.jsx)(k.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: null != s.globalName ? s.username : null,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, f.jsx)(eE.$, {
                      variant: "secondary",
                      text: m.intl.string(n ? m.t.XyHpKH : m.t["8wXU9B"]),
                      onClick: a,
                      loading: l,
                  }),
              ],
          });
}
function C_(e) {
    let { userIds: t, listType: i } = e,
        [n, s] = N.useState(5);
    return (0, f.jsx)(_j.h, {
        children: (0, f.jsxs)("div", {
            className: Cp.Nr,
            children: [
                (0, f.jsx)(Cf, { listType: i, numberOfUsers: t.length }),
                (0, f.jsx)("div", {
                    className: Cp.jS,
                    children: t.slice(0, n).map((e, i) => (0, f.jsx)(CN, { userId: e, last: i === t.length - 1 }, e)),
                }),
                n < t.length
                    ? (0, f.jsx)("div", {
                          className: Cp.vM,
                          children: (0, f.jsx)(V.D, {
                              onClick: () => {
                                  s((e) => e + 5);
                              },
                              className: Cp.Qf,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: m.intl.format(m.t.jULEDr, {
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
let CC = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_BLOCKED_USERS, {
        useSearchTerms: () => [m.intl.string(m.t.PFOUKW)],
        usePredicate: () => (0, R.bG)([CE.A], () => CE.A.getBlockedIDs().length > 0),
        Component: function () {
            let e = (0, R.yK)([CE.A], () => CE.A.getBlockedIDs());
            return (0, f.jsx)(C_, { userIds: e, listType: "blocked" });
        },
    }),
    CI = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_IGNORED_USERS, {
        useSearchTerms: () => [m.intl.string(m.t["93ZDWE"])],
        usePredicate: () => (0, R.bG)([CE.A], () => CE.A.getIgnoredIDs().length > 0),
        Component: function () {
            let e = (0, R.yK)([CE.A], () => CE.A.getIgnoredIDs());
            return (0, f.jsx)(C_, { userIds: e, listType: "ignored" });
        },
    }),
    Cb = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.LVwR56),
        useSubtitle: () =>
            m.intl.format(m.t["0aNQo9"], { helpArticle: to.A.getArticleURL(Q.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE) }),
        buildLayout: () => [CC, CI],
        usePredicate: () => {
            let { hasBlockedUsers: e, hasIgnoredUsers: t } = (0, R.cf)([CE.A], () => ({
                hasBlockedUsers: CE.A.getBlockedIDs().length > 0,
                hasIgnoredUsers: CE.A.getIgnoredIDs().length > 0,
            }));
            return t || e;
        },
    });
var Cv = i(22385),
    Cj = i(556534),
    Cy = i(111159),
    CO = i(152056),
    CR = i(219714);
let CL = { label: () => m.intl.string(m.t["32u1Dx"]), value: Cv.YG };
var CD = i(954225);
let CP = () => (0, Cj.Tx)() !== Cv.YG;
function CG() {
    return m.intl.string(m.t["T+nevN"]);
}
let CU = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_JOIN_SETTING, {
        useTitle: CG,
        useSubtitle: () =>
            m.intl.format(m.t.jXKQCu, { helpdeskArticle: to.A.getArticleURL(Q.MVz.ACTIVITY_STATUS_SETTINGS) }),
        useValue: () => {
            let e = (0, Cj.Tx)();
            return !g.pE.useSetting().includes(e);
        },
        setValue: (e) => {
            let t = Cv.xk.getState().selectedGuildId,
                i = (0, rN.CN)();
            e ? i.delete(t) : i.add(t),
                g.pE.updateSetting([...i]),
                X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                    action: CD.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
                    ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                    guild_id: t,
                });
        },
        usePredicate: CP,
    }),
    CM = () => (0, Cj.Tx)() !== Cv.YG;
function CV() {
    return m.intl.string(A.default.WhdCGP);
}
let Ck = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_ACTIVITY_SHARE_SETTING, {
    useTitle: CV,
    useSubtitle: () => m.intl.string(A.default.UQ9RHJ),
    useValue: () => {
        let e = (0, Cj.Tx)();
        return !g.JG.useSetting().includes(e);
    },
    setValue: (e) => {
        let t = Cv.xk.getState().selectedGuildId,
            i = (0, rN.Kk)();
        e ? i.delete(t) : i.add(t),
            g.JG.updateSetting([...i]),
            X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: CD.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
                ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                guild_id: t,
            });
    },
    usePredicate: CM,
});
var Cw = i(307863),
    CF = i(428031),
    CB = i(972737);
let Cz = () => ((0, Cw.e)() ? m.intl.string(m.t.PMsfcH) : m.intl.string(m.t.RAQUSN)),
    CY = (e, t) => {
        X.default.track(Q.HAw.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: t,
        });
    },
    CX = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_DMS_SETTING, {
        useTitle: Cz,
        useSubtitle: () => {
            let e = (0, Cj.Tx)(),
                t = (0, Cj.q9)(),
                i = (0, Cw.e)();
            return e === Cv.YG
                ? i
                    ? m.intl.string(m.t.XXGmuB)
                    : m.intl.string(m.t.wbYDfT)
                : t
                  ? m.intl.string(m.t.V0ka0Q)
                  : i
                    ? m.intl.string(m.t.F9WY3f)
                    : m.intl.string(m.t.G7c3Xo);
        },
        useValue: () => {
            let e = (0, Cj.Tx)(),
                t = g.$s.useSetting().includes(e),
                i = (0, CF.K)();
            return e === Cv.YG ? !i : !t;
        },
        useDisabled: () => {
            let e = (0, _X.uM)();
            return (0, Cj.Tx)() === Cv.YG && e;
        },
        setValue: (e) => {
            let t = Cv.xk.getState().selectedGuildId;
            if (t === Cv.YG) {
                var i;
                (i = !e),
                    (0, CB.O)({
                        header: m.intl.string(m.t["uUr+GR"]),
                        body: m.intl.string(m.t.hjGJBp),
                        confirmText: m.intl.string(m.t.gm1Vej),
                        cancelText: m.intl.string(m.t.p89ACt),
                        confirmButtonColor: aw.$n.Colors.BRAND,
                        onConfirm: () => {
                            g.n6.updateSetting(i), CY(i, !1);
                        },
                        onCancel: () => {
                            g.n6.updateSetting(i), g.$s.updateSetting(i ? K.A.getGuildIds() : []), CY(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.Tb)();
                e ? i.delete(t) : i.add(t),
                    g.$s.updateSetting(Array.from(i)),
                    X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CD.m.DIRECT_MESSAGES_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    });
var CH = i(953298);
let CK = (e, t) => {
    X.default.track(Q.HAw.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: t,
    });
};
function CW() {
    return m.intl.string(m.t["3o2ojh"]);
}
let CZ = (0, o.zD)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING, {
        useTitle: CW,
        useSubtitle: () =>
            (0, Cj.q9)()
                ? m.intl.format(m.t.WpnWLc, { helpdeskArticle: to.A.getArticleURL(Q.MVz.MESSAGE_REQUESTS) })
                : m.intl.format(m.t.wkm9a3, { helpdeskArticle: to.A.getArticleURL(Q.MVz.MESSAGE_REQUESTS) }),
        useValue: () => {
            let e = (0, Cj.Tx)(),
                t = (0, CF.K)(),
                i = g.$s.useSetting().includes(e),
                n = g.YX.useSetting(),
                s = g.Zr.useSetting().includes(e);
            return e === Cv.YG ? !t && !n : !i && !s;
        },
        useDisabled: () => {
            let e = (0, Cj.Tx)(),
                t = (0, _X.uM)(),
                i = (0, CF.K)(),
                n = g.$s.useSetting().includes(e);
            return e === Cv.YG ? i || t : n;
        },
        setValue: (e) => {
            let t = Cv.xk.getState().selectedGuildId;
            if (!e && (0, CH.w)())
                return void fC.A.showAgeVerificationGetStartedModal({ entryPoint: fI.q1.MESSAGE_REQUESTS_SETTINGS });
            if (t === Cv.YG) {
                var i;
                (i = !e),
                    (0, CB.O)({
                        header: m.intl.string(m.t.yAfu1p),
                        body: m.intl.string(m.t.Ry2z74),
                        confirmText: m.intl.string(m.t.gm1Vej),
                        cancelText: m.intl.string(m.t.p89ACt),
                        confirmButtonColor: aw.$n.Colors.BRAND,
                        onConfirm: () => {
                            g.YX.updateSetting(i), CK(i, !1);
                        },
                        onCancel: () => {
                            g.YX.updateSetting(i), g.Zr.updateSetting(i ? K.A.getGuildIds() : []), CK(i, !0);
                        },
                    });
            } else {
                let i = (0, rN.xo)();
                e ? i.delete(t) : i.add(t),
                    g.Zr.updateSetting(Array.from(i)),
                    X.default.track(Q.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                        action: CD.m.RESTRICT_GUILD_MESSAGE_REQUEST_TOGGLE,
                        ingress: nv.bf.USER_SETTINGS_PRIVACY_SAFETY,
                        guild_id: t,
                    });
            }
        },
    }),
    Cq = (0, o.E2)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_GUILD_SELECTOR, {
        useSearchTerms: function () {
            let e = [Cz(), CW()],
                t = CV();
            CM() && e.push(t);
            let i = CG();
            return CP() && e.push(i), e;
        },
        Component: function () {
            let { selectedGuildId: e, setSelectedGuildId: t } = (0, Cv.xk)(),
                i = (0, R.bG)([W.Ay], () => W.Ay.getFlattenedGuildIds()),
                n = (0, R.bG)([K.A], () => K.A.getGuilds()),
                s = i[0];
            N.useEffect(
                () =>
                    CO.A.subscribe(
                        (e) => {
                            let { query: t } = e;
                            return t.trim();
                        },
                        (e, i) => {
                            let n = Cv.xk.getState().selectedGuildId;
                            "" === i && "" !== e && n === Cv.YG && null != s
                                ? t(s)
                                : "" === e && n !== Cv.YG && t(Cv.YG);
                        },
                        { equalityFn: (e, t) => e === t },
                    ),
                [s, t],
            );
            let l = N.useMemo(() => {
                let e = [];
                return (
                    e.push({
                        ...CL,
                        id: CL.value,
                        label: CL.label(),
                        leading: (0, f.jsx)("div", {
                            className: CR.KP,
                            children: (0, f.jsx)(Cy.p, {
                                size: "sm",
                                color: "white",
                                "aria-hidden": !0,
                                className: CR.cl,
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
                                leading: (0, f.jsx)(gP.Ay, {
                                    className: CR.cl,
                                    guild: i,
                                    size: gP.Ay.Sizes.SMALLER,
                                    active: !0,
                                }),
                            });
                    }),
                    e
                );
            }, [i, n]);
            return (0, f.jsx)(iL.Z, {
                selectionMode: "single",
                onSelectionChange: (e) => {
                    t(e);
                },
                value: e,
                options: l,
            });
        },
    }),
    CQ = (0, o.zZ)(d.X.CONTENT_AND_SOCIAL_PERMISSIONS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.eYaT7L),
        useInlineNotice: function () {
            let e = _H(),
                t = _z();
            if ((0, Cj.Tx)() === Cv.YG) return e ?? t;
        },
        buildLayout: () => [Cq, CX, CZ, Ck, CU],
    }),
    CJ = (0, o.dT)(d.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => m.intl.string(m.t["/7xJCF"]),
        buildLayout: () => [Co, CQ, Ch, Cb],
    }),
    C$ = (0, o.dT)(d.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            EZ.A.fetch();
        },
        getTitle: () => m.intl.string(m.t.YpCiMt),
        buildLayout: () => [_M],
    }),
    C0 = (0, o.t_)(d.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        buildLayout: () => [CJ, C$],
    }),
    C1 = (0, o.i4)(d.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        icon: c8.i,
        buildLayout: () => [C0],
    });
var C2 = i(254138);
function C3() {
    return (
        n6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_START" }),
        n3.Bo.get({ url: Q.Rsh.USER_HARVEST, oldFormErrors: !0, rejectWithError: !1 })
            .then((e) => {
                n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body });
            })
            .catch((e) => {
                n6.h.dispatch({ type: "LOAD_DATA_HARVEST_TYPE_FAILURE", error: e });
            })
    );
}
function C6(e) {
    return (0, TY.$I)(e).then(
        (e) => (
            null != e && null != e.body && n6.h.dispatch({ type: "UPDATE_DATA_HARVEST_TYPE", harvestType: e.body }), e
        ),
    );
}
var C4 = i(157559),
    C5 = i(331887);
function C8() {
    let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
        t = (0, R.bG)([C5.A], () => C5.A.harvestType),
        [i, n] = N.useState(() => Date.now()),
        s = null == t ? i : new Date(t.created_at).getTime() + 2592e6,
        l = N.useRef(null);
    return (N.useEffect(() => {
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
function C7(e) {
    let { onConfirm: t, ...n } = e;
    (0, C.openModalLazy)(async () => {
        let { default: e } = await i.e("92063").then(i.bind(i, 970018));
        return (i) => (0, f.jsx)(e, { modalProps: i, onConfirm: t });
    }, n);
}
var C9 = i(160427);
let Ie = (0, o.E2)(d.X.DATA_HARVEST_REQUEST_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t.dmBSKo)],
        Component: function () {
            let e = (0, R.bG)([t6.default], () => t6.default.getCurrentUser()),
                { currentHarvestType: t, awaitingInitialRequest: i } = (0, R.cf)([C5.A], () => ({
                    currentHarvestType: C5.A.harvestType,
                    awaitingInitialRequest: C5.A.requestingHarvest,
                })),
                [n, s] = N.useState(!1);
            if (null == e) return null;
            let l =
                    !!(!e.verified || e.isStaff()) ||
                    (null != t && 2592e6 > Date.now() - new Date(t.created_at).getTime()) ||
                    i,
                r = null != t && ry()().diff(ry()(t.created_at), "days") < Q.n83,
                a = l && r,
                o = e.isStaff(),
                u = !e.verified;
            return (0, f.jsxs)(_j.h, {
                children: [
                    (0, f.jsx)(_j._, {
                        header: m.intl.string(m.t.XAHCgJ),
                        description: m.intl.format(m.t.P3kNfr, {
                            helpdeskArticle: to.A.getArticleURL(Q.MVz.GDPR_REQUEST_DATA),
                        }),
                    }),
                    a
                        ? (0, f.jsx)(ea.Z, {
                              className: C9.N,
                              children: (0, f.jsx)(k.E, {
                                  variant: "text-md/normal",
                                  children: m.intl.format(m.t.RNDlV9, {
                                      date: ry()(t.created_at).add(Q.n83, "days").format("MMMM Do YYYY"),
                                  }),
                              }),
                          })
                        : o
                          ? (0, f.jsx)(ea.Z, {
                                className: C9.N,
                                children: (0, f.jsx)(k.E, {
                                    variant: "text-md/normal",
                                    children: m.intl.string(m.t.ZPQLH2),
                                }),
                            })
                          : (0, f.jsxs)(f.Fragment, {
                                children: [
                                    u
                                        ? (0, f.jsx)(ea.Z, {
                                              className: C9.N,
                                              children: (0, f.jsx)(k.E, {
                                                  variant: "text-md/normal",
                                                  children: m.intl.string(m.t.c1f88z),
                                              }),
                                          })
                                        : null,
                                    (0, f.jsx)("div", {
                                        className: C9.x,
                                        children: (0, f.jsx)(eE.$, {
                                            variant: "primary",
                                            text: m.intl.string(m.t.dmBSKo),
                                            disabled: l,
                                            onClick: () => {
                                                C7({
                                                    onConfirm: (e) => {
                                                        s(!0),
                                                            C6(e)
                                                                .then(
                                                                    (e) => {
                                                                        null != e && null != e.body
                                                                            ? C4.A.show({
                                                                                  title: m.intl.string(m.t.i2iul5),
                                                                                  body: m.intl.string(m.t["6Nmv4i"]),
                                                                              })
                                                                            : C4.A.show({
                                                                                  title: m.intl.string(m.t.OjbtDm),
                                                                                  body: m.intl.string(m.t["0F5Jyt"]),
                                                                              });
                                                                    },
                                                                    (e) => {
                                                                        let t =
                                                                            e?.message ||
                                                                            e?.body?.message ||
                                                                            m.intl.string(m.t["0F5Jyt"]);
                                                                        C4.A.show({
                                                                            title: m.intl.string(m.t.OjbtDm),
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
    It = (0, o.zZ)(d.X.DATA_REQUEST_CATEGORY, {
        useTitle: () => m.intl.string(m.t.VjDjpb),
        initialize: () => {
            C3();
        },
        buildLayout: () => [Ie],
    });
var Ii = i(290595),
    In = i(153488);
let Is = (0, o.zD)(d.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING, {
        useTitle: () => m.intl.string(m.t.AGDDkH),
        useSubtitle: () =>
            (0, u.ri)("ClipsAllowVoiceRecording") ? m.intl.string(m.t.kyo3dJ) : m.intl.string(m.t["wW9/zQ"]),
        useValue: () => g.Q$.useSetting(),
        setValue: (e) => N7.eQ({ allowVoiceRecording: e }),
    }),
    Il = (0, o.Tf)(d.X.DATA_HARVEST_REQUEST_SETTING, {
        useTitle: () => m.intl.string(m.t.qfFFos),
        useSubtitle: function () {
            let e = C8();
            if (e.allowed) return m.intl.format(m.t.NRI6vt, { article: to.A.getArticleURL(Q.MVz.GDPR_REQUEST_DATA) });
            if ("staff" === e.reason) return m.intl.string(m.t.hIbRso);
            if ("not_verified" === e.reason)
                return m.intl.format(m.t.rBqJDq, {
                    settingsLink: (e, t) =>
                        (0, f.jsx)(
                            V.D,
                            {
                                tag: "a",
                                onClick: () => (0, ey.openUserSettings)(d.X.ACCOUNT_INFO_EMAIL_SETTING),
                                children: e,
                            },
                            t,
                        ),
                });
            if ("rate_limited" === e.reason) {
                let t = ry()(e.nextAllowed).format("MMMM Do YYYY");
                return m.intl.format(m.t["VLMG1+"], { date: t });
            }
        },
        initialize: () => {
            C3();
        },
        useDisabled: () => !C8().allowed,
        useLoading: () => (0, R.bG)([C5.A], () => C5.A.requestingHarvest),
        useVariant: () => "secondary",
        useLabel: () => m.intl.string(m.t.dmBSKo),
        onClick: function () {
            return new Promise((e) => {
                let t = !0;
                C7({
                    onConfirm: (i) => {
                        (t = !1),
                            C6(i)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? C4.A.show({
                                                  title: m.intl.string(m.t.i2iul5),
                                                  body: m.intl.string(m.t["6Nmv4i"]),
                                              })
                                            : C4.A.show({
                                                  title: m.intl.string(m.t.OjbtDm),
                                                  body: m.intl.string(m.t["0F5Jyt"]),
                                              });
                                    },
                                    (e) => {
                                        let t = e?.message || e?.body?.message || m.intl.string(m.t["0F5Jyt"]);
                                        C4.A.show({ title: m.intl.string(m.t.OjbtDm), body: t });
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
    Ir = (0, o.v_)(d.X.DATA_USAGE_DISCLAIMER_SETTING, {
        useTitle: () => m.intl.string(m.t.D60Gfj),
        useSubtitle: () =>
            (0, u.ri)("DataUsageDisclaimer")
                ? m.intl.format(m.t.dszICC, {
                      onClickDisable: () => (0, ey.openUserSettings)(d.X.ACCOUNT_DISABLE_SETTING),
                      onClickDelete: () => (0, ey.openUserSettings)(d.X.ACCOUNT_DELETE_SETTING),
                  })
                : m.intl.format(m.t.R5N31P, {
                      onClick: () =>
                          (0, ey.openUserSettings)(
                              (0, u.pC)("DataUsageDisclaimer")
                                  ? d.X.ACCOUNT_REMOVAL_CATEGORY
                                  : d.X.ACCOUNT_REMOVAL_SETTING,
                          ),
                  }),
    }),
    Ia = (0, o.zD)(d.X.DATA_USAGE_PERSONALIZATION_SETTING, {
        useTitle: () => m.intl.string(m.t.MNKzyg),
        useSubtitle: () => {
            let e = (0, u.ri)("DataUsagePersonalization");
            return m.intl.format(e ? m.t["2SiYln"] : m.t["eQL/Mr"], {
                helpdeskArticle: to.A.getArticleURL(Q.MVz.DATA_USED_FOR_RECOMMENDED),
            });
        },
        useValue: function () {
            return (0, R.bG)([In.A], () => In.A.hasConsented(Q.YAq.PERSONALIZATION));
        },
        setValue: function (e) {
            e
                ? (0, Ii.U)([Q.YAq.PERSONALIZATION], []).catch(CB.i)
                : (0, CB.O)({
                      header: m.intl.string(m.t["9SNpzv"]),
                      confirmText: m.intl.string(m.t["9g5UGw"]),
                      cancelText: m.intl.string(m.t["+ZLPw9"]),
                      onConfirm: () => {
                          (0, Ii.U)([], [Q.YAq.PERSONALIZATION]).catch(CB.i);
                      },
                      body: m.intl.string(m.t.gJvDDh),
                  });
        },
        useDisabled: _X.uM,
    }),
    Io = (0, o.zD)(d.X.DATA_USAGE_QUESTS_3P_SETTING, {
        useTitle: () => m.intl.string(m.t.CyLYKZ),
        useSubtitle: () => {
            let e = (0, u.ri)("DataUsageQuests3P");
            return m.intl.format(e ? m.t["md5l4/"] : m.t["2QFDU/"], {
                helpdeskArticle: to.A.getArticleURL(Q.MVz.QUESTS_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return !g.vf.useSetting();
        },
        setValue: function (e) {
            g.vf.updateSetting(!e);
        },
        useDisabled: function () {
            let e = g.H1.useSetting(),
                t = (0, _X.uM)();
            return e || t;
        },
        useSearchTerms: () => [m.intl.string(m.t.CyLYKZ)],
    }),
    Iu = (0, o.zD)(d.X.DATA_USAGE_QUESTS_SETTING, {
        useTitle: () => m.intl.string(m.t.sJYh5t),
        useSubtitle: () =>
            (0, u.ri)("DataUsageQuests")
                ? m.intl.string(m.t.w4fvxe)
                : m.intl.format(m.t.cf9mvV, { helpdeskArticle: to.A.getArticleURL(Q.MVz.QUESTS_PRIVACY_CONTROLS) }),
        useValue: function () {
            return !g.H1.useSetting();
        },
        setValue: function (e) {
            g.H1.updateSetting(!e);
        },
        useSearchTerms: () => [m.intl.string(m.t.VkS7Yd)],
        useDisabled: _X.uM,
    }),
    Id = (0, o.AK)(d.X.DATA_USAGE_ACTIVITY_PRIVACY_NAVIGATOR, {
        destinationKey: d.X.REGISTERED_GAMES_PANEL,
        useSubtitle: function () {
            let { gameHistory: e } = iC(),
                t = e
                    .values()
                    .filter((e) => null != e.id && null != e.name)
                    .map((e) => e.name)
                    .toArray();
            return m.intl.format(m.t.GaTAYM, { count: e.length, nameCount: t.length, game1: t[0], game2: t[1] });
        },
        useTrailingDecoration: () => ({ type: e_.wF.STACKED_ICONS, useIcons: Ig }),
        usePredicate: () =>
            (0, R.bG)([eJ.Ay], () => eJ.Ay.getGamesSeen(!1).some((e) => !(0, tN.n1)(e))) && (0, n9.xl)(),
    }),
    Ic = (0, o.gN)(d.X.DATA_USAGE_RELATED_SETTINGS, { buildLayout: () => [Id] });
function Ig() {
    let { gameHistory: e } = iC(),
        [t, i] = N.useMemo(
            () =>
                e
                    .values()
                    .map((e) => e.id)
                    .filter((e) => null != e)
                    .take(2)
                    .toArray(),
            [e],
        );
    N.useEffect(() => {
        AM.Ay.fetchApplications([t, i].filter(t4.Vq));
    }, [t, i]);
    let [n, s] = (0, R.yK)([eZ.A], () => [t, i].map(eZ.A.getApplication), [t, i]);
    return null == t
        ? null
        : {
              frontIcon: { icon: (0, f.jsx)(e7.A, { game: n, size: e7.M.MEDIUM_LARGE }), shape: e_.NF.ROUNDED },
              backIcon:
                  null != i ? { icon: (0, f.jsx)(e7.A, { game: s, size: e7.M.MEDIUM }), shape: e_.NF.ROUNDED } : null,
          };
}
let Im = (0, o.zD)(d.X.DATA_USAGE_STATISTICS_SETTING, {
        useTitle: () => m.intl.string(m.t.XuADY2),
        useSubtitle: () => {
            let e = (0, u.ri)("DataUsageStatistics");
            return m.intl.format(e ? m.t.FNqmmX : m.t["igTSG/"], {
                helpdeskArticle: to.A.getArticleURL(Q.MVz.DATA_PRIVACY_CONTROLS),
            });
        },
        useValue: function () {
            return (0, R.bG)([In.A], () => In.A.hasConsented(Q.YAq.USAGE_STATISTICS));
        },
        setValue: function (e) {
            e
                ? (0, Ii.U)([Q.YAq.USAGE_STATISTICS], []).catch(CB.i)
                : (0, CB.O)({
                      header: m.intl.string(m.t.OdPCbN),
                      body: m.intl.string(m.t.MGWabA),
                      confirmText: m.intl.string(m.t["D3+rU4"]),
                      cancelText: m.intl.string(m.t.kYpG0u),
                      onConfirm: () => (0, Ii.U)([], [Q.YAq.USAGE_STATISTICS]).catch(CB.i),
                  });
        },
        useSearchTerms: () => [m.intl.string(m.t.XuADY2)],
        useDisabled: _X.uM,
    }),
    IA = (0, o.zZ)(d.X.DATA_USAGE_CATEGORY, {
        useTitle: () => ((0, u.ri)("DataUsageCategory") ? m.intl.string(m.t.QDAriI) : m.intl.string(m.t.bvw42E)),
        useInlineNotice: _H,
        initialize: () => {
            In.A.fetchedConsents || (0, Ii.Q)();
        },
        buildLayout: () =>
            (0, u.SB)("DataUsageCategory") ? [Ir, Im, Ia, Iu, Io, Is, Il, Ic] : [Im, Iu, Io, Ia, Is, Ir],
    });
function Ih() {
    let e = g.JG.useSetting();
    return (0, R.yK)([W.Ay, K.A], () => {
        let t = new Set(e);
        return W.Ay.getFlattenedGuildIds().filter((e) => null != K.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let IE = {
        type: e_.wF.STACKED_ICONS,
        useIcons: function () {
            let e = Ih(),
                t = (0, R.yK)(
                    [K.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => K.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, f.jsx)(H.$, { guild: t[0], size: 48 }), shape: e_.NF.SQUIRCLE },
                        backIcon: { icon: (0, f.jsx)(H.$, { guild: t[1], size: 48 }), shape: e_.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, f.jsx)(H.$, { guild: t[0], size: 48 }), shape: e_.NF.SQUIRCLE } };
        },
    },
    IT = (0, o.AK)(d.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = Ih();
            if (0 === e.length) return m.intl.format(m.t.QJIJ5p, {});
            let t = K.A.getGuild(e[0]),
                i = t?.name ?? "",
                n = e.length - 1;
            return 0 === n
                ? m.intl.format(m.t["T+8J4A"], { guildName: i })
                : m.intl.format(m.t["3JyODQ"], { guildName: i, count: n });
        },
        useTrailingDecoration: function () {
            return IE;
        },
        destinationKey: d.X.ACTIVITY_PRIVACY_PANEL,
    }),
    Ix = (0, o.gN)(d.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [IT] }),
    IS = (0, o.Qx)(d.X.PROFILE_PRIVACY_SETTING, {
        useTitle: () => m.intl.string(m.t.Qnf32C),
        useOptions: () => [
            { name: m.intl.string(m.t.Boxc8R), desc: m.intl.string(m.t["nLj+nc"]), value: _.KP.FRIENDS_AND_ALL_GUILDS },
            { name: m.intl.string(m.t.YOIKBt), desc: m.intl.string(m.t.y0JZ4s), value: _.KP.FRIENDS_AND_SMALL_GUILDS },
            { name: m.intl.string(m.t.u0nlJv), desc: m.intl.string(m.t["4jnKHu"]), value: _.KP.FRIENDS_ONLY },
        ],
        useValue: g.KP.useSetting,
        setValue: function (e) {
            let t = g.KP.getSetting();
            if ((g.KP.updateSetting(e), !(0, x.W1)("ProfilePrivacySetting"))) return;
            let n = (0, I.gS)(t, e);
            null != n &&
                (0, C.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("92164"),
                        i.e("5980"),
                        i.e("62041"),
                        i.e("63786"),
                    ]).then(i.bind(i, 413201));
                    return (t) =>
                        (0, f.jsx)(e, {
                            ...t,
                            direction: n.direction,
                            affectedGuildIds: n.affectedGuildIds,
                            settingName: n.settingName,
                            mappedActivityValue: n.mappedActivityValue,
                        });
                });
        },
        useSearchTerms: () => [m.intl.string(m.t.Qnf32C)],
    }),
    Ip = (0, o.zZ)(d.X.PROFILE_PRIVACY_CATEGORY, {
        usePredicate: () => (0, x.lX)("ProfilePrivacyCategory"),
        useTitle: () => m.intl.string(m.t.ul884f),
        useSubtitle: () => m.intl.string(m.t.J0SFL2),
        buildLayout: () => [IS, Ix],
    });
var If = i(814278),
    IN = i(936388),
    I_ = i(714763);
let IC = (0, o.zD)(d.X.PERSISTENT_VERIFICATION_CODES_SETTING, {
    useTitle: () => m.intl.string(m.t["opi/XK"]),
    useSubtitle: () => m.intl.format(m.t["/T+ZlP"], { helpArticle: (0, If.Lu)() }),
    useValue: function () {
        return (0, R.bG)([I_.A], () => I_.A.getPersistentCodesEnabled());
    },
    setValue: function (e) {
        IN.A.updatePersistentCodesEnabled(e);
    },
});
var II = i(787392);
function Ib() {
    return (0, R.yK)([II.A], () => II.A.getUserIds());
}
var Iv = i(803306),
    Ij = i(966327),
    Iy = i(146003);
function IO(e) {
    let { userId: t, count: i } = e,
        { analyticsLocations: n } = (0, nU.Ay)(),
        s = (0, R.bG)([t6.default], () => t6.default.getUser(t)),
        l = xZ.Ay.getFormattedName(s),
        r = N.useCallback(() => {
            (0, If.kj)(t);
        }, [t]),
        a = N.useCallback(() => (0, TZ.openUserProfileModal)({ userId: t, sourceAnalyticsLocations: n }), [t, n]);
    return (
        N.useEffect(() => {
            (0, Iv.wz)(t);
        }, [t]),
        (0, f.jsxs)("div", {
            className: Iy.uW,
            children: [
                null != s && (0, f.jsx)(Ij.A, { className: Iy.my, user: s, size: iK._3.SIZE_40 }),
                (0, f.jsxs)("div", {
                    className: Iy.Qq,
                    children: [
                        (0, f.jsx)(V.D, {
                            className: Iy.Xh,
                            onClick: a,
                            children: (0, f.jsx)(k.E, {
                                variant: "text-md/semibold",
                                color: "interactive-text-active",
                                children: l,
                            }),
                        }),
                        (0, f.jsx)(k.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: m.intl.format(m.t["/MBjYF"], { count: i }),
                        }),
                    ],
                }),
                (0, f.jsx)(V.D, { onClick: r, className: Iy.Qz, children: (0, f.jsx)(lf.u, { size: "xs" }) }),
            ],
        })
    );
}
function IR(e) {
    let { className: t, userId: i, verification: n, index: s } = e,
        l = (0, If.tC)(n.timestamp),
        r = N.useCallback(() => {
            (0, If.W0)(i, n.verifiedKey);
        }, [n.verifiedKey, i]);
    return (0, f.jsxs)("div", {
        className: t,
        children: [
            (0, f.jsxs)("div", {
                className: Iy.Qq,
                children: [
                    (0, f.jsx)(k.E, {
                        variant: "text-sm/semibold",
                        color: "interactive-text-active",
                        children: m.intl.format(m.t.N4qBBO, { index: s + 1 }),
                    }),
                    (0, f.jsx)(k.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                ],
            }),
            (0, f.jsx)(V.D, {
                className: Iy.Kk,
                onClick: r,
                children: (0, f.jsx)(gu.P, { size: "md", color: F.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function IL(e) {
    let { userId: t } = e,
        i = (0, R.yK)([II.A], () =>
            eL()(II.A.getUserVerifiedKeys(t))
                .entries()
                .map((e) => {
                    let [t, i] = e;
                    return { verifiedKey: t, timestamp: i };
                })
                .sortBy((e) => -1 * e.timestamp)
                .value(),
        );
    return (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(IO, { userId: t, count: i.length }),
            i.map((e, n) =>
                (0, f.jsxs)(
                    N.Fragment,
                    {
                        children: [
                            (0, f.jsx)(IR, { className: Iy.nM, userId: t, index: n, verification: e }),
                            n !== i.length - 1 && (0, f.jsx)("div", { className: Iy.yF }),
                        ],
                    },
                    `${n}-${e.timestamp}`,
                ),
            ),
        ],
    });
}
var ID = i(623161);
let IP = (0, o.E2)(d.X.USERS_VERIFIED_KEYS_LIST_SETTING, {
        useSearchTerms: () => [m.intl.string(m.t["5b3FNI"])],
        usePredicate: function () {
            let e = Ib();
            return null != e && e.length > 0;
        },
        Component: function () {
            let e = Ib();
            return (0, f.jsxs)(_j.h, {
                children: [
                    (0, f.jsx)(_j._, {
                        header: m.intl.string(m.t["5b3FNI"]),
                        description: m.intl.format(m.t.jrTSWU, { helpArticle: (0, If.dc)() }),
                    }),
                    e.map((e) => (0, f.jsx)("div", { className: ID.A, children: (0, f.jsx)(IL, { userId: e }) }, e)),
                ],
            });
        },
    }),
    IG = (0, o.zZ)(d.X.VOICE_SECURITY_CATEGORY, {
        useTitle: () => ((0, u.ri)("VoiceSecurityCategory") ? m.intl.string(m.t.bTwjaz) : m.intl.string(m.t.xVk85F)),
        useInlineNotice: function () {
            let e = (0, u.ri)("VoiceSecurityCategory");
            return N.useMemo(
                () =>
                    e
                        ? null
                        : {
                              type: e_.lT.INLINE_NOTICE,
                              noticeType: "info",
                              useText: () => m.intl.format(m.t["/6sFWa"], { helpArticle: (0, If.aW)() }),
                          },
                [e],
            );
        },
        usePredicate: () => (0, ej.isDesktop)(),
        buildLayout: () => [IC, IP],
    }),
    IU = (0, o.t_)(d.X.DATA_AND_PRIVACY_PANEL, {
        useTitle: () => m.intl.string(m.t.OAuOHD),
        buildLayout: () => ((0, u.SB)("DataAndPrivacyPanel") ? [IA, Ip, IG] : [IA, Ip, It, IG]),
    }),
    IM = (0, o.i4)(d.X.DATA_AND_PRIVACY_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.OAuOHD),
        icon: C2.m,
        buildLayout: () => [IU],
    });
var IV = i(782603),
    Ik = i(899847),
    Iw = i(695515),
    IF = i(936926);
let IB = (0, o.Hn)(d.X.MOBILE_NOTIFICATION_DELAY, {
        useTitle: () => m.intl.string(m.t["8rHeOr"]),
        useSubtitle: () => m.intl.string(m.t["eJE6+J"]),
        useValue: g.cU.useSetting,
        setValue: g.cU.updateSetting,
        useOptions: () =>
            eR
                .range(1, 11)
                .map((e) => ({
                    id: e.toString(),
                    value: 60 * e,
                    label: m.intl.formatToPlainString(m.t.iXLF9W, { minutes: e }),
                })),
    }),
    Iz = (0, o.zD)(d.X.TEXT_TO_SPEECH_COMMAND, {
        useTitle: () => m.intl.string(m.t["btbS+Z"]),
        useSubtitle: () =>
            m.intl.format(m.t.Q5crhR, { onClick: () => (0, ey.openUserSettings)(d.X.TTS_PLAYBACK_RATE) }),
        useValue: g.on.useSetting,
        setValue: g.on.updateSetting,
    }),
    IY = (0, o.Qx)(d.X.TEXT_TO_SPEECH_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.JZxxGx),
        useSubtitle: () => m.intl.string(m.t.HDLtJl),
        useValue: () => (0, R.bG)([um.A], () => um.A.getTTSType()),
        setValue: (e) => ux.default.setTTSType(e),
        useOptions: () => [
            { name: m.intl.string(m.t.B1AGeJ), value: Q.aVn.ALL_CHANNELS },
            { name: m.intl.string(m.t.uzZg9e), value: Q.aVn.SELECTED_CHANNEL },
            { name: m.intl.string(m.t.DYO5Oi), value: Q.aVn.NEVER },
        ],
        usePredicate: () => i8.$j,
    }),
    IX = d.X.NOTIFICATIONS_ADVANCED_ACCORDION,
    IH = (0, o.bd)(IX, {
        useTitle: (e) => (e ? m.intl.string(m.t.RyimDk) : m.intl.string(m.t.CUICbO)),
        useCollapsedSubtitle: function () {
            return ou(IX, {
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
        buildLayout: () => [IB, Iz, IY],
    }),
    IK = (0, o.zZ)(d.X.NOTIFICATIONS_ADVANCED_CATEGORY, {
        useTitle: () => m.intl.string(m.t["31DySj"]),
        buildLayout: () => [IH],
    }),
    IW = (0, o.zD)(d.X.ENABLE_UNREAD_MESSAGE_BADGE, {
        useTitle: () => m.intl.string(m.t.VH8AIJ),
        useSubtitle: () => m.intl.string(m.t["9K4qwX"]),
        useValue: () => (0, R.bG)([um.A], () => !um.A.getDisableUnreadBadge()),
        setValue: (e) => ux.default.setDisableUnreadBadge(!e),
    }),
    IZ = (0, o.zZ)(d.X.NOTIFICATIONS_BADGES_CATEGORY, {
        useTitle: () => m.intl.string(m.t.l6w3Vj),
        buildLayout: () => [IW],
    });
var Iq = i(840559),
    IQ = i(997187),
    IJ = i(723923);
let I$ = IJ.px.map((e) =>
        (0, o.zD)(`${d.X.EMAIL_LIST_ITEM_PREFIX}${e.category}`, {
            useTitle: e.label,
            useSubtitle: e.subLabel,
            useValue: () =>
                ((e) => {
                    let { categories: t } = (0, R.cf)([IQ.A], () => IQ.A.getEmailSettings());
                    return !!t[e];
                })(e.category),
            setValue: (t) => (0, Iq.CA)(e.category, t),
        }),
    ),
    I0 = (0, o.Tf)(d.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
        useTitle: () => m.intl.string(m.t.Ra9Pwk),
        useSubtitle: () => m.intl.string(m.t.iYjQ8X),
        useLabel: () => m.intl.string(m.t.KT1pBA),
        useDisabled: () => {
            let { categories: e } = (0, R.cf)([IQ.A], () => IQ.A.getEmailSettings());
            return IJ.Zk.every((t) => !e[t]);
        },
        onClick: () => (0, Iq.NI)(),
        useVariant: () => "critical-secondary",
    }),
    I1 = (0, o.zZ)(d.X.NOTIFICATIONS_EMAIL_CATEGORY, {
        useTitle: () => m.intl.string(m.t["w/qqKK"]),
        initialize: function () {
            let { initialized: e } = IQ.A.getEmailSettings();
            e || (0, Iq.cR)();
        },
        buildLayout: () => [...I$, I0],
    }),
    I2 = (0, o.zD)(d.X.DESKTOP_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t["/0WCll"]),
        useSubtitle: () => m.intl.string(m.t.wF9ih3),
        useValue: () => (0, R.bG)([um.A], () => um.A.getDesktopType()) !== Q.nRU.NEVER,
        setValue: (e) => ux.default.setDesktopType(e ? Q.nRU.ALL : Q.nRU.NEVER),
    });
var I3 = i(832712),
    I6 = i(543465),
    I4 = i(406535),
    I5 = i(790782);
let I8 = (0, o.zD)(d.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => m.intl.string(m.t["k6m/si"]),
    useSubtitle: () => m.intl.string(m.t.LGynPs),
    useValue: () => (0, R.bG)([I6.Ay], () => I6.Ay.useNewNotifications),
    setValue: function (e) {
        I3.A.setAccountFlag(I4.i.USE_NEW_NOTIFICATIONS, e),
            e ||
                (h9.w.set("turnedOffNewNotifications", !0),
                X.default.track(Q.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
                    num_guilds_with_new_setting: K.A.getGuildsArray().filter(
                        (e) => I6.Ay.resolveGuildUnreadSetting(e) === I5.e.ONLY_MENTIONS,
                    ).length,
                }));
    },
    usePredicate: () =>
        (0, R.bG)(
            [t6.default, I6.Ay],
            () =>
                t6.default.getCurrentUser()?.isStaff() ||
                t6.default.getCurrentUser()?.isStaffPersonal() ||
                I6.Ay.useNewNotifications,
        ),
});
var I7 = i(534654);
let I9 = (0, o.zD)(d.X.SCREEN_DOWNTIME_REMINDER, {
    useTitle: () => m.intl.string(m.t.z9h8Ym),
    useSubtitle: () => m.intl.string(m.t.TummoQ),
    useValue: () => (0, R.bG)([um.A], () => um.A.screenDowntimeReminder),
    setValue: (e) => ux.default.setScreenDowntimeReminder(e),
    usePredicate: () => {
        let e = (0, IF.Vh)({ location: "ScreenDowntimeReminderSetting" }),
            t = (0, I7.A)();
        return e && t;
    },
});
var be = i(70730);
let bt = (0, o.zD)(d.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.NjOMvh),
        usePersistentBadge: () => ({ badgeType: e_.Xi.BETA }),
        useValue: g.oz.useSetting,
        setValue: function (e) {
            g.oz.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    friend_anniversary_notifications: e,
                });
        },
        useSearchTerms: () => [m.intl.string(m.t.hi4dSk)],
        usePredicate: () => {
            let { enabled: e, showDmPrompts: t } = be.u.getConfig({ location: "FriendAnniversaryNotifications" });
            return e && t;
        },
    }),
    bi = (0, T.mj)({
        kind: "user",
        name: "2026-03-friend-is-online-v3",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bn = (0, o.zD)(d.X.FRIEND_ONLINE_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.sQQgFj),
        useValue: g.NR.useSetting,
        setValue: function (e) {
            g.NR.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    friend_online_notifications: e,
                });
        },
        usePredicate: () => bi.useConfig({ location: "FriendOnlineNotifications" }).showSettingsToggle,
    }),
    bs = (0, T.mj)({
        name: "2026-03-game-update-notification",
        kind: "user",
        defaultConfig: { showToggle: !1 },
        variations: { 0: { showToggle: !1 }, 1: { showToggle: !0 } },
    });
var bl = i(275007);
let br = (0, o.zD)(d.X.GAME_UPDATE_NOTIFICATIONS, {
    useTitle: () => m.intl.string(bl.default["ZZIP+o"]),
    useValue: g.JV.useSetting,
    setValue: function (e) {
        g.JV.updateSetting(e),
            X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                update_type: I4.Y.ACCOUNT,
                game_update_notifications: e,
            });
    },
    usePredicate: () => bs.useConfig({ location: "SettingsRendererConfig" }).showToggle,
});
var ba = i(571524);
let bo = (0, o.zD)(d.X.GDM_ALL_REACTION_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.nvkXtr),
        useValue: g.c3.useSetting,
        setValue: function (e) {
            g.c3.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    gdm_all_reaction_notifications: e,
                });
        },
        usePredicate: function () {
            return (0, ba.h)("GdmAllReactionNotification").showSettingsToggle;
        },
    }),
    bu = (0, o.zD)(d.X.GO_LIVE_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.FSNIvs),
        useValue: g.Yh.useSetting,
        setValue: function (e) {
            g.Yh.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    go_live_notifications: e,
                });
        },
    }),
    bd = (0, T.mj)({
        kind: "user",
        name: "2026-01-profile-updates-notification",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 0: { showSettingsToggle: !1 }, 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 } },
    }),
    bc = (0, o.zD)(d.X.PROFILE_UPDATES_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.xBLMhQ),
        useValue: g.T3.useSetting,
        setValue: function (e) {
            g.T3.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    profile_updates_notifications: e,
                });
        },
        usePredicate: () => bd.useConfig({ location: "user_settings.ProfileUpdatesNotifications" }).showSettingsToggle,
    });
var bg = i(815807);
let bm = (0, o.Hn)(d.X.REACTION_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.Wxj9Hp),
        useOptions: () => [
            { id: "enabled", label: m.intl.string(m.t["9x/RtT"]), value: _.Tz.NOTIFICATIONS_ENABLED },
            { id: "only_dms", label: m.intl.string(m.t.fJAbQd), value: _.Tz.ONLY_DMS },
            { id: "disabled", label: m.intl.string(m.t["xu+UDU"]), value: _.Tz.NOTIFICATIONS_DISABLED },
        ],
        useValue: g.Zp.useSetting,
        setValue: (e) => (0, bg.n4)(e, g.Zp.getSetting()),
    }),
    bA = (0, o.zD)(d.X.SERVER_TRENDING_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t["k51K1+"]),
        useValue: g.Qr.useSetting,
        setValue: function (e) {
            g.Qr.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    server_trending_notifications: e,
                });
        },
        usePredicate: () => !1,
    }),
    bh = (0, T.mj)({
        kind: "user",
        name: "2026-04-upcoming-server-event",
        defaultConfig: { showSettingsToggle: !1 },
        variations: { 1: { showSettingsToggle: !0 }, 2: { showSettingsToggle: !0 }, 3: { showSettingsToggle: !0 } },
    }),
    bE = (0, o.zD)(d.X.UPCOMING_SERVER_EVENT_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.G8NPz6),
        useValue: g.zS.useSetting,
        setValue: function (e) {
            g.zS.updateSetting(e),
                X.default.track(Q.HAw.NOTIFICATION_SETTINGS_UPDATED, {
                    update_type: I4.Y.ACCOUNT,
                    upcoming_server_event_notifications: e,
                });
        },
        usePredicate: () => bh.useConfig({ location: "UpcomingServerEventNotifications" }).showSettingsToggle,
    }),
    bT = (0, o.FW)(d.X.NOTIFICATION_SELECTION_FIELD_SET, {
        variant: "compact",
        useTitle: () => m.intl.string(m.t.FEVRDV),
        buildLayout: () => [bu, bt, bn, bA, bE, br, bc, bm, bo],
    }),
    bx = (0, o.zD)(d.X.TASK_BAR_FLASHING, {
        useTitle: () => m.intl.string(m.t.xSmFQG),
        useSubtitle: () => m.intl.string(m.t.bd4j4x),
        useValue: () => (0, R.bG)([um.A], () => um.A.taskbarFlash),
        setValue: (e) => ux.default.setTaskbarFlash(e),
        usePredicate: () => (0, n9.uF)(),
    }),
    bS = (0, o.zZ)(d.X.NOTIFICATIONS_OVERVIEW_CATEGORY, {
        useTitle: () => m.intl.string(m.t["/dp6yY"]),
        buildLayout: () => [I2, bx, bT, I8, I9],
    });
var bp = i(965957),
    bf = i(312671),
    bN = i(235079);
let b_ = (0, o.zD)(d.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let e = uA.A.useHolidaySoundpack();
        return null == e ? "" : m.intl.format(m.t["E/OyBr"], { soundpack: m.intl.string(e.soundpackLabel) });
    },
    useValue: function () {
        let e = (0, R.bG)([bf.A], () => bf.A.getSoundpack()),
            t = uA.A.useHolidaySoundpack();
        return e === t?.soundpack;
    },
    setValue: function (e) {
        let t = uA.A.getHolidaySoundpack();
        tO()(null != t, "predicate should fail if no soundpack is available"), (0, bp.p)(e ? t : bN.i.CLASSIC);
    },
    usePredicate: uA.A.useIsEligible,
});
var bC = i(970931);
let bI = {
        useTitle: () => m.intl.string(m.t.jD1qzM),
        sound: "message1",
        useDisabled: bC.kB,
        useDisabledMessage: () => ((0, bC.kB)() ? m.intl.string(m.t.cIRG0s) : void 0),
    },
    bb = { useTitle: () => m.intl.string(m.t.XBrJT6), sound: "call_ringing" },
    bv = (0, o.zD)(d.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => m.intl.string(m.t.TzjwV9),
        useSubtitle: () => m.intl.format(m.t.OOiGCM, { onClick: () => uf("message3") }),
        useValue: () =>
            (0, R.bG)([um.A], () => um.A.getNotifyMessagesInSelectedChannel() && !um.A.getDisableAllSounds()),
        setValue: (e) => ux.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, R.bG)([um.A], () => um.A.getDisableAllSounds()),
    }),
    bj = (0, o.zD)(d.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => m.intl.string(m.t["2ZhCOd"]),
        useSubtitle: () => m.intl.string(m.t.EAKdPr),
        useValue: () => (0, R.bG)([um.A], () => um.A.getDisableAllSounds()),
        setValue: (e) => ux.default.toggleDisableAllSounds(e),
    }),
    by = (0, o.D1)(d.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function () {
            return () => {
                up();
            };
        },
        buildLayout: () => [uN(bI), bv, uN(bb), bj],
    }),
    bO = (0, o.AK)(d.X.NOTIFICATIONS_TO_VOICE_AND_VIDEO_SOUNDS_NAVIGATOR, {
        useSubtitle: () => m.intl.string(m.t["MMy+lm"]),
        useSearchTerms: () => [m.intl.string(m.t["MMy+lm"])],
        destinationKey: d.X.SOUNDS_CATEGORY,
    }),
    bR = (0, o.gN)(d.X.NOTIFICATIONS_SOUNDS_RELATED_SETTINGS, { buildLayout: () => [bO] }),
    bL = (0, o.zZ)(d.X.NOTIFICATIONS_SOUNDS_CATEGORY, {
        useTitle: () => m.intl.string(m.t.LweOYy),
        buildLayout: () => [b_, by, bR],
    }),
    bD = (0, o.t_)(d.X.NOTIFICATIONS_PANEL, {
        useTitle: () => m.intl.string(m.t.HcoRu0),
        initialize: () => {
            !(0, IF.Eq)({ location: "NotificationsPanel" }) ||
                null != Iw.A.getAgeGroup() ||
                Iw.A.isLoading() ||
                (Iw.A.canRefetch() && Ik.Ay.initialPageLoad());
        },
        buildLayout: () => [bS, bL, IZ, I1, IK],
    }),
    bP = (0, o.i4)(d.X.NOTIFICATIONS_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t.HcoRu0),
        icon: IV.X,
        buildLayout: () => [bD],
    }),
    bG = (0, o.WI)(d.X.USER_SECTION, {
        buildLayout: () => {
            let e = (0, u.pC)("UserSection"),
                t = (0, u.Bv)("UserSection");
            return [N3, C1, IM, ...(e ? [] : [NW]), ...(t ? [] : [E0]), ...(e ? [] : [fc]), ...(t ? [] : [TB]), bP, _I];
        },
    });
var bU = i(387758),
    bM = i(271866),
    bV = i(147964),
    bk = i(868511);
let bw = (0, o.zD)(d.X.APPLICATION_TEST_MODE, {
        useTitle: () => m.intl.string(m.t.erOqlh),
        useSubtitle: () => m.intl.string(m.t["52hMnD"]),
        usePredicate: g.Q_.useSetting,
        useValue: () => (0, R.bG)([bV.A], () => null != bV.A.testModeApplicationId),
        setValue: (e) => {
            e ? (0, C.openModal)((e) => (0, f.jsx)(bk.A, { ...e })) : bM.cL();
        },
    }),
    bF = (0, o.zD)(d.X.DEVELOPER_MODE, {
        useTitle: () => m.intl.string(m.t.ObIb1Q),
        useSubtitle: () => m.intl.format(m.t["CY6q/Q"], { apiDocsUrl: Q.X7G.API_DOCS }),
        useValue: g.Q_.useSetting,
        setValue: g.Q_.updateSetting,
        usePredicate: () => cx.p5,
    }),
    bB = (0, o.zZ)(d.X.DEVELOPER_CATEGORY, { buildLayout: () => [bF, bw] }),
    bz = (0, o.t_)(d.X.DEVELOPER_PANEL, { useTitle: () => m.intl.string(m.t["0BRxRp"]), buildLayout: () => [bB] }),
    bY = (0, o.i4)(d.X.DEVELOPER_SIDEBAR_ITEM, {
        icon: bU.G,
        useTitle: () => m.intl.string(m.t["0BRxRp"]),
        buildLayout: () => [bz],
    });
var bX = i(70688),
    bH = i(830215);
let bK = (0, o.i4)(d.X.LOGOUT_SIDEBAR_ITEM, {
        variant: "destructive",
        useTitle: () => m.intl.string(m.t["2jxGer"]),
        icon: bX.o,
        onClick: () => {
            (0, se.A)({
                title: m.intl.string(m.t["2jxGer"]),
                subtitle: m.intl.string(m.t.SUnWBB),
                confirmText: m.intl.string(m.t["2jxGer"]),
                onConfirm: () => {
                    bH.A.logout("settings");
                },
            });
        },
        buildLayout: () => [],
    }),
    bW = (0, o.WI)(d.X.UTILITY_SECTION, { buildLayout: () => [bY, bK] }),
    bZ = (0, o.Hr)({
        buildLayout: function () {
            return [pu, bG, hO, u0, (0, u.Bv)("UserSettingsRoot_buildLayout") ? Tz : iz, EK, bW];
        },
        analyticsKey: "user_settings",
    });
