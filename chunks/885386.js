"use strict";
n.d(t, {
    Sf: () => e$,
    n6: () => ec,
    X6: () => ek,
    Iv: () => e5,
    NF: () => e9,
    j0: () => ts,
    Pf: () => en,
    Vd: () => e8,
    CY: () => ew,
    NO: () => V,
    D_: () => v,
    pK: () => tr,
    JI: () => eV,
    HZ: () => e4,
    vf: () => eI,
    Vv: () => e7,
    _8: () => te,
    HO: () => em,
    c3: () => M,
    SY: () => L,
    j7: () => ef,
    JG: () => eZ,
    Yt: () => to,
    Q_: () => eH,
    hH: () => ep,
    he: () => eR,
    FA: () => e_,
    Hu: () => tl,
    gs: () => D,
    _6: () => eM,
    l$: () => eY,
    Zd: () => tu,
    hD: () => eU,
    pE: () => eJ,
    UM: () => er,
    NR: () => x,
    e: () => ei,
    _Z: () => e0,
    T3: () => G,
    cU: () => eT,
    ML: () => O,
    WY: () => el,
    Zk: () => e3,
    ns: () => ee,
    hV: () => X,
    vL: () => eh,
    on: () => eN,
    tz: () => eO,
    Zt: () => eu,
    gY: () => P,
    Jr: () => B,
    xM: () => J,
    Sy: () => Q,
    dm: () => e1,
    zY: () => ti,
    KP: () => eb,
    jW: () => eF,
    eK: () => b,
    b0: () => W,
    m$: () => e2,
    YX: () => eo,
    Zr: () => ea,
    eh: () => eW,
    uB: () => et,
    wv: () => Z,
    jP: () => eL,
    dG: () => eE,
    tP: () => Y,
    H1: () => eA,
    TA: () => e6,
    Pw: () => eX,
    Q$: () => ex,
    rs: () => eG,
    uh: () => q,
    S0: () => ez,
    Zp: () => w,
    PZ: () => tn,
    qN: () => tt,
    iM: () => H,
    Qr: () => U,
    G2: () => eP,
    l_: () => eC,
    Yh: () => eg,
    _z: () => K,
    zS: () => F,
    cj: () => ev,
    $s: () => ed,
    oz: () => k,
    _3: () => $,
    bm: () => z,
    Qe: () => ey,
    kt: () => eK,
    Xi: () => ta,
    Kg: () => eS,
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
    C = n(652215),
    N = n(823894);
let v = m(
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
        (e) => e?.value ?? C.P6Q.ON_CLICK,
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
        "enableServerTrendingNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    G = m(
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
let F = m(
        "notifications",
        "enableUpcomingServerEventNotifications",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: !!e }),
    ),
    V = m(
        "notifications",
        "quietMode",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: !!e }),
    ),
    B = m(
        "notifications",
        "focusModeExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    j = [],
    H = m(
        "textAndImages",
        "emojiPickerCollapsedSections",
        (e) => e ?? j,
        (e) => e,
    ),
    Y = m(
        "textAndImages",
        "stickerPickerCollapsedSections",
        (e) => e ?? j,
        (e) => e,
    ),
    W = m(
        "textAndImages",
        "soundboardPickerCollapsedSections",
        (e) => e ?? j,
        (e) => e,
    ),
    K = m(
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
    z = m(
        "voiceAndVideo",
        "alwaysPreviewVideo",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    q = m(
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
    X = m(
        "notifications",
        "notifyFriendsOnComeOnline",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    Q = m(
        "notifications",
        "notifyFriendsOnProfileUpdate",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    J = "0",
    ee = m(
        "notifications",
        "notificationCenterAckedBeforeId",
        (e) => e ?? J,
        (e) => e,
    ),
    et = m(
        "gameLibrary",
        "installShortcutDesktop",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    en = m(
        "gameLibrary",
        "installShortcutStartMenu",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ei = m(
        "privacy",
        "allowActivityPartyPrivacyFriends",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    er = m(
        "privacy",
        "allowActivityPartyPrivacyVoiceChannel",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    es = [],
    ea = m(
        "privacy",
        "messageRequestRestrictedGuildIds",
        (e) => e ?? es,
        (e) => e,
    ),
    eo = m(
        "privacy",
        "defaultMessageRequestRestricted",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    el = m(
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
let eu = m(
        "privacy",
        "defaultGuildsRestricted",
        (e) => e ?? !1,
        (e) => e,
    ),
    ec = m(
        "privacy",
        "defaultGuildsRestrictedV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    ed = m(
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
let e_ = m(
        "privacy",
        "friendSourceFlags",
        (e) => e?.value ?? C.yKI,
        (e) => o.ZQ.create({ value: e }),
    ),
    eh = m(
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
    ep = m(
        "textAndImages",
        "messageDisplayCompact",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eE = m(
        "voiceAndVideo",
        "soundboardSettings",
        (e) => e,
        (e) => e,
    ),
    em = m(
        "voiceAndVideo",
        "soundmojiVolume",
        (e) => e?.value ?? 100,
        (e) => o.uN.create({ value: e }),
    ),
    eg = m(
        "voiceAndVideo",
        "streamNotificationsEnabled",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    eA = m(
        "privacy",
        "dropsOptedOut",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eI = m(
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
let eT = m(
        "voiceAndVideo",
        "afkTimeout",
        (e) => e?.value ?? 60,
        (e) => o.ZQ.create({ value: e }),
    ),
    eS = m(
        "textAndImages",
        "viewNsfwGuilds",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    ey = m(
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
let eC = m(
        "gameLibrary",
        "disableGamesTab",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    eN = m(
        "textAndImages",
        "enableTtsCommand",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ev = m(
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
let eR = m(
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
let eb = m(
        "privacy",
        "profileVisibility",
        (e) => (null == e || e === a.KP.UNSET ? a.KP.FRIENDS_AND_ALL_GUILDS : e),
        (e) => e,
    ),
    eD = new Set(Object.values(C.clD)),
    eL = m(
        "status",
        "status",
        (e) => (null != e && eD.has(e.value) ? e.value : C.clD.UNKNOWN),
        (e) => o.hU.create({ value: e }),
    ),
    ew = m(
        "status",
        "statusExpiresAtMs",
        (e) => e ?? "0",
        (e) => e,
    ),
    eM = m(
        "status",
        "statusCreatedAtMs",
        (e) => e,
        (e) => e,
    ),
    eP = m(
        "status",
        "customStatus",
        (e) => e,
        (e) => e,
    ),
    ex = m(
        "clips",
        "allowVoiceRecording",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    ek = g(
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
    eG = g(
        m(
            "textAndImages",
            "renderEmbeds",
            (e) => e?.value ?? !0,
            (e) => o._t.create({ value: e }),
        ),
        "text",
        "renderEmbeds",
    ),
    eF = g(
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
let eV = m(
        "localization",
        "timezoneOffset",
        (e) => e?.value ?? null,
        (e) => o.as.create({ value: e ?? 0 }),
    ),
    eB = new Set([E.YP.AUTO, u.b.COZY, u.b.COMPACT]);
m(
    "appearance",
    "channelListLayout",
    (e) => (null != e && eB.has(e.value) ? e.value : u.b.COZY),
    (e) => o.hU.create({ value: e }),
);
let ej = new Set([u.P.ALL, u.P.UNREADS, u.P.NONE]);
m(
    "appearance",
    "messagePreviews",
    (e) => (null != e && ej.has(e.value) ? e.value : u.P.ALL),
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
    eY = m(
        "appearance",
        "darkSidebar",
        (e) => e ?? !1,
        (e) => e,
    ),
    eW = m(
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
    eK = A(
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
    e$ = A(
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
    ez = A(
        g(
            m(
                "textAndImages",
                "animateStickers",
                (e) => e?.value ?? N.BJ.ALWAYS_ANIMATE,
                (e) => o.ZQ.create({ value: e }),
            ),
            "text",
            "animateStickers",
        ),
        "animateStickers",
        () => S.A.getOverride("animateStickers")?.value,
        () => (0, s.bG)([S.A], () => S.A.getOverride("animateStickers")?.value),
    ),
    eq = [],
    eZ = m(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eq,
        (e) => e,
    ),
    eX = m(
        "privacy",
        "activityRestrictedGuildIds",
        (e) => e ?? eq,
        (e) => e,
        { delay: E.Sb.FREQUENT_USER_ACTION },
    ),
    eQ = [],
    eJ = m(
        "privacy",
        "activityJoiningRestrictedGuildIds",
        (e) => e ?? eQ,
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
let e0 = I({
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
    e1 = m(
        "privacy",
        "familyCenterEnabledV2",
        (e) => e?.value,
        (e) => o._t.create({ value: e }),
    ),
    e2 = m(
        "privacy",
        "hideLegacyUsername",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    e3 = m(
        "privacy",
        "allowGameFriendDmsInDiscord",
        (e) => e?.value ?? !0,
        (e) => o._t.create({ value: e }),
    ),
    e6 = m(
        "privacy",
        "slayerSdkReceiveDmsInGame",
        (e) => e ?? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
        (e) => e,
    ),
    e4 = m(
        "ads",
        "alwaysDeliver",
        (e) => e ?? !1,
        (e) => e,
    ),
    e5 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e ?? {};
        return {
            explicitContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            explicitContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    e7 = (e) => {
        let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: i } = e;
        return {
            explicitContentGuilds: t ?? void 0,
            explicitContentFriendDm: n ?? void 0,
            explicitContentNonFriendDm: i ?? void 0,
        };
    },
    e8 = m("textAndImages", "explicitContentSettings", e5, e7),
    e9 = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e ?? {};
        return {
            goreContentGuilds: t ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentFriendDm: n ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            goreContentNonFriendDm: i ?? a.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        };
    },
    te = (e) => {
        let { goreContentGuilds: t, goreContentFriendDm: n, goreContentNonFriendDm: i } = e;
        return {
            goreContentGuilds: t ?? void 0,
            goreContentFriendDm: n ?? void 0,
            goreContentNonFriendDm: i ?? void 0,
        };
    },
    tt = m("textAndImages", "goreContentSettings", e9, te);
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
let tn = m(
        "appearance",
        "timestampHourCycle",
        (e) => e ?? a.PZ.AUTO,
        (e) => e,
    ),
    ti = m("appearance", "defaultGuildThemePreference", d.v, (e) => e);
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
let tr = m(
        "userContent",
        "lastReceivedChangelogId",
        (e) => e ?? "0",
        (e) => e,
    ),
    ts = m(
        "safetySettings",
        "ignoreProfileSpeedbumpDisabled",
        (e) => e ?? !1,
        (e) => e,
    ),
    ta = m(
        "appearance",
        "uiDensity",
        (e) => (e === a.NS.UNSET_UI_DENSITY ? a.NS.DEFAULT : (e ?? a.NS.DEFAULT)),
        (e) => e,
    ),
    to = m(
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
    tl = m(
        "textAndImages",
        "isCrossDmSearchEnabled",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    ),
    tu = m(
        "privacy",
        "hideFriendRequestNotes",
        (e) => e?.value ?? !1,
        (e) => o._t.create({ value: e }),
    );
