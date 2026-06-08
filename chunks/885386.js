"use strict";
n.d(t, {
    Sf: () => ez,
    n6: () => ed,
    X6: () => eU,
    Iv: () => e7,
    NF: () => te,
    j0: () => ta,
    Pf: () => ei,
    Vd: () => e9,
    CY: () => eM,
    NO: () => B,
    D_: () => C,
    pK: () => ts,
    JI: () => eB,
    HZ: () => e5,
    vf: () => eT,
    Vv: () => e8,
    _8: () => tt,
    HO: () => eg,
    c3: () => M,
    SY: () => L,
    LJ: () => tc,
    j7: () => ep,
    JG: () => eZ,
    Yt: () => tl,
    Q_: () => eY,
    hH: () => eE,
    he: () => eO,
    FA: () => eh,
    Hu: () => tu,
    gs: () => D,
    _6: () => eP,
    l$: () => eW,
    Zd: () => td,
    hD: () => eG,
    ML: () => O,
    pE: () => e0,
    UM: () => es,
    e: () => er,
    _Z: () => e1,
    NR: () => x,
    cU: () => eS,
    T3: () => F,
    WY: () => eu,
    Zk: () => e6,
    ns: () => et,
    hV: () => Q,
    vL: () => ef,
    on: () => eC,
    tz: () => eb,
    Zt: () => ec,
    gY: () => P,
    Jr: () => H,
    xM: () => ee,
    Sy: () => J,
    dm: () => e2,
    zY: () => tr,
    KP: () => eD,
    jW: () => eV,
    eK: () => b,
    b0: () => K,
    m$: () => e3,
    YX: () => el,
    Zr: () => eo,
    eh: () => eK,
    uB: () => en,
    wv: () => Z,
    jP: () => ew,
    dG: () => em,
    tP: () => W,
    H1: () => eI,
    TA: () => e4,
    Pw: () => eQ,
    Q$: () => ek,
    rs: () => eF,
    uh: () => X,
    S0: () => eq,
    Zp: () => w,
    PZ: () => ti,
    qN: () => tn,
    iM: () => Y,
    Qr: () => G,
    G2: () => ex,
    l_: () => ev,
    Yh: () => eA,
    _z: () => $,
    zS: () => V,
    cj: () => eR,
    $s: () => e_,
    oz: () => k,
    _3: () => z,
    bm: () => q,
    Qe: () => eN,
    kt: () => e$,
    JV: () => U,
    Xi: () => to,
    Kg: () => ey,
    SI: () => R,
});
var i = n(735438),
    r = n(923457),
    s = n(17928),
    a = n(873298),
    o = n(406935),
    l = n(52133),
    u = n(461012),
    c = n(207560),
    d = n(350503),
    _ = n(228366),
    h = n(284016),
    f = n(594061),
    p = n(617617),
    E = n(355097);
function m(e, t, n, i) {
    let { delay: r = E.Sb.INFREQUENT_USER_ACTION, comparator: a = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        o = () => n(p.A.settings[e]?.[t]);
    return {
        getSetting: o,
        updateSetting: T(o, (n) =>
            f.wc.updateAsync(
                e,
                (e) => {
                    e[t] = i(n, e[t]);
                },
                r,
            ),
        ),
        useSetting: () => (0, s.bG)([p.A], o, void 0, a),
    };
}
function g(e, t, n) {
    let i = () => {
        let i = h.A.getState()[t];
        return i?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: i,
        useSetting: () => {
            let i = e.useSetting();
            return (
                (0, s.bG)([h.A], () => {
                    let e = h.A.getState()[t];
                    return e?.settings[n];
                }) ?? i
            );
        },
        updateSetting: T(i, (i) =>
            h.A.shouldSync(t)
                ? e.updateSetting(i)
                : (_.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: i } } },
                  }),
                  Promise.resolve()),
        ),
    };
}
function A(e, t, n, i) {
    let r = () => n() ?? e.getSetting();
    return {
        getSetting: r,
        useSetting: () => {
            let t = e.useSetting();
            return i() ?? t;
        },
        updateSetting: T(
            r,
            (n) => (_.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function I(e) {
    let {
        baseSetting: t,
        isEligible: n,
        useIsEligible: i,
        eligibleDefault: r,
        ineligibleDefault: s,
        onUseDefault: a,
    } = e;
    return {
        getSetting: () => {
            let e = t.getSetting();
            return null != e ? e : (a?.(), n() ? r() : s);
        },
        useSetting: () => {
            let e = t.useSetting(),
                n = i();
            return null != e ? e : (a?.(), n ? r() : s);
        },
        updateSetting: (e) => t.updateSetting(e),
    };
}
function T(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
var S = n(397438),
    y = n(750714),
    N = n(652215),
    v = n(823894);
let C = m(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    R = m(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    O = m(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    b = m(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    D = m(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? N.P6Q.ON_CLICK,
        (e) => o.hU.create({ value: e }),
    ),
    L = m(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
m(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let w = m(
        "notifications",
        "reactionNotifications",
        (e) => e ?? a.Tz.NOTIFICATIONS_ENABLED,
        (e) => e,
    ),
    M = m(
        "notifications",
        "enableGdmAllReactionNotifications",
        (e) =>
            null != e && void 0 !== e.value
                ? e.value
                : p.A.settings?.notifications?.reactionNotifications !== a.Tz.NOTIFICATIONS_DISABLED,
        (e) => o._t.create({ value: !!e }),
    );
m(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? a.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    m(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    );
let P = m(
    "notifications",
    "enableScreenDowntimeScheduleNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: !!e }),
);
m(
    "notifications",
    "enableVoiceActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: !!e }),
);
let x = m(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    k = m(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    U = m(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    G = m(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    F = m(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    );
m(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: !!e }),
);
let V = m(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    B = m(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: !!e }),
    ),
    H = m(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    j = [],
    Y = m(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? j,
        (e) => e,
    ),
    W = m(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? j,
        (e) => e,
    ),
    K = m(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? j,
        (e) => e,
    ),
    $ = m(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    z = m(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    q = m(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    X = m(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    Z = m(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    Q = m(
        "notifications",
        "notifyFriendsOnComeOnline",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    J = m(
        "notifications",
        "notifyFriendsOnProfileUpdate",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ee = "0",
    et = m(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? ee,
        (e) => e,
    ),
    en = m(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ei = m(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    er = m(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    es = m(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ea = [],
    eo = m(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? ea,
        (e) => e,
    ),
    el = m(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    eu = m(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : o._t.create({ value: e })),
    );
m(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => o._t.create({ value: e }),
);
let ec = m(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    ed = m(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    e_ = m(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
m(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => o.ZQ.create({ value: e }),
);
let eh = m(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? N.yKI,
        (e) => o.ZQ.create({ value: e }),
    ),
    ef = m(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ep = m(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eE = m(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    em = m(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eg = m(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => o.uN.create({ value: e }),
    ),
    eA = m(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eI = m(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eT = m(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
m(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let eS = m(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => o.ZQ.create({ value: e }),
    ),
    ey = m(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eN = m(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
m(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let ev = m(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eC = m(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eR = m(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? y.Je.NON_FRIENDS,
        (e) => o.ZQ.create({ value: e }),
    );
m(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? y.uH.NON_FRIENDS,
    (e) => o.ZQ.create({ value: e }),
);
let eO = m(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? a.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eb = m(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
m(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let eD = m(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === a.KP.UNSET ? a.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eL = new Set(Object.values(N.clD)),
    ew = m(
        "status",
        "status",
        (e) => (null != e && eL.has(e.value) ? e.value : N.clD.UNKNOWN),
        (e) => o.hU.create({ value: e }),
    ),
    eM = m(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eP = m(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    ex = m(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ek = m(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eU = g(
        m(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eG = g(
        m(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    eF = g(
        m(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eV = g(
        m(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
g(
    m(
        "textAndImages",
        "defaultReactionEmoji",
        (e) => {
            let { emojiId: t, emojiName: n, animated: i } = e ?? {};
            return {
                emojiId: t?.value,
                emojiName: n?.value,
                animated: i?.value,
                disableDoubleTap: e?.disableDoubleTap?.value ?? !1,
            };
        },
        (e) => {
            let { emojiId: t, emojiName: n, animated: i, disableDoubleTap: r } = e;
            return {
                emojiId: o.ol.create({ value: t }),
                emojiName: o.hU.create({ value: n }),
                animated: o._t.create({ value: i }),
                disableDoubleTap: o._t.create({ value: r }),
            };
        },
        { comparator: l.A },
    ),
    "text",
    "defaultReactionEmoji",
);
let eB = m(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => o.as.create({ value: e ?? 0 }),
    ),
    eH = new Set([E.YP.AUTO, u.b.COZY, u.b.COMPACT]);
m(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eH.has(e.value) ? e.value : u.b.COZY),
    (e) => o.hU.create({ value: e }),
);
let ej = new Set([u.P.ALL, u.P.UNREADS, u.P.NONE]);
m(
    "appearance",
    "messagePreviews",
    (e) => (null != e && ej.has(e.value) ? e.value : u.P.ALL),
    (e) => o.hU.create({ value: e }),
);
let eY = g(
        m(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eW = m(
        "appearance",
        "darkSidebar",
        (e) => e ?? !1,
        (e) => e,
    ),
    eK = m(
        "appearance",
        "clientThemeSettings",
        (e) => ({
            backgroundGradientPresetId: e?.backgroundGradientPresetId?.value,
            customUserThemeSettings:
                e?.customUserThemeSettings != null
                    ? {
                          colors: e.customUserThemeSettings.colors,
                          gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                          gradientAngle: e.customUserThemeSettings.gradientAngle,
                          baseMix: e.customUserThemeSettings.baseMix,
                      }
                    : void 0,
        }),
        (e) => ({
            backgroundGradientPresetId:
                null != e.backgroundGradientPresetId ? o.ZQ.create({ value: e.backgroundGradientPresetId }) : void 0,
            customUserThemeSettings:
                null != e.customUserThemeSettings
                    ? {
                          colors: e.customUserThemeSettings.colors,
                          gradientColorStops: e.customUserThemeSettings.gradientColorStops,
                          gradientAngle: e.customUserThemeSettings.gradientAngle,
                          baseMix: e.customUserThemeSettings.baseMix,
                      }
                    : void 0,
        }),
        { comparator: i.isEqual },
    ),
    e$ = A(
        g(
            m(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => o._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => S.A.getOverride("gifAutoPlay")?.value,
        () => (0, s.bG)([S.A], () => S.A.getOverride("gifAutoPlay")?.value),
    ),
    ez = A(
        g(
            m(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => o._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => S.A.getOverride("animateEmoji")?.value,
        () => (0, s.bG)([S.A], () => S.A.getOverride("animateEmoji")?.value),
    ),
    eq = A(
        g(
            m(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? v.BJ.ALWAYS_ANIMATE,
                (e) => o.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => S.A.getOverride("animateStickers")?.value,
        () => (0, s.bG)([S.A], () => S.A.getOverride("animateStickers")?.value),
    ),
    eX = [],
    eZ = m(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eX,
        (e) => e,
    ),
    eQ = m(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eX,
        (e) => e,
        { delay: E.Sb.FREQUENT_USER_ACTION },
    ),
    eJ = [],
    e0 = m(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eJ,
        (e) => e,
    );
I({
    baseSetting: m(
        "privacy",
        "defaultGuildsActivityRestricted",
        (e) => e,
        (e) => e ?? a.AN.OFF,
    ),
    isEligible: () => (0, c.To)(r.p.GUILD_ACTIVITY_STATUS),
    useIsEligible: () => (0, c.yv)(r.p.GUILD_ACTIVITY_STATUS),
    ineligibleDefault: a.AN.OFF,
    eligibleDefault: () => a.AN.ON_FOR_LARGE_GUILDS,
});
let e1 = I({
        baseSetting: m(
            "privacy",
            "defaultGuildsActivityRestrictedV2",
            (e) => (e === a.Qd.ACTIVITY_STATUS_UNSET ? null : e),
            (e) => e ?? a.Qd.ACTIVITY_STATUS_OFF,
        ),
        isEligible: () => (0, c.To)(r.p.GUILD_ACTIVITY_STATUS),
        useIsEligible: () => (0, c.yv)(r.p.GUILD_ACTIVITY_STATUS),
        ineligibleDefault: a.Qd.ACTIVITY_STATUS_OFF,
        eligibleDefault: () => a.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
    }),
    e2 = m(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    e3 = m(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    e6 = m(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e4 = m(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e5 = m(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    e7 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
        return {
            explicitContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e8 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: i ?? void 0,
        };
    },
    e9 = m("textAndImages", "explicitContentSettings", e7, e8),
    te = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
        return {
            goreContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    tt = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: i ?? void 0,
        };
    },
    tn = m("textAndImages", "goreContentSettings", te, tt);
m(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => o._t.create({ value: e }),
),
    m(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
let ti = m(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? a.PZ.AUTO,
        (e) => e,
    ),
    tr = m("appearance", "defaultGuildThemePreference", d.v, (e) => e);
m(
    "appearance",
    "launchPadMode",
    (e) => e ?? a.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    m(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? a.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let ts = m(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    ta = m(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    to = m(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : (e ?? a.NS.DEFAULT)),
        (e) => e,
    ),
    tl = m(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => o.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: E.Sb.AUTOMATED },
    ),
    tu = m(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    tc = m(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    td = m(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
