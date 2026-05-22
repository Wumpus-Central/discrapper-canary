"use strict";
n.d(t, {
    Sf: () => eW,
    n6: () => eu,
    X6: () => ex,
    Iv: () => e6,
    NF: () => e7,
    j0: () => ti,
    Pf: () => et,
    Vd: () => e5,
    CY: () => eL,
    NO: () => B,
    D_: () => v,
    pK: () => tn,
    JI: () => eF,
    HZ: () => e3,
    vf: () => eA,
    Vv: () => e4,
    _8: () => e8,
    HO: () => eE,
    c3: () => M,
    SY: () => L,
    LJ: () => to,
    j7: () => ef,
    JG: () => e$,
    Yt: () => ts,
    Q_: () => eH,
    hH: () => eh,
    he: () => ev,
    FA: () => ed,
    Hu: () => ta,
    gs: () => D,
    _6: () => ew,
    Zd: () => tl,
    hD: () => eU,
    ML: () => R,
    pE: () => eX,
    UM: () => ei,
    NR: () => x,
    e: () => en,
    _Z: () => eQ,
    cU: () => eI,
    T3: () => F,
    WY: () => eo,
    Zk: () => e1,
    ns: () => J,
    vL: () => e_,
    tz: () => eO,
    on: () => ey,
    b0: () => K,
    Zt: () => el,
    gY: () => P,
    Jr: () => H,
    xM: () => Q,
    dG: () => ep,
    dm: () => eJ,
    zY: () => tt,
    KP: () => eR,
    jW: () => eG,
    eK: () => b,
    m$: () => e0,
    YX: () => ea,
    Zr: () => es,
    eh: () => ej,
    uB: () => ee,
    wv: () => X,
    jP: () => eD,
    tP: () => W,
    PZ: () => te,
    H1: () => eg,
    TA: () => e2,
    Pw: () => eq,
    Q$: () => eP,
    rs: () => ek,
    uh: () => Z,
    S0: () => eK,
    Zp: () => w,
    qN: () => e9,
    iM: () => Y,
    Qr: () => G,
    G2: () => eM,
    l_: () => eN,
    Yh: () => em,
    _z: () => z,
    zS: () => V,
    cj: () => eC,
    $s: () => ec,
    oz: () => U,
    _3: () => $,
    bm: () => q,
    Qe: () => eS,
    kt: () => eY,
    JV: () => k,
    Xi: () => tr,
    Kg: () => eT,
    SI: () => O,
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
    f = n(284016),
    h = n(594061),
    p = n(617617),
    E = n(355097);
function m(e, t, n, i) {
    let { delay: r = E.Sb.INFREQUENT_USER_ACTION, comparator: a = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        o = () => n(p.A.settings[e]?.[t]);
    return {
        getSetting: o,
        updateSetting: T(o, (n) =>
            h.wc.updateAsync(
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
        let i = f.A.getState()[t];
        return i?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: i,
        useSetting: () => {
            let i = e.useSetting();
            return (
                (0, s.bG)([f.A], () => {
                    let e = f.A.getState()[t];
                    return e?.settings[n];
                }) ?? i
            );
        },
        updateSetting: T(i, (i) =>
            f.A.shouldSync(t)
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
    N = n(750714),
    y = n(652215),
    C = n(823894);
let v = m(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    O = m(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    R = m(
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
        (e) => e?.value ?? y.P6Q.ON_CLICK,
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
    U = m(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    k = m(
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
    z = m(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    $ = m(
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
    Z = m(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    X = m(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    Q = "0",
    J = m(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? Q,
        (e) => e,
    ),
    ee = m(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    et = m(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    en = m(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ei = m(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    er = [],
    es = m(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? er,
        (e) => e,
    ),
    ea = m(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    eo = m(
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
let el = m(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    eu = m(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    ec = m(
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
let ed = m(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? y.yKI,
        (e) => o.ZQ.create({ value: e }),
    ),
    e_ = m(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ef = m(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eh = m(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ep = m(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eE = m(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => o.uN.create({ value: e }),
    ),
    em = m(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eg = m(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eA = m(
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
let eI = m(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => o.ZQ.create({ value: e }),
    ),
    eT = m(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eS = m(
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
let eN = m(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ey = m(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eC = m(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? N.Je.NON_FRIENDS,
        (e) => o.ZQ.create({ value: e }),
    );
m(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? N.uH.NON_FRIENDS,
    (e) => o.ZQ.create({ value: e }),
);
let ev = m(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? a.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eO = m(
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
let eR = m(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === a.KP.UNSET ? a.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eb = new Set(Object.values(y.clD)),
    eD = m(
        "status",
        "status",
        (e) => (null != e && eb.has(e.value) ? e.value : y.clD.UNKNOWN),
        (e) => o.hU.create({ value: e }),
    ),
    eL = m(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    ew = m(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eM = m(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    eP = m(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ex = g(
        m(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eU = g(
        m(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    ek = g(
        m(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eG = g(
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
let eF = m(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => o.as.create({ value: e ?? 0 }),
    ),
    eV = new Set([E.YP.AUTO, u.b.COZY, u.b.COMPACT]);
m(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eV.has(e.value) ? e.value : u.b.COZY),
    (e) => o.hU.create({ value: e }),
);
let eB = new Set([u.P.ALL, u.P.UNREADS, u.P.NONE]);
m(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eB.has(e.value) ? e.value : u.P.ALL),
    (e) => o.hU.create({ value: e }),
);
let eH = g(
        m(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    ej = m(
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
    eY = A(
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
    eW = A(
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
    eK = A(
        g(
            m(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? C.BJ.ALWAYS_ANIMATE,
                (e) => o.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => S.A.getOverride("animateStickers")?.value,
        () => (0, s.bG)([S.A], () => S.A.getOverride("animateStickers")?.value),
    ),
    ez = [],
    e$ = m(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? ez,
        (e) => e,
    ),
    eq = m(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? ez,
        (e) => e,
        { delay: E.Sb.FREQUENT_USER_ACTION },
    ),
    eZ = [],
    eX = m(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eZ,
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
let eQ = I({
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
    eJ = m(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    e0 = m(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    e1 = m(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e2 = m(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e3 = m(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    e6 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
        return {
            explicitContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e4 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: i ?? void 0,
        };
    },
    e5 = m("textAndImages", "explicitContentSettings", e6, e4),
    e7 = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
        return {
            goreContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e8 = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: i ?? void 0,
        };
    },
    e9 = m("textAndImages", "goreContentSettings", e7, e8);
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
let te = m(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? a.PZ.AUTO,
        (e) => e,
    ),
    tt = m("appearance", "defaultGuildThemePreference", d.v, (e) => e);
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
let tn = m(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    ti = m(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    tr = m(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : (e ?? a.NS.DEFAULT)),
        (e) => e,
    ),
    ts = m(
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
    ta = m(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    to = m(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    tl = m(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
