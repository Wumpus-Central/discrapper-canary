"use strict";
n.d(t, {
    Sf: () => ej,
    n6: () => eo,
    X6: () => eM,
    Iv: () => e2,
    NF: () => e4,
    j0: () => te,
    Pf: () => J,
    Vd: () => e6,
    CY: () => eb,
    NO: () => F,
    D_: () => C,
    pK: () => e9,
    JI: () => ek,
    HZ: () => e1,
    vf: () => em,
    Vv: () => e3,
    _8: () => e5,
    HO: () => eh,
    c3: () => w,
    SY: () => D,
    LJ: () => tr,
    j7: () => ed,
    JG: () => eK,
    Yt: () => tn,
    Q_: () => eV,
    hH: () => e_,
    he: () => ey,
    FA: () => eu,
    Hu: () => ti,
    gs: () => b,
    _6: () => eD,
    Zd: () => ts,
    hD: () => eP,
    ML: () => O,
    pE: () => eq,
    UM: () => et,
    NR: () => M,
    e: () => ee,
    _Z: () => eZ,
    cU: () => eg,
    T3: () => k,
    WY: () => es,
    Zk: () => eJ,
    ns: () => X,
    vL: () => ec,
    tz: () => eC,
    on: () => eS,
    b0: () => Y,
    Zt: () => ea,
    dG: () => ef,
    Jr: () => V,
    xM: () => Z,
    dm: () => eX,
    KP: () => ev,
    jW: () => eU,
    eK: () => R,
    m$: () => eQ,
    YX: () => er,
    Zr: () => ei,
    eh: () => eB,
    uB: () => Q,
    wv: () => q,
    jP: () => eR,
    tP: () => j,
    PZ: () => e8,
    H1: () => eE,
    TA: () => e0,
    Pw: () => ez,
    Q$: () => ew,
    rs: () => ex,
    uh: () => $,
    S0: () => eY,
    Zp: () => L,
    qN: () => e7,
    iM: () => H,
    Qr: () => U,
    G2: () => eL,
    l_: () => eT,
    Yh: () => ep,
    _z: () => W,
    zS: () => G,
    cj: () => eN,
    $s: () => el,
    oz: () => P,
    _3: () => K,
    bm: () => z,
    Qe: () => eI,
    kt: () => eH,
    JV: () => x,
    Xi: () => tt,
    Kg: () => eA,
    SI: () => v,
});
var i = n(735438),
    r = n(923457),
    s = n(17928),
    a = n(873298),
    o = n(406935),
    l = n(52133),
    u = n(461012),
    c = n(207560),
    d = n(228366),
    _ = n(284016),
    f = n(594061),
    h = n(617617),
    p = n(355097);
function E(e, t, n, i) {
    let { delay: r = p.Sb.INFREQUENT_USER_ACTION, comparator: a = (e, t) => e === t } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        o = () => n(h.A.settings[e]?.[t]);
    return {
        getSetting: o,
        updateSetting: I(o, (n) =>
            f.wc.updateAsync(
                e,
                (e) => {
                    e[t] = i(n, e[t]);
                },
                r,
            ),
        ),
        useSetting: () => (0, s.bG)([h.A], o, void 0, a),
    };
}
function m(e, t, n) {
    let i = () => {
        let i = _.A.getState()[t];
        return i?.settings[n] ?? e.getSetting();
    };
    return {
        getSetting: i,
        useSetting: () => {
            let i = e.useSetting();
            return (
                (0, s.bG)([_.A], () => {
                    let e = _.A.getState()[t];
                    return e?.settings[n];
                }) ?? i
            );
        },
        updateSetting: I(i, (i) =>
            _.A.shouldSync(t)
                ? e.updateSetting(i)
                : (d.h.dispatch({
                      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
                      changes: { [t]: { settings: { [n]: i } } },
                  }),
                  Promise.resolve()),
        ),
    };
}
function g(e, t, n, i) {
    let r = () => n() ?? e.getSetting();
    return {
        getSetting: r,
        useSetting: () => {
            let t = e.useSetting();
            return i() ?? t;
        },
        updateSetting: I(
            r,
            (n) => (d.h.dispatch({ type: "USER_SETTINGS_OVERRIDE_CLEAR", settings: [t] }), e.updateSetting(n)),
        ),
    };
}
function A(e) {
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
function I(e, t) {
    return function (n) {
        return "function" == typeof n ? t(n(e())) : t(n);
    };
}
var T = n(397438),
    S = n(656402),
    N = n(652215),
    y = n(823894);
let C = E(
        "textAndImages",
        "useLegacyChatInput",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    v = E(
        "textAndImages",
        "useRichChatInput",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    O = E(
        "textAndImages",
        "includeStickersInAutocomplete",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    R = E(
        "textAndImages",
        "includeSoundmojiInAutocomplete",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    b = E(
        "textAndImages",
        "renderSpoilers",
        (e) => e?.value ?? N.P6Q.ON_CLICK,
        (e) => o.hU.create({ value: e }),
    ),
    D = E(
        "textAndImages",
        "useThreadSidebar",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
E(
    "notifications",
    "showInAppNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let L = E(
        "notifications",
        "reactionNotifications",
        (e) => e ?? a.Tz.NOTIFICATIONS_ENABLED,
        (e) => e,
    ),
    w = E(
        "notifications",
        "enableGdmAllReactionNotifications",
        (e) =>
            null != e && void 0 !== e.value
                ? e.value
                : h.A.settings?.notifications?.reactionNotifications !== a.Tz.NOTIFICATIONS_DISABLED,
        (e) => o._t.create({ value: !!e }),
    );
E(
    "notifications",
    "customStatusPushNotifications",
    (e) => e ?? a.DQ.STATUS_PUSH_UNSET,
    (e) => e,
),
    E(
        "notifications",
        "enableSummaryReminderNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    E(
        "notifications",
        "enableVoiceActivityNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    );
let M = E(
        "notifications",
        "enableFriendOnlineNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    P = E(
        "notifications",
        "enableFriendAnniversaryNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    x = E(
        "notifications",
        "enableGameUpdateNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    U = E(
        "notifications",
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    k = E(
        "notifications",
        "enableProfileUpdatesNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    );
E(
    "notifications",
    "enableFriendGamingActivityNotifications",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: !!e }),
);
let G = E(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    F = E(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: !!e }),
    ),
    V = E(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    B = [],
    H = E(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? B,
        (e) => e,
    ),
    j = E(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? B,
        (e) => e,
    ),
    Y = E(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? B,
        (e) => e,
    ),
    W = E(
        "textAndImages",
        "viewImageDescriptions",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    K = E(
        "textAndImages",
        "showCommandSuggestions",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    z = E(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    $ = E(
        "voiceAndVideo",
        "disableStreamPreviews",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    q = E(
        "notifications",
        "notifyFriendsOnGoLive",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    Z = "0",
    X = E(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? Z,
        (e) => e,
    ),
    Q = E(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    J = E(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ee = E(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    et = E(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    en = [],
    ei = E(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? en,
        (e) => e,
    ),
    er = E(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    es = E(
        "privacy",
        "nonSpamRetrainingOptIn",
        (e) => e?.value,
        (e) => (null == e ? void 0 : o._t.create({ value: e })),
    );
E(
    "privacy",
    "contactSyncEnabled",
    (e) => e?.value ?? !1,
    (e) => o._t.create({ value: e }),
);
let ea = E(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    eo = E(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    el = E(
        "privacy",
        "restrictedGuildIds",
        (e) => e ?? [],
        (e) => e,
    );
E(
    "privacy",
    "friendDiscoveryFlags",
    (e) => e?.value ?? 0,
    (e) => o.ZQ.create({ value: e }),
);
let eu = E(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? N.yKI,
        (e) => o.ZQ.create({ value: e }),
    ),
    ec = E(
        "debug",
        "rtcPanelShowVoiceStates",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ed = E(
        "textAndImages",
        "convertEmoticons",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e_ = E(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ef = E(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    eh = E(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => o.uN.create({ value: e }),
    ),
    ep = E(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eE = E(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    em = E(
        "privacy",
        "quests3PDataOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
E(
    "voiceAndVideo",
    "nativePhoneIntegrationEnabled",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let eg = E(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => o.ZQ.create({ value: e }),
    ),
    eA = E(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eI = E(
        "textAndImages",
        "viewNsfwCommands",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
E(
    "privacy",
    "detectPlatformAccounts",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let eT = E(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eS = E(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eN = E(
        "textAndImages",
        "explicitContentFilter",
        (e) => e?.value ?? S.Je.NON_FRIENDS,
        (e) => o.ZQ.create({ value: e }),
    );
E(
    "textAndImages",
    "dmSpamFilter",
    (e) => e?.value ?? S.uH.NON_FRIENDS,
    (e) => o.ZQ.create({ value: e }),
);
let ey = E(
        "textAndImages",
        "dmSpamFilterV2",
        (e) => e ?? a.he.DEFAULT_UNSET,
        (e) => e,
    ),
    eC = E(
        "status",
        "showCurrentGame",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    );
E(
    "privacy",
    "recentGamesEnabled",
    (e) => e?.value ?? !0,
    (e) => o._t.create({ value: e }),
);
let ev = E(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === a.KP.UNSET ? a.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eO = new Set(Object.values(N.clD)),
    eR = E(
        "status",
        "status",
        (e) => (null != e && eO.has(e.value) ? e.value : N.clD.UNKNOWN),
        (e) => o.hU.create({ value: e }),
    ),
    eb = E(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eD = E(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eL = E(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ew = E(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eM = m(
        E(
            "textAndImages",
            "inlineAttachmentMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineAttachmentMedia",
    ),
    eP = m(
        E(
            "textAndImages",
            "inlineEmbedMedia",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "inlineEmbedMedia",
    ),
    ex = m(
        E(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eU = m(
        E(
            "textAndImages",
            "renderReactions",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderReactions",
    );
m(
    E(
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
let ek = E(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => o.as.create({ value: e ?? 0 }),
    ),
    eG = new Set([p.YP.AUTO, u.b.COZY, u.b.COMPACT]);
E(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eG.has(e.value) ? e.value : u.b.COZY),
    (e) => o.hU.create({ value: e }),
);
let eF = new Set([u.P.ALL, u.P.UNREADS, u.P.NONE]);
E(
    "appearance",
    "messagePreviews",
    (e) => (null != e && eF.has(e.value) ? e.value : u.P.ALL),
    (e) => o.hU.create({ value: e }),
);
let eV = m(
        E(
            "appearance",
            "developerMode",
            (e) => e ?? !1,
            (e) => e,
        ),
        "appearance",
        "developerMode",
    ),
    eB = E(
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
    eH = g(
        m(
            E(
                "textAndImages",
                "gifAutoPlay",
                (e) => e?.value ?? !0,
                (e) => o._t.create({ value: e }),
            ),
            "text",
            "gifAutoPlay",
        ),
        "gifAutoPlay",
        () => T.A.getOverride("gifAutoPlay")?.value,
        () => (0, s.bG)([T.A], () => T.A.getOverride("gifAutoPlay")?.value),
    ),
    ej = g(
        m(
            E(
                "textAndImages",
                "animateEmoji",
                (e) => e?.value ?? !0,
                (e) => o._t.create({ value: e }),
            ),
            "text",
            "animateEmoji",
        ),
        "animateEmoji",
        () => T.A.getOverride("animateEmoji")?.value,
        () => (0, s.bG)([T.A], () => T.A.getOverride("animateEmoji")?.value),
    ),
    eY = g(
        m(
            E(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? y.BJ.ALWAYS_ANIMATE,
                (e) => o.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => T.A.getOverride("animateStickers")?.value,
        () => (0, s.bG)([T.A], () => T.A.getOverride("animateStickers")?.value),
    ),
    eW = [],
    eK = E(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eW,
        (e) => e,
    ),
    ez = E(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eW,
        (e) => e,
        { delay: p.Sb.FREQUENT_USER_ACTION },
    ),
    e$ = [],
    eq = E(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? e$,
        (e) => e,
    );
A({
    baseSetting: E(
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
let eZ = A({
        baseSetting: E(
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
    eX = E(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    eQ = E(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eJ = E(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e0 = E(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e1 = E(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    e2 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
        return {
            explicitContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e3 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: i ?? void 0,
        };
    },
    e6 = E("textAndImages", "explicitContentSettings", e2, e3),
    e4 = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
        return {
            goreContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e5 = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: i ?? void 0,
        };
    },
    e7 = E("textAndImages", "goreContentSettings", e4, e5);
E(
    "appearance",
    "searchResultExactCountEnabled",
    (e) => e?.value ?? !1,
    (e) => o._t.create({ value: e }),
),
    E(
        "appearance",
        "happeningNowCardsDisabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
let e8 = E(
    "appearance",
    "timestampHourCycle",
    (e) => e ?? a.PZ.AUTO,
    (e) => e,
);
E(
    "appearance",
    "launchPadMode",
    (e) => e ?? a.Ar.LAUNCH_PAD_DISABLED,
    (e) => e,
),
    E(
        "appearance",
        "swipeRightToLeftMode",
        (e) => e ?? a.kW.SWIPE_RIGHT_TO_LEFT_UNSET,
        (e) => e,
    );
let e9 = E(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    te = E(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    tt = E(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : (e ?? a.NS.DEFAULT)),
        (e) => e,
    ),
    tn = E(
        "inAppFeedbackSettings",
        "inAppFeedbackStates",
        (e) =>
            (0, i.mapValues)(e ?? {}, (e) => (0, i.mapValues)(e, (e) => (e?.value != null ? Number(e.value) : void 0))),
        (e) =>
            (0, i.mapValues)(e, (e) =>
                (0, i.mapValues)(e, (e) => o.ol.create({ value: null != e ? String(e) : void 0 })),
            ),
        { delay: p.Sb.AUTOMATED },
    ),
    ti = E(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    tr = E(
        "notifications",
        "enableDmReplyNudgeReminders",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ts = E(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
